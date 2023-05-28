import { Timestamp } from "firebase/firestore";

const convertDateToTimestamp = (dateString: string) => {
  const date = new Date(dateString);
  const timestamp = Timestamp.fromDate(date);
  return timestamp;
};

export default convertDateToTimestamp;
