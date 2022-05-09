import { ReactNode } from 'react'
import clsx from 'clsx'
import { BaseComponent } from '@/types/BaseComponent'

type ListItemProps = BaseComponent & {
  children: ReactNode
}

export const ListItem = ({ className = '', children }: ListItemProps) => {
  return (
    <li
      className={clsx(
        'w-1/3 text-center bg-primary p-2 rounded-md',
        className
      )}
    >
      {children}
    </li>
  )
}
