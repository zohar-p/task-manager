import React, { ReactNode } from 'react'

type Props = {children: ReactNode}

const TopNavBtn = (props: Props) => {
  return (
    <button
    className="text-white cursor-pointer text-xl leading-none py-3 px-4 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
    type="button"
    >
      {props.children}
    </button>
  )
}

export default TopNavBtn