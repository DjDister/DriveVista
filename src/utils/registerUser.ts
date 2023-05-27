import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import errorFeedback from "./errorMesssagesAuth";
import { MutationTypes, useStore } from "../store/store";

const registerUser = async (formData: {
  password: string;
  passwordRepeated: string;
  login: string;
}) => {
  const store = useStore();
  if (formData.password === formData.passwordRepeated) {
    const authStatus = await createUserWithEmailAndPassword(
      auth,
      formData.login,
      formData.password
    )
      .then((userCredential) => {
        const userInfo = {
          email: userCredential.user.email ?? "",
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
    return authStatus;
  } else {
    return "Passwords are different";
  }
};

export default registerUser;
