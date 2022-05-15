import clsx from 'clsx'
import { ListContainerProps } from './listContainer.types'

export const ListContainer = ({
  children,
  className = '',
}: ListContainerProps) => {
  return (
    <ul
      className={clsx(
        'w-full flex flex-col gap-4 items-center justify-center',
        className
      )}
    >
      {children}
    </ul>
  )
}
