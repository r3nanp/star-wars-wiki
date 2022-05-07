import { NextPage } from 'next'
import { useRouter } from 'next/router'

//* CUSTOM IMPORTS
import { useResourceById } from '@/hooks'
import { Planets } from '@/types/Planets'
import { Button, CharacterName } from '@/components'
import { Heading, ListContainer, ListItem, Spinner } from '@/components'
import { formatPopulation } from '@/utils/formatPopulation'

export const Planet: NextPage = () => {
  const {
    query: { id },
    isFallback,
    push,
  } = useRouter()

  const {
    isLoading,
    isSuccess,
    data: planetResource,
  } = useResourceById<Planets>(id as string, 'planets', {
    enabled: !isFallback && !!id && Number.isInteger(Number(id)),
  })

  if (!id) {
    return null
  }

  if (isLoading) return <Spinner className="m-auto" size="lg" />

  return (
    <main>
      {isSuccess && (
        <>
          <Heading className="my-4">Characteristics:</Heading>

          <ListContainer>
            <ListItem>
              <span className="font-bold text-lg">Population:</span>&nbsp;
              {formatPopulation(planetResource?.population)}
            </ListItem>

            <ListItem>
              <span className="font-bold text-lg">Terrain:</span>&nbsp;
              {planetResource?.terrain}
            </ListItem>

            {planetResource?.residents.map(url => (
              <CharacterName key={url} url={url} />
            ))}
          </ListContainer>

          <Button onClick={() => push('/')}>Go back</Button>
        </>
      )}
    </main>
  )
}

export default Planet
