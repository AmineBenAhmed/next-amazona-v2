import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

import './styles.css'

const Header = () => {
  return (
    <header>
      <nav className='navbar justify-between bg-base-300 navbar-style'>
        <Link href="/" className='btn btn-ghost text-log'>
            Crowdfunding App
        </Link>
        <Menu />
      </nav>
    </header>
  )
}

export default Header