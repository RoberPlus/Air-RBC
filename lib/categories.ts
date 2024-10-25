import { IconType } from 'react-icons';
import { CategoryLabel } from '@/types/types';
import {
  FaHome,
  FaWater,
  FaTree,
  FaHouzz,
  FaCity,
  FaUmbrellaBeach,
  FaArchway,
  FaMountain,
  FaHorseHead,
  FaWineGlass,
  FaHotel,
} from 'react-icons/fa';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export const categories: Category[] = [
  { label: 'Cabin', icon: FaHome },
  { label: 'Apartment', icon: FaHotel },
  { label: 'Lakefront', icon: FaWater },
  { label: 'National Parks', icon: FaMountain },
  { label: 'Countryside', icon: FaHorseHead },
  { label: 'Treehouse', icon: FaTree },
  { label: 'Design', icon: FaHouzz },
  { label: 'Historical Homes', icon: FaArchway },
  { label: 'Iconic Cities', icon: FaCity },
  { label: 'Tropical', icon: FaUmbrellaBeach },
  { label: 'Vineyards', icon: FaWineGlass },
];
