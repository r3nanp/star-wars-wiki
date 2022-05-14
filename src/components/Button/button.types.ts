import { ButtonHTMLAttributes, ReactElement } from 'react'

export type IconProps =
  | { startIcon: ReactElement; endIcon?: never }
  | { endIcon: ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

type ButtonSizes = 'lg' | 'md' | 'sm'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary'
  size?: ButtonSizes
  isLoading?: boolean
} & IconProps
