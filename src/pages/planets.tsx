import { NextPage } from 'next'
import { motion } from 'framer-motion'

//* CUSTOM IMPORTS
import { Container } from '@/templates'
import { Button, Card, Heading, Loading } from '@/components'
import { usePlanetsInfiniteQuery } from '@/hooks'
import { listVariants } from '@/styles/variants'

const Homeworld: NextPage = () => {
  const { data, fetchMore, isLoading, canFetchMore, isFetchingMore } =
    usePlanetsInfiniteQuery()

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
        <section className="md:m-auto md:w-1/2">
          <Heading color="white" className="mb-4 border-b-2 border-primary">
            Planets
          </Heading>

          {data?.map(planets => (
            <Card
              path={`/planets/${planets.id}`}
              key={planets.id}
              name={planets.name}
            />
          ))}
        </section>

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

export default Homeworld
