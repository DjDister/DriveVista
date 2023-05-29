import { CarFormData } from "../../types";

const validCarForm = (form: CarFormData): string => {
  const { pickUpDate, dropOffDate, carId, pickUpLocation, dropOffLocation } =
    form;

  if (
    pickUpDate === "" ||
    dropOffDate === "" ||
    carId === "" ||
    pickUpLocation === "" ||
    dropOffLocation === ""
  ) {
    return "Please fill all the fields";
  }

  if (new Date(pickUpDate) > new Date(dropOffDate)) {
    return "Pick up date cannot be later than drop off date";
  }

  if (new Date(pickUpDate) < new Date()) {
    return "Pick up date cannot be earlier than today";
  }

  if (new Date(dropOffDate) < new Date()) {
    return "Drop off date cannot be earlier than today";
  }

  if (
    new Date(pickUpDate).getDay() === 0 ||
    new Date(dropOffDate).getDay() === 0
  ) {
    return "Pick up and drop off dates cannot be on Sunday";
  }

  if (
    new Date(pickUpDate).getDay() === 6 ||
    new Date(dropOffDate).getDay() === 6
  ) {
    return "Pick up and drop off dates cannot be on Saturday";
  }

  if (
    new Date(pickUpDate).getFullYear() > new Date().getFullYear() + 2 ||
    new Date(dropOffDate).getFullYear() > new Date().getFullYear() + 2
  ) {
    return "Pick and drop off has to be within 2 years from now";
  }

  return "";
};

export default validCarForm;
