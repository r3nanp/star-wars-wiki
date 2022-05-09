import clsx from 'clsx'
import { ReactNode } from 'react'
import { Header } from './Header'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <main
    className={clsx(
      'max-w-2xl bg-black px-4 min-h-screen m-auto py-4 flex flex-col align-center justify-center text-center',
      className
    )}
  >
    <Header />
    {children}
  </main>
)
