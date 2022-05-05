import Link from 'next/link'
import { motion } from 'framer-motion'

type CardProps = {
  name: string
  path: string
}

export const Card = ({ name, path }: CardProps) => {
  return (
    <motion.li
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-gray-400 py-4 my-2 rounded border-2 border-black overflow-hidden cursor-pointer"
    >
      <Link href={path}>
        <a className="text-xl">{name}</a>
      </Link>
    </motion.li>
  )
}
