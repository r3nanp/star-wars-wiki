import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'

export const Header = () => {
  return (
    <header className="flex justify-between items-center container mx-auto h-20">
      <Link href="/">
        <Image
          height={500}
          width={500}
          src="/star.svg"
          alt="Star Wars"
          className={clsx('logo', 'w-full max-w-2xl cursor-pointer')}
        />
      </Link>

      <nav className="flex">
        <Link href="/planets">Planets</Link>
      </nav>
    </header>
  )
}
