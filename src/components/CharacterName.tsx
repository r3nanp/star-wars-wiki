import { useResource } from '@/hooks'
import { ListContainer } from './ListContainer'

type CharacterNameProps = {
  url: string
}

export const CharacterName = ({ url }: CharacterNameProps) => {
  const { data } = useResource(url)

  return <ListContainer>{data?.name}</ListContainer>
}
