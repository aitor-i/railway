import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input =
  ({ className, type, ...props }: InputProps) => {
    return (
      <input
        type={type}
        className={"flex text-gray-950 h-10 w-full rounded-md border border-gray-200 bg-secondaryBg px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 " + className}
        {...props}
      />
    )
  }

export default Input
