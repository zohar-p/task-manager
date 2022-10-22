import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faBars, faMultiply } from '@fortawesome/free-solid-svg-icons'
import TopNavBtn from './TopNavBtn/TopNavBtn';

type Props = {
  toggleDrawer: () => void
  isDrawerOpen: boolean
}

export default function Navbar({ toggleDrawer, isDrawerOpen }: Props) {

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between  bg-cyan-500">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <TopNavBtn
              onClick={toggleDrawer}
            >
              {
                isDrawerOpen ?
                  <FontAwesomeIcon icon={faMultiply} /> :
                  <FontAwesomeIcon icon={faBars} />

              }
            </TopNavBtn>
            <TopNavBtn>
                <FontAwesomeIcon icon={faAdd} />
            </TopNavBtn>
        </div>
      </nav>
    </>
  );
}