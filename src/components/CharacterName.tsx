import { useResource } from '@/hooks'
import { Spinner } from './Spinner'

type CharacterNameProps = {
  url: string
}

export const CharacterName = ({ url }: CharacterNameProps) => {
  const { isSuccess, isLoading, data } = useResource(url)

  return isLoading ? (
    <Spinner color="white" size="sm" className="m-auto" />
  ) : (
    <p>{isSuccess && data?.name}</p>
  )
}
