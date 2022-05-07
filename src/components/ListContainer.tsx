import { ReactNode } from 'react'
import clsx from 'clsx'
import { BaseComponent } from '@/types/BaseComponent'

type ListContainerProps = BaseComponent & {
  children: ReactNode
}

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
