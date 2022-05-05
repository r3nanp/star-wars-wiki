import { ReactNode } from 'react'
import { Header } from './Header'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <main className="max-w-3xl min-h-screen m-auto flex flex-col align-center justify-center text-center">
    <Header />

    {children}
  </main>
)
