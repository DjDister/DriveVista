import { query, where, getDocs } from "firebase/firestore";
import { carsRef } from "../../firebase";

const getDocId = async (carId: string) => {
  const q = query(carsRef, where("id", "==", carId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0].id;
};

export default getDocId;
