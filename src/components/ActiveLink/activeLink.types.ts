import { ReactElement } from 'react'
import { LinkProps } from 'next/link'

export type ActiveLinkProps = LinkProps & {
  children: ReactElement
  shouldMatchExactHref?: boolean
}
