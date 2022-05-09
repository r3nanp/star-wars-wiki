import Link from 'next/link'

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
    <div className="flex flex-col">
      <Link href={`/characters/${data?.id}`}>
        <a className="text-lg underline my-1">{isSuccess && data?.name}</a>
      </Link>
    </div>
  )
}
