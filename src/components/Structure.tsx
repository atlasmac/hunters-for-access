import React from 'react'

interface Props {
  children: JSX.Element;
  bgImg: string;
  wideRow?: boolean;
}

function Structure({ children, bgImg, wideRow }: Props) {
  const wideRowClass = wideRow ? 'lg:flex-row' : '';
  return (
    <div>
      <div className={`flex min-h-screen flex-col items-center justify-center bg-base-200 ${bgImg} bg-cover bg-fixed bg-no-repeat text-neutral-content/75 bg-blend-difference`}>
        <div className={`my-5 flex min-h-[20rem] w-80 flex-col items-center justify-center gap-y-5 rounded-lg bg-base-100 p-10 text-center shadow-lg sm:w-2/3 ${wideRowClass}`}>
          {children}
        </div>
      </div>
    </div >
  )
}

export default Structure
