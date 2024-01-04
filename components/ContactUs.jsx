import React, { useState} from 'react'
import styles from '../src/styles/components/ContactUs.module.scss'
import { FaWhatsapp } from 'react-icons/fa'

const ContactUs = () => {

  const [name, setName] = useState('')
  const [mnsj, setMnsj] = useState('')

  const handleMessage = (e) => {
    e.preventDefault() 
    console.log(!name === '')
    //if(!name === '') {
    let url = 
      `https://wa.me/522222385895?text=Me interesa el auto, Mi nombre es %20${name}%20%0A${mnsj}`
    window.open(url)
    //} else {
    //console.log('Campo requerido')
    //}

    setName('')
    setMnsj('')
  }

  return ( 
    <section className={styles.contact_content}>
      <div className={styles.content_from}>
        <h2>Contáctanos</h2>
        <p><small>¡Este formulario redirige a whatsapp!</small></p>
        <form action='#' className={styles.form}>
          <input 
            type='text' 
            placeholder='Nombre' 
            className={styles.input}
            value={name}
            onChange={({target}) => setName(target.value)}
            required
          />
          <textarea 
            name='mesaje' 
            id='1' 
            cols='30' 
            rows='10'
            className={styles.textarea}
            placeholder='Estamos para servirte'
            value={mnsj}
            onChange={({target}) => setMnsj(target.value)}
            required
          />
          <button 
            className={styles.form_btn}
            onClick={handleMessage}
          >
            <div>

              <FaWhatsapp 
                className={styles.icon_whatsapp}
              />
              <span>Enviar</span>
            </div>
          </button>





        </form>
      </div>
    </section>
  )
}

export default ContactUs
