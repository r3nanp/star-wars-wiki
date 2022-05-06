import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="flex justify-center align-center h-20">
      <Link href="/">
        <Image
          height={500}
          width={500}
          src="/star.svg"
          alt="Star Wars"
          className={clsx('logo', 'w-full max-w-2xl cursor-pointer')}
        />
      </Link>
    </header>
  )
}
