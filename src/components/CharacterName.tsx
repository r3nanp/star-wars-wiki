import { useResource } from '@/hooks'

type CharacterNameProps = {
  url: string
}

export const CharacterName = ({ url }: CharacterNameProps) => {
  const { data } = useResource(url)

  return <p>{data?.name}</p>
}
