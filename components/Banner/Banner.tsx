import React from 'react'
import style from './Banner.module.scss'
import Image from 'next/image'
import banner from '../../public/assets/banner.jpg'

function Banner() {
  return (
    <div className={style.banner}>
        <Image width={1600} className={style.banner_image} src={banner} alt="banner" />
        <div className={style.banner_text_container}>
            <h1>GLITCH CLOUD PHOTOGRAPHY</h1>
            <p>CREATIVE DIGITAL MEDIA</p>
        </div>

        <div className={style.banner_sub_text_container}>
          <p>photo shoots, cool edits, awesome videography</p>
        </div>
    </div>
  )
}

export default Banner