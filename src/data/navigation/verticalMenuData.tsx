// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
  {
    label: 'Home',
    href: '/home',
    icon: 'ri-home-smile-line'
  },
  {
    label: 'About',
    href: '/employees',
    icon: 'ri-information-line'
  }
]

export default verticalMenuData
