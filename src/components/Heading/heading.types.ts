import { ReactNode } from 'react'

type HeadingColors = 'gray-dark' | 'white'

export type HeadingProps = {
  className?: string
  children: ReactNode
  color?: HeadingColors
}
