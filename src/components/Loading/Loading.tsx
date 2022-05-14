import Image from 'next/image'
import { Spinner } from '../Spinner'

export const Loading = () => {
  return (
    <div className="container-center flex-col h-screen">
      <Image src="/star.svg" height={350} width={350} alt="Star Wars logo" />

      <Spinner size="lg" />
    </div>
  )
}
