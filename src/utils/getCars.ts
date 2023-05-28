import { getDocs, query, limit } from "firebase/firestore";
import { carsRef } from "../../firebase";
import { Car } from "../../types";
const getCars = async (carsLimit: number) => {
  const carsQuery = query(carsRef, limit(carsLimit));
  const carsSnapshot = await getDocs(carsQuery);
  const cars: Car[] = [];
  carsSnapshot.forEach((doc) => {
    cars.push(doc.data() as Car);
  });
  return cars;
};

export default getCars;
