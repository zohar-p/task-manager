import React, { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick?: any
}

const TopNavBtn: FC<Props> = ({ children, onClick }) => {
  return (
    <button
    onClick={onClick}
    className="text-white cursor-pointer text-xl leading-none py-3 px-4 border border-solid border-transparent rounded bg-transparent outline-none focus:outline-none"
    type="button"
    >
      {children}
    </button>
  )
}

export default TopNavBtn