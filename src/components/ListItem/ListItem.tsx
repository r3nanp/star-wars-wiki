import clsx from 'clsx'
import { ListItemProps } from './listItem.types'

export const ListItem = ({ className = '', children }: ListItemProps) => {
  return (
    <li
      className={clsx(
        'md:w-1/2 w-full text-center bg-primary p-2 rounded-md',
        className
      )}
    >
      {children}
    </li>
  )
}
