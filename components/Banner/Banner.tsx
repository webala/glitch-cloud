import React from 'react'
import style from './Banner.module.scss'
import Image from 'next/image'
import banner from '../../public/assets/banner.jpg'

function Banner() {
  return (
    <div className={style.banner}>
        <Image className={style.banner_image} src={banner} alt="banner" layout='intrinsic'/>
        <div className={style.banner_text_container}>
            <h1>HELLO!</h1>
            <h1>WE ARE <span>GLITCH CLOUD PHOTOGRAPHY</span> </h1>
            <p>CREATIVE DIGITAL MEDIA</p>
        </div>
    </div>
  )
}

export default Banner