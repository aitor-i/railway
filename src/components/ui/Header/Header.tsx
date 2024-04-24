import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Icon from "@/../public/icon.ico"

export default function Header() {
  return (
    <div className="w-full bg-transparent absolute h-20 px-12 py-4 ">
      <Link href={"/"}>
        <Image className="h-8 w-8" src={Icon} alt="Railway icon" />
      </Link>
    </div>
  )
}
