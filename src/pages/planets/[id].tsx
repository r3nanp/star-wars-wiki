import { useState } from 'react'
import { useRouter } from 'next/router'

import { useResource } from '@/hooks/useResource'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'

export const Planet = () => {
  const [planet, setPlanet] = useState()

  const {
    query: { id },
  } = useRouter()

  const { data: characters } = useResource(`/planet/${id}`)

  useAsyncEffect(async () => {}, [])

  if (!planet) return <h1 className="text-2xl font-bold">Loading...</h1>

  return <main></main>
}
