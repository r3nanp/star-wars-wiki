import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button, Heading } from '@/components'

export const FourOhFour: NextPage = () => {
  const router = useRouter()

  return (
    <main className="container-center h-screen flex-col">
      <Image
        src="/star-wars.gif"
        alt="Star wars logo"
        width={350}
        height={200}
      />

      <Heading color="white" className="mb-8">
        Looks like you got lost, go back and start to navigate!
      </Heading>

      <Button onClick={() => router.push('/')}>Go back home</Button>
    </main>
  )
}

export default FourOhFour
