import React from 'react'
import Link from 'next/link'

interface HomePageBtnProps {
  Description: string;
  href: string;
  btnText: string;
}

function HomePageBtn({ Description, href, btnText }: HomePageBtnProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-200 h-100">
        <div className="max-w-md">
          <h1 className="mb-5 font-robotoSlab text-5xl text-slate-200 font-bold">
            {Description}
          </h1>
          <Link href={`${href}`} className="btn-primary btn h-fit">
            <span>{btnText}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomePageBtn
