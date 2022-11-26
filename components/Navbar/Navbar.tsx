import React from 'react'
import style from './Navbar.module.scss'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {BsInstagram, BsFacebook} from 'react-icons/bs'
import Link from 'next/link'

function Navbar() {
  return (
    <div className={style.nav_bar}>
        <div className={style.menu_btn}>
            <HiOutlineMenuAlt1 className={style.icon}/>
            <p className={style.menu_btn_text}>MENU</p>
        </div>

        <div className={style.title}>
            <h1>Glitch Cloud</h1>
            <p>PHOTOGRAPHY</p>
        </div>

        <div className={style.social}>
            <Link href="#"><BsFacebook /> </Link>
            <Link href="#"><BsInstagram /> </Link>
        </div>
    </div>
  )
}

export default Navbar