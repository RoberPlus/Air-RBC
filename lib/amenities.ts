import { IconType } from 'react-icons';
import {
  FaUtensils,
  FaWifi,
  FaTemperatureHigh,
  FaRegSnowflake,
  FaBed,
  FaShower,
  FaCar,
  FaFireAlt,
  FaTree,
  FaVihara,
  FaBabyCarriage,
  FaChair,
  FaGamepad,
  FaPaw,
  FaBath,
  FaTv,
  FaBroom,
  FaBicycle,
  FaBook,
  FaCoffee,
  FaMugHot,
} from 'react-icons/fa';

export type Amenity = {
  name: string;
  icon: IconType;
  selected: boolean;
};

export const amenities: Amenity[] = [
  { name: 'Kitchen', icon: FaUtensils, selected: false },
  { name: 'Wi-Fi', icon: FaWifi, selected: false },
  { name: 'Heating', icon: FaTemperatureHigh, selected: false },
  { name: 'Air conditioning', icon: FaRegSnowflake, selected: false },
  { name: 'Linens', icon: FaBed, selected: false },
  { name: 'Towels', icon: FaShower, selected: false },
  { name: 'Parking', icon: FaCar, selected: false },
  { name: 'Fireplace', icon: FaFireAlt, selected: false },
  { name: 'Garden', icon: FaTree, selected: false },
  { name: 'BBQ grill', icon: FaVihara, selected: false },
  { name: 'Cot', icon: FaBabyCarriage, selected: false },
  { name: 'High chair', icon: FaChair, selected: false },
  { name: 'Games', icon: FaGamepad, selected: false },
  { name: 'Pet friendly', icon: FaPaw, selected: false },
  { name: 'Hot tub', icon: FaBath, selected: false },
  { name: 'TV', icon: FaTv, selected: false },
  { name: 'Video games', icon: FaGamepad, selected: false },
  { name: 'Cleaning service', icon: FaBroom, selected: false },
  { name: 'Bicycles', icon: FaBicycle, selected: false },
  { name: 'Books', icon: FaBook, selected: false },
  { name: 'Coffee maker', icon: FaCoffee, selected: false },
  { name: 'Tea and coffee', icon: FaMugHot, selected: false },
];
