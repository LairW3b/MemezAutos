import React from 'react'
import style from '../src/styles/components/About.module.scss'
import Image from 'next/image'
import etiqueta from '../public/img/etiqueta.png'
import auto from '../public/img/vento2.jpg'
import car from '../public/img/car.svg'
import year from '../public/img/year.svg'
import bill from '../public/img/bill.svg'
import kilometros from '../public/img/gauge.svg'
import user from '../public/img/user.svg'
import version from '../public/img/version.svg'
import verificado from '../public/img/verificado.svg'

const About = () => {
  return (
    <section className={style.about_content}>
      <div className={style.about_img}>
        <Image
          src={etiqueta}
          width={100}
          alt='cubiertos'
        />
      </div>

      <Image
        src={auto}
        alt='Automovil en venta'
        className={style.img_bg}
      />

      <section className={style.about_content}>
        <h2>Lo que necesitas saber de tu (Nombre del vehiculo) </h2>

        {/* <div className={style.details}>

          <div className={style.details_content} >
            <div className={style.details_icon}>
              Tipo de Auto: (icono)
            </div>
            <div className={style.details_text}>
              Sedan
            </div>
          </div>

          <div className={style.details_content}>
            <div className={style.details_icon}>
              Año: (icono)
            </div>
            <div className={style.details_text}>
              2022
            </div>
          </div>

          <div className={style.details_content}>
            <div className={style.details_icon}>
              Versión: (icono)
            </div>
            <div className={style.details_text}>
              LTZ
            </div>
          </div>

          <div className={style.details_content}>
            <div className={style.details_icon}>
              Kilometraje: (icono)
            </div>
            <div className={style.details_text}>
              60,000 km
            </div>
          </div>

          <div className={style.details_content}>
            <div className={style.details_icon}>
              Numero de dueños: (icono)
            </div>
            <div className={style.details_text}>
              1
            </div>
          </div>

          <div className={style.details_content}>
            <div className={style.details_icon}>
              Tipo de Factura: (icono)
            </div>
            <div className={style.details_text}>
              Agencia
            </div>
          </div>

           Nihilismo */}

        {/* <div className={style.details_content}>
            <div className={style.details_icon}>
              Estado fiscal: (icono) (estado tributario?)
            </div>
            <div className={style.details_text}>
              Pagado
            </div>
          </div>

          <div className={style.details_content}>
            <div className={style.details_icon}>
              Verificado: (icono) (estado tributario?)
            </div>
            <div className={style.details_text}>
              Sí
            </div>
          </div>

        </div> */}

        <table className={style.details}>
          <tr>
            <td>
              <Image
                src={car}
                className={style.details_icon}
              />
            </td>
            {/* <td>Tipo de Auto: </td> */}
            <td>Sedan</td>
          </tr>
          <tr>
            {/* <td>Año: </td> */}
            <td>
              <Image
                src={year}
                className={style.details_icon}
              />
            </td>
            <td> 2022 </td>
          </tr>
          <tr>
            <td>
              <Image
                src={version}
                className={style.details_icon}
              />
            </td>
            <td> LTZ </td>
          </tr>
          <tr>
            <td>
              <Image
                src={kilometros}
                className={style.details_icon}
              />
            </td>
            <td> 60,000 km </td>
          </tr>
          <tr>
            <td>
              <Image
                src={user}
                className={style.details_icon}
              />
            </td>
            <td> 1 </td>
          </tr>
          <tr>
            <td>
              <Image
                src={bill}
                className={style.details_icon}
              />
            </td>
            <td>  Agencia </td>
          </tr>
          <tr>
            <td> 
              <Image
                src={verificado}
                className={style.details_icon}
              />
            </td>
            <td> Todo Pagado </td>
          </tr>
          {/* <tr>
            <td> Verirficado: </td>
            <td>  Si </td>
          </tr> */}
        </table>

      </section>
    </section>
  )
}

export default About
