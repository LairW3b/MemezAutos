import React from 'react'
import Image from 'next/image'
import arrow from '../public/img/arrow.png'
import style from '../src/styles/components/Header.module.scss'
import logo from '../public/img/vw.png'

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header_content}>
        <div className={style.img}>
          <Image
            src={logo}
            alt='El mejor logo'
            width={180}
          />
        </div>
        <div className={style.title}>
          <h1 >¡Vento 2018!</h1>
          <p>
            A un super precio!!!.
          </p>
        </div>
        
        <div className={style.arrow}>
          <Image
            src={arrow}
            width={80}
            height={40}
            alt='indicador desplazar hacia abajo'
          />
        </div>
      </div>
    </header>
  )
}

export default Header 
