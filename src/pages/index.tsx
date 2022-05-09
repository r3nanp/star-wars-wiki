import type { NextPage } from 'next'
import { motion } from 'framer-motion'

import { Button, Card, Container, Heading, Loading } from '@/components'
import { useCharactersInfiniteQuery } from '@/hooks'
import { listVariants } from '@/styles/variants'

export const Home: NextPage = () => {
  const { data, fetchMore, isLoading, canFetchMore, isFetchingMore } =
    useCharactersInfiniteQuery()

  return isLoading ? (
    <Loading />
  ) : (
    <Container className="w-full py-2">
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="h-screen pt-8"
      >
        <Heading color="white" className="mb-4 border-b-2 border-primary">
          Characters
        </Heading>

        {data?.map(character => (
          <Card
            key={character.id}
            name={character.name}
            path={`/characters/${character.id}`}
          />
        ))}

        <div className="flex justify-center pb-4 items-center">
          <Button
            onClick={fetchMore}
            disabled={!canFetchMore || !!isFetchingMore}
            isLoading={!!isFetchingMore}
          >
            {isFetchingMore
              ? 'Loading more...'
              : canFetchMore
              ? 'Load more, please!'
              : 'My job is done'}
          </Button>
        </div>
      </motion.div>
    </Container>
  )
}

export default Home
