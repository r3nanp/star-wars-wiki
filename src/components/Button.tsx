import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  content: string
}

export const Button = ({ content, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-2 px-4 rounded"
    >
      <p>{content}</p>
    </button>
  )
}
