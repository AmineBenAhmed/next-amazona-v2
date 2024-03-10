import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='navbar justify-between bg-base-300'>
        <Link href="/" className='btn btn-ghost text-log'>
            Crowdfunding App
        </Link>
        <Link href="/" className='btn btn-ghost text-log'>
            Cart
        </Link>
        <Link href="/" className='btn btn-ghost text-log'>
            Sign in
        </Link>

      </nav>
    </header>
  )
}

export default Header