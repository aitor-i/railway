import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`fh-10 px-4 py-2 md:h-9 md:rounded-md md:px-3 bg-blue-600 text-gray-50 hover:bg-blue-600/90  inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

export default Button
