import { IconType } from "react-icons";

export type actionFunction = (prevState: any, formData: FormData) => Promise<{ message: string }>;

export type CategoryLabel =
  | 'Cabin'
  | 'Apartment'
  | 'Lakefront'
  | 'National Parks'
  | 'Countryside'
  | 'Treehouse'
  | 'Design'
  | 'Historical Homes'
  | 'Iconic Cities'
  | 'Tropical'
  | 'Vineyards';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};

export type DateRangeSelect = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type Booking = {
  checkIn: Date;
  checkOut: Date;
};
