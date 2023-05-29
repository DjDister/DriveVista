import { carsRef } from "../../firebase";
import { CarFormData } from "../../types";
import getCarDocId from "./getCarDocId";
import { collection, getDocs } from "firebase/firestore";

const isCarAvailable = async (form: CarFormData) => {
  const carDocId = await getCarDocId(form.carId);
  const bookingsRef = collection(carsRef, carDocId, "bookings");

  const querySnapshot = await getDocs(bookingsRef);
  const incomingDropOffDate = new Date(form.dropOffDate);
  const incomingPickUpDate = new Date(form.pickUpDate);
  for (const doc of querySnapshot.docs) {
    const booking = doc.data();
    const existingPickUpDate = booking.pickUpDate.toDate();
    const existingDropOffDate = booking.dropOffDate.toDate();
    if (
      (incomingPickUpDate >= existingPickUpDate &&
        incomingPickUpDate < existingDropOffDate) ||
      (incomingDropOffDate > existingPickUpDate &&
        incomingDropOffDate <= existingDropOffDate) ||
      (incomingPickUpDate <= existingPickUpDate &&
        incomingDropOffDate >= existingDropOffDate)
    ) {
      return false;
    }
  }

  return true;
};

export default isCarAvailable;
