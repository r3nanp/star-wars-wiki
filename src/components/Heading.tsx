import { ReactNode } from 'react'
import clsx from 'clsx'

const colors = {
  'gray-dark': 'text-gray-800',
  white: 'text-white',
}

type HeadingProps = {
  className?: string
  children: ReactNode
  color?: keyof typeof colors
}

export const Heading = ({ className = '', children, color = 'gray-dark' }: HeadingProps) => {
  return (
    <h1 className={clsx('text-2xl font-bold', colors[color], className)}>
      {children}
    </h1>
  )
}
