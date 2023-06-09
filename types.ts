export type navbarLinksType = {
  name: string;
  path: string;
};

export type User = {
  email: string;
  uid: string;
};

export type Car = {
  id: string;
  mark: string;
  model: string;
  productionYear: number;
  price: number;
  name: string;
  seats: number;
  transmission: string;
  doors: number;
  fuel: string;
  image: string;
};

export interface CarFormData {
  pickUpDate: string;
  dropOffDate: string;
  carId: string;
  pickUpLocation: string;
  dropOffLocation: string;
}
