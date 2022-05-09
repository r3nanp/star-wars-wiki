import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

//* CUSTOM IMPORTS
import { Character } from '@/types/Character'
import { useResourceById, useResource } from '@/hooks'
import { Button, Heading, ListContainer, ListItem, Spinner } from '@/components'

const Character: NextPage = () => {
  const {
    query: { id },
    isFallback,
    push,
  } = useRouter()

  // Get character data
  const { isLoading, data: character } = useResourceById<Character>(
    id as string,
    'people',
    {
      enabled: !isFallback && !!id && Number.isInteger(Number(id)),
    }
  )

  // Get the character homeworld
  const { data: planet, isLoading: isPlanetLoading } = useResource(
    character?.homeworld || ''
  )

  if (!id) return null

  if (isLoading || isPlanetLoading)
    return <Spinner size="lg" className="m-auto" />

  return (
    <main>
      <div className="flex flex-col justify-center items-center">
        <Heading className="my-4">This is {character?.name}</Heading>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading className="text-gray-800">Hair color:</Heading>
            {character?.hair_color}
          </ListItem>
        </ListContainer>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading className="text-gray-800">Gender:</Heading>
            {character?.gender}
          </ListItem>
        </ListContainer>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading className="text-gray-800">Birth year:</Heading>
            {character?.birth_year}
          </ListItem>
        </ListContainer>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading className="text-gray-800">Homeworld:</Heading>
            <Link href={`/planets/${planet?.id}`}>
              <a className="text-black">
                <span className="underline">{planet?.name}</span>
              </a>
            </Link>
          </ListItem>
        </ListContainer>

        <Button className="mt-4" onClick={() => push('/')}>
          Go home
        </Button>
      </div>
    </main>
  )
}

export default Character
