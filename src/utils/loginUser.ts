import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import errorFeedback from "./errorMesssagesAuth";
import { MutationTypes, useStore } from "../store/store";
const loginUser = (formData: { password: string; login: string }) => {
  const store = useStore();
  const loginStatus = signInWithEmailAndPassword(
    auth,
    formData.login,
    formData.password
  )
    .then(async (userCredential) => {
      const userInfo = {
        email: userCredential.user.email ?? "",
        displayName: userCredential.user.displayName ?? "",
        uid: userCredential.user.uid,
      };
      store.commit(MutationTypes.LOG_IN, userInfo);
    })
    .catch((error) => {
      return (
        errorFeedback.find((errorElem) => errorElem.code === error.code)
          ?.message ?? "Try again later"
      );
    });
  return loginStatus;
};

export default loginUser;
