import {  useState } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { api } from '@/services/api'
import { useAsyncEffect } from '@/hooks/useAsyncEffect'

const Character: NextPage = () => {
  const { query } = useRouter()
  const [characters, setCharacters] = useState<any>([])

  useAsyncEffect(async () => {
    if (query.id) {
      const { data } = await api.get(`/people/${query.id}`)

      setCharacters(data)
    }
  }, [query.id])

  if (!characters) return <h1>Loading...</h1>

  return <main>{characters.map(c => console.log(c))}</main>
}

export default Character
