import { ReactNode } from 'react'
import { Header } from './Header'

type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => (
  <main className="max-w-2xl bg-black px-4 min-h-screen m-auto py-4 flex flex-col align-center justify-center text-center">
    <Header />
    {children}
  </main>
)
