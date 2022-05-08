import { ReactNode } from 'react'
import clsx from 'clsx'

type HeadingProps = {
  className?: string
  children: ReactNode
}

export const Heading = ({ className = '', children }: HeadingProps) => {
  return <h1 className={clsx('text-2xl font-bold text-white', className)}>{children}</h1>
}
