import Image from "next/image"
import style from '../src/styles/components/Galery.module.scss'
import 'aos/dist/aos.css'; 
import car from '../public/img/vento12.jpg'

const GaleryRt = () => {
  return (
    <div className={`${style.galery_item} `}>
      <div className={style.galery_text}>
        <h2>Lorem ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. optio aspernatur error? Illum distinctio vel cupiditate voluptates cumque voluptas nam dolor qui des
        </p>
      </div>
      <div 
        className={`${style.galery_img} ${style.galery_img_rigth}`}
        data-aos='fade-right'
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"

      >
        <Image
          src={car}
          width={700}
          alt='vento marca vw'
          className={style.img}
        />
      </div>
    </div> 
  )
}

export default GaleryRt
