import clsx from 'clsx'
import { HeadingProps } from './heading.types'

const colors = {
  'gray-dark': 'text-gray-800',
  white: 'text-white',
}

export const Heading = ({ className = '', children, color = 'gray-dark' }: HeadingProps) => {
  return (
    <h1 className={clsx('text-2xl font-bold', colors[color], className)}>
      {children}
    </h1>
  )
}
