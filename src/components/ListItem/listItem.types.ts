import { ReactNode } from 'react'
import { BaseComponent } from '@/types'

export type ListItemProps = BaseComponent & {
  children: ReactNode
}
