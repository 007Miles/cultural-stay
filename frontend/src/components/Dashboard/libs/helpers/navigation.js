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

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <HiOutlineViewGrid />,
  },
  {
    key: 'Restuarants',
    label: 'Restuarants',
    path: '/sellers',
    icon: <HiOfficeBuilding />,
  },
  {
    key: 'Tourist Sites',
    label: 'Tourist Sites',
    path: '/orders',
    icon: <HiLibrary />,
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
    path: '/settings',
    icon: <HiOutlineCog />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <HiOutlineQuestionMarkCircle />,
  },
]
