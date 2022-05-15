import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

//* CUSTOM IMPORTS
import { Container } from '@/templates'
import { Planets } from '@/types'
import { useResourceById } from '@/hooks'
import {
  Button,
  CharacterName,
  Heading,
  ListContainer,
  ListItem,
  Loading,
  Spinner,
} from '@/components'
import { formatPopulation } from '@/utils/formatPopulation'
import { opacity } from '@/styles/variants'

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

  if (isLoading) return <Loading />

  const handleGoToHome = () => {
    push('/')
  }

  return (
    <Container>
      {isSuccess && (
        <motion.div
          initial="initial"
          variants={opacity}
          animate="exit"
          transition={{
            duration: 1,
          }}
          className="flex flex-col justify-center items-center"
        >
          <Heading color="white" className="my-4">
            {planetResource?.name} Characteristics:
          </Heading>

          <ListContainer>
            <ListItem>
              <span className="font-bold text-lg">Population:</span>&nbsp;
              {formatPopulation(planetResource?.population)}
            </ListItem>

            <ListItem>
              <span className="font-bold text-lg">Terrain:</span>&nbsp;
              {planetResource?.terrain}
            </ListItem>

            <ListItem>
              <span className="font-bold text-lg">Residents:</span>

              {planetResource?.residents ? (
                planetResource?.residents.map(url => (
                  <CharacterName key={url} url={url} />
                ))
              ) : (
                <Spinner color="white" className="text-center m-auto" />
              )}
            </ListItem>
          </ListContainer>

          <Button className="mt-4" onClick={handleGoToHome}>
            Go to home
          </Button>
        </motion.div>
      )}
    </Container>
  )
}

export default Planet
