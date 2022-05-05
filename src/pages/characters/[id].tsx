import { useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { api } from '@/services/api'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'
import { Character } from '@/types/Character'
import { useResource } from '@/hooks/useResource'

const Character: NextPage = () => {
  const [character, setCharacter] = useState<Character>()

  const { query } = useRouter()
  const { data: planet } = useResource(character?.homeworld || '')

  const { id } = query

  useAsyncEffect(async () => {
    if (id) {
      const { data } = await api.get(`/people/${id}`)

      console.log(data)

      setCharacter(data)
    }
  }, [id])

  if (!character || !planet) return <h1>Loading...</h1>

  return (
    <main>
      <h1 className="text-2xl font-bold">Este é {character.name}</h1>
      <Link href={`/planets/${planet.id}`}>
        <a>Do planeta {planet.name}</a>
      </Link>
    </main>
  )
}

export default Character
