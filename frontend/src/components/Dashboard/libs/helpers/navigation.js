import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
  HiLibrary,
  HiOfficeBuilding,
} from 'react-icons/hi'
import { IoFastFoodSharp } from 'react-icons/io5'
import { MdRecommend } from 'react-icons/md'
import { GiMountainRoad } from 'react-icons/gi'

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/admin',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'Restuarants',
    label: 'Restuarants',
    path: '/admin/restaurants',
    icon: <HiOfficeBuilding />,
  },
  {
    key: 'Food',
    label: 'Food',
    path: '/admin/food',
    icon: <IoFastFoodSharp />,
  },
  {
    key: 'Tourist Sites',
    label: 'Tourist Sites',
    path: '/admin/attractionsList',
    icon: <GiMountainRoad />,
  },
  {
    key: 'Site Recommendations',
    label: 'Site Recommendations',
    path: '/admin/recommendationsList',
    icon: <MdRecommend />,
  },
  {
    key: 'Users',
    label: 'Users',
    path: '/customers',
    icon: <HiOutlineUsers />,
  },
  {
    key: 'messages',
    label: 'Messages',
    path: '/messages',
    icon: <HiOutlineAnnotation />,
  },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    // path: '/settings',
    icon: <HiOutlineCog />,
  },
]
