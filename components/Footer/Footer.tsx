import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import style from './Footer.module.scss'

function Footer() {
  return (
    <div className={style.footer}>
        <div className={style.socials}>
            <Link href="#"><BsFacebook /> </Link>
            <Link href="#"><BsInstagram /> </Link>
        </div>
        <Link href="#"> Terms of service</Link>
        <p><AiOutlineCopyrightCircle /> 2022 Glitch Cloud Photography</p>
        
    </div>
  )
}

export default Footer