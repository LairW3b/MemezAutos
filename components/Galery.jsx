import React from 'react'
import style from '../src/styles/components/Galery.module.scss'
import GaleryIzq from './GaleryIzq'
import GaleryRt from './GaleryRt'
import GaleryIzq1 from './GaleryIzq1'
import GaleryRt1 from './GaleryRt1'
import GaleryIzq2 from './GaleryIzq2'

const Galery = () => {
  return (
    <section className={style.galery_content}>
      <GaleryIzq />
      <GaleryRt />
      <GaleryIzq1/>
      <GaleryRt1/>
      <GaleryIzq2/>
    </section>
  )
}

export default Galery
