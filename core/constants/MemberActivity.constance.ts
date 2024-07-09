import { EMemberInfo, PetInfo } from '../enum';
import CheckListIcon from '@/assets/svg/checklist.svg';
import ReuseIcon from '@/assets/svg/reuse.svg';
import UserIcon from '@/assets/svg/user.svg';
import { IconArrowsLeftRight } from '@tabler/icons-react';

export const MEMBER_ACTIVITY = [
  {
    value: EMemberInfo.ACTION,
    icon: CheckListIcon,
    title: 'Mogelijke acties',
  },
  {
    value: EMemberInfo.LIFECYCLE,
    icon: ReuseIcon,
    title: 'Lifecycle Wouter en Pets',
  },
  {
    value: EMemberInfo.TRANSACTION,
    icon: IconArrowsLeftRight,
    title: 'Transactiegeschiedenis',
  },
  {
    value: EMemberInfo.PROFILE,
    icon: UserIcon,
    title: 'Profiel Wouter Meeuwisse',
  },
];
