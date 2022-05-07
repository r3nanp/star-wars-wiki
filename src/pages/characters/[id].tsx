import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

//* CUSTOM IMPORTS
import { Character } from '@/types/Character'
import { useResource } from '@/hooks/useResource'
import { Heading, Spinner } from '@/components'
import { useResourceById } from '@/hooks/useResourceById'

const Character: NextPage = () => {
  const {
    query: { id },
    isFallback,
  } = useRouter()

  const { isLoading, data: character } = useResourceById<Character>(
    id as string,
    'people',
    {
      enabled: !isFallback && !!id && Number.isInteger(Number(id)),
    }
  )

  const { data: planet, isLoading: isPlanetLoading } = useResource(
    character?.homeworld || ''
  )

  if (!id) {
    return null
  }

  if (isLoading) return <Spinner size="lg" className="m-auto" />

  return (
    <main>
      <Heading>Este é {character?.name}</Heading>
      {isPlanetLoading ? (
        <Spinner size="sm" className="m-auto" />
      ) : (
        <Link href={`/planets/${planet?.id}`}>
          <a>Do planeta {planet?.name}</a>
        </Link>
      )}
    </main>
  )
}

export default Character
