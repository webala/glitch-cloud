/** @format */

import React from "react";
import style from "./Banner.module.scss";
import Image, { StaticImageData } from "next/image";
import banner from "../../public/assets/banner.jpg";
import banner2 from "../../public/assets/GLI_0331-48(1).jpg";
import { Zoom } from "react-slideshow-image";

function Banner() {
   const slideshowImages: StaticImageData[] = [banner, banner2];
   return (
      <div className={style.banner}>
         <div className={style.banner_text_container}>
            <h1>GLITCH CLOUD PHOTOGRAPHY</h1>
            <p>
               <span>photoshoots, </span>cool <span>edits</span>, awesome
               <span> videography</span>
            </p>
         </div>
         <Zoom scale={1.4} arrows={false} duration={3000} easing="cubic-in">
            {slideshowImages.map((image: StaticImageData, index: number) => (
               <div key={index} className={style.image_container}>
                  <Image
                     src={image}
                     width={1600}
                     alt="slideshow image"
                     className={style.banner_image}
                  />
               </div>
            ))}
         </Zoom>
         {/* <Image
            width={1600}
            className={style.banner_image}
            src={banner}
            alt="banner"
         /> */}
      </div>
   );
}

export default Banner;
