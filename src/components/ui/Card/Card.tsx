import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={'border hover:bg-gray-100 cursor-pointer bg-secondaryBg h-44 flex flex-col justify-around p-4 rounded' + className} {...props}>
      {children}
    </div>
  )
}
