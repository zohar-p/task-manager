import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faBars } from '@fortawesome/free-solid-svg-icons'
import TopNavBtn from './TopNavBtn/TopNavBtn';

type Props = {}

export default function Navbar(props: Props) {

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between bg-pink-500 mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <TopNavBtn
            >
                <FontAwesomeIcon icon={faBars} />
            </TopNavBtn>
            <TopNavBtn>
                <FontAwesomeIcon icon={faAdd} />
            </TopNavBtn>
        </div>
      </nav>
    </>
  );
}