import Link from 'next/link'
import { motion } from 'framer-motion'

import { itemVariants } from '@/styles/variants'
import { CardProps } from './cardProps.types'

export const Card = ({ name, path }: CardProps) => {
  return (
    <Link href={path}>
      <motion.li
        variants={itemVariants}
        className="bg-primary text-black py-4 my-2 rounded overflow-hidden cursor-pointer"
      >
        <a className="text-xl">{name}</a>
      </motion.li>
    </Link>
  )
}
