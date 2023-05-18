import React from 'react'
import { Noto_Color_Emoji } from 'next/font/google'
const noto = Noto_Color_Emoji({subsets: ['emoji'], weight:['400']})

const Header = () => {
  return (
    <header>
        <nav className='header-nav'>
            <span className='header-one'> <span className={noto.className}>&#x2328;  </span> React Type Writer Effect</span>
        </nav>
    </header>
  )
}

export default Header