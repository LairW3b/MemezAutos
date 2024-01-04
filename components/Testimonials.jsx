import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import style from '../src/styles/components/Testimonials.module.scss'
import vento1 from '../public/img/vento4.jpg'
import vento2 from '../public/img/vento5.jpg'
import vento3 from '../public/img/vento6.jpg'
import vento4 from '../public/img/vento10.jpg'
import vento6 from '../public/img/vento9.jpg'

const Testimonials = () => {

  SwiperCore.use([Autoplay])

  return (
    <section className={style.testimonials_content}>
      <h2> Lorem Ipsum </h2>
      <Swiper
        autoplay={{
          delay: 5000
        }}
        loop='true'
      >
        <SwiperSlide>
          <div className={style.testimony}>
            <div>
              <Image
                src={vento1}
                width={350}
                alt='car '
                className={style.testimony_img}
              />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={style.testimony}>
            <div>
              <Image
                src={vento2}
                width={350}
                alt='foto interiores vento 2018'
                className={style.testimony_img}
              />
            </div>
            <p>
              Eos dolorem nostrum ullam perspiciatis commodi amet enim necessitatibus porro. Veniam, saepe. Consequuntur eaque nam sapiente porro alias veniam repellendus quae quisquam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.testimony}`}>
            <div>
              <Image
                src={vento3}
                width={350}
                alt='car'
                className={style.testimony_img}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis maxime deleniti possimus beatae dolorem facilis vitae
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.testimony}`}>
            <div>
              <Image
                src={vento4}
                width={350}
                alt='car'
                className={style.testimony_img}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis maxime deleniti possimus beatae dolorem facilis vitae
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${style.testimony}`}>
            <div>
              <Image
                src={vento6}
                width={350}
                alt='car'
                className={style.testimony_img}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis maxime deleniti possimus beatae dolorem facilis vitae
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      {/*crear el componente testimony y pasar por porps contenido*/}
    </section>
  )
}

export default Testimonials
