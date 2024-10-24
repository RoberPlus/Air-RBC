import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';
import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';
import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';
import { GoContainer } from 'react-icons/go';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'Cabin'
  | 'Tent'
  | 'Airstream'
  | 'Cottage'
  | 'Container'
  | 'Caravan'
  | 'Tiny'
  | 'Magic'
  | 'Marehouse'
  | 'Lodge';

export const categories: Category[] = [
  {
    label: 'Cabin',
    icon: MdCabin,
  },
  {
    label: 'Airstream',
    icon: PiVan,
  },
  {
    label: 'Tent',
    icon: TbTent,
  },
  {
    label: 'Marehouse',
    icon: PiWarehouse,
  },
  {
    label: 'Cottage',
    icon: TbBuildingCottage,
  },
  {
    label: 'Magic',
    icon: GiMushroomHouse,
  },
  {
    label: 'Container',
    icon: GoContainer,
  },
  {
    label: 'Caravan',
    icon: TbCaravan,
  },

  {
    label: 'Tiny',
    icon: PiLighthouse,
  },
  {
    label: 'Lodge',
    icon: GiWoodCabin,
  },
];
