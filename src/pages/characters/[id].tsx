import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'

//* CUSTOM IMPORTS
import { Container } from '@/templates'
import { Character } from '@/types'
import { useResourceById, useResource } from '@/hooks'
import { Button, Heading, ListContainer, ListItem, Loading } from '@/components'
import { opacity } from '@/styles/variants'

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

  if (isLoading || isPlanetLoading) return <Loading />

  return (
    <Container>
      <motion.div
        animate="exit"
        initial="initial"
        variants={opacity}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-center"
      >
        <Heading color="white" className="my-4">
          This is {character?.name}
        </Heading>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading>Hair color:</Heading>
            {character?.hair_color}
          </ListItem>
        </ListContainer>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading>Gender:</Heading>
            {character?.gender}
          </ListItem>
        </ListContainer>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading>Birth year:</Heading>
            {character?.birth_year}
          </ListItem>
        </ListContainer>

        <ListContainer className="mb-2">
          <ListItem>
            <Heading>Homeworld:</Heading>
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
      </motion.div>
    </Container>
  )
}

export default Character
