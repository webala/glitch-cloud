import React from 'react'
import style from './Contact.module.scss'
import {AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'

import {GoLocation} from 'react-icons/go'

function Contact() {
  return (
    <div className={style.contact_container}>
        <h1 className={style.heading} >Contact Me</h1>
        <div className={style.contact}>
        <div className={style.contact_details}>
            <div>
              <AiOutlinePhone className={style.icon}/>
              <p>+2547907674</p>
            </div>
            <div>
              <HiOutlineMail className={style.icon}/>
              <p>glitchcloud@gmail.com</p>
            </div>
            <div>
              <GoLocation className={style.icon}/>
              <p>Thika</p>
            </div>
        </div>
        <form action="#" onSubmit={(e) => e.preventDefault()} className={style.form}>
            <p>Have a question? or Just want to say Hi?</p>
            <p>Drop a message</p>

            <div className={style.form_field}>
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className={style.form_field}>
              <label htmlFor="email">Email</label>
              <input type="email" />
            </div>
            <div className={style.form_field}>
              <label htmlFor="message">Message</label>
              <textarea></textarea>
            </div>
            <div className={style.submit_btn}>
              <button type='submit'>Send Message</button>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default Contact