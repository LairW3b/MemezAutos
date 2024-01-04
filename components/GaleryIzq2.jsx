import Image from "next/image"
import style from "../src/styles/components/Galery.module.scss"
import 'aos/dist/aos.css';
import car from "../public/img/vento1.jpg"

const GaleryIzq = props => {
  return (
    <div className={style.galery_item}>
      <div className={style.galery_text}>
        <h2> Lorem itsum </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. blanditiis. Iusto quasi pariatur ab officiis repellat, dolore omnis explicabo
        </p>
      </div>
      <div
        className={style.galery_img}
        data-aos='fade-left'
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <Image
          src={car}
          width={700}
          alt='vento'
          className={style.img}
        />
      </div>
      {/*"identar= gg=G"*/}
    </div>
  )
}

export default GaleryIzq
