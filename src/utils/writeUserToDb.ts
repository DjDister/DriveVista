import { addDoc } from "firebase/firestore";
import { usersRef } from "../../firebase";
import { User } from "../../types";

const writeUserToDb = async (user: User) => {
  await addDoc(usersRef, {
    email: user.email,
    uid: user.uid,
  });
};

export default writeUserToDb;
