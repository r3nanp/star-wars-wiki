import clsx from 'clsx'

import { Spinner } from '../Spinner'
import { ButtonProps } from './button.types'

const variants = {
  primary: 'bg-primary text-black hover:text-gray-50:bg-yellow-700',
}

const sizes = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-6 text-md',
  lg: 'py-3 px-8 text-lg',
}

export const Button = ({
  type = 'button',
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  startIcon,
  endIcon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        'flex justify-center items-center border border-yellow-100 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm font-medium focus:outline-none transition-all hover:border hover:border-white hover:brightness-75',
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {isLoading && <Spinner size="sm" className="text-current" />}
      {!isLoading && startIcon}
      <span className="mx-2">{rest.children}</span> {!isLoading && endIcon}
    </button>
  )
}
