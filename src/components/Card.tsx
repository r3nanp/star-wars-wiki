import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { randomizeNumber } from '@/utils/randomizeNumber'

type CardProps = {
  name: string
  path: string
  description: string
}

export const Card = ({ name, path, description }: CardProps) => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{
        scale: 1.1,
      }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="my-4 max-w-sm bg-gray-200 rounded-lg border border-gray-200 shadow-md"
    >
      <Link href={path}>
        <a href="#" className="divide-y-20">
          <Image
            width={300}
            height={300}
            objectFit="scale-down"
            className="rounded-t-lg"
            src={`/photo-${randomizeNumber(1, 8)}.webp`}
            alt={name}
          />
        </a>
      </Link>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {name}
        </h5>

        <p className="mb-3 font-normal text-gray-700">{description}</p>
        <Link href={path}>
          <a
            href="#"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Saiba mais!
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </Link>
      </div>
    </motion.section>
  )
}
