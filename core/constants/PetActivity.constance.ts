import { PetInfo } from '../enum';
import CheckListIcon from '../../assets/svg/checklist.svg';
import ReuseIcon from '../../assets/svg/reuse.svg';

export const PET_ACTIVITY = [
  {
    value: PetInfo.ACTION,
    icon: CheckListIcon,
    title: 'Mogelijke acties',
  },
  {
    value: PetInfo.LIFECYCLE,
    icon: ReuseIcon,
    title: 'Lifecycle van',
  },
];
