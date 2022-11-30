import React from 'react'
import style from './Navbar.module.scss'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {BsInstagram, BsFacebook} from 'react-icons/bs'
import {AiFillCamera, AiFillPhone} from 'react-icons/ai'
import {IoMdPhotos} from 'react-icons/io'
import {SlSpeech} from 'react-icons/sl'
import logo from '../../public/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={style.nav_bar}>
        <div className={style.nav_item}>
            <Link href="#services" className={style.menu_btn_text}>Services</Link>
            <AiFillCamera className={style.icon}/>
        </div>

        <div className={style.nav_item}>
            <Link href="#our_work" className={style.menu_btn_text}>Our Work</Link>
            <IoMdPhotos className={style.icon}/>
        </div>

        <div className={style.title}>
            {/* <Image src={logo} alt='Logo' width={70} height={70} /> */}
            <h1 className={style.text}>Glitch Cloud</h1>
            <p className={style.text}>PHOTOGRAPHY</p>
            <div className={style.social}>
                <Link className={style.icon} href="#"><BsFacebook /> </Link>
                <Link className={style.icon} href="#"><BsInstagram /> </Link>
            </div>
        </div>

        <div className={style.nav_item}>
            <Link href="#client_stories" className={style.menu_btn_text}>Client Stories</Link>
            <SlSpeech className={style.icon}/>
        </div>

        <div className={style.nav_item}>
            <Link href="#contact" className={style.menu_btn_text}>Contact</Link>
            <AiFillPhone className={style.icon}/>
        </div>

        
    </div>
  )
}

export default Navbar