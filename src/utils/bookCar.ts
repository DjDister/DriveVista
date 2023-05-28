import { CarFormData } from "../../types";
import { db } from "../../firebase";
import { addDoc, collection, doc } from "firebase/firestore";
import getCarDocId from "./getCarDocId";
import convertDateToTimestamp from "./convertDateToTimestamp";

const bookCar = async (form: CarFormData, uid: string) => {
  const carDocId = await getCarDocId(form.carId);
  const carRef = doc(db, "cars", carDocId);
  const bookingsRef = collection(carRef, "bookings");
  await addDoc(bookingsRef, {
    pickUpDate: convertDateToTimestamp(form.pickUpDate),
    dropOffDate: convertDateToTimestamp(form.dropOffDate),
    dropOffLocation: form.dropOffLocation,
    pickUpLocation: form.pickUpLocation,
    bookedBy: uid,
  })
    .then(() => {
      return "Car has been booked";
    })
    .catch(() => {
      return "Error booking car, please try again ";
    });
};

export default bookCar;
