/** @format */

import React from "react";
import style from "./OurWork.module.scss";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useQuery } from "@tanstack/react-query";
import { GalleryImage } from "../../types";
import { fetchImages } from "../../pages/gallery";
import Link from "next/link";

function OurWork() {
   const {
      data: images,
      isLoading,
      isError,
      error,
   } = useQuery(["gallery"], fetchImages);

   if (isLoading) {
      return <div className={style.our_work_container}>Loading ...</div>;
   }

   if (isError) {
      return <div className={style.our_work_container}>Error ...</div>;
   }

   console.log("images: ", images);
   return (
      <div className={style.our_work_container} id="our_work">
         {/* <h1 className={style.heading}>Our work</h1> */}
         <div className={style.gallery}>
            {images.map((image: GalleryImage, index: number) => {
               return (
                  <div className={` ${style.item}`} key={index}>
                     {/* <AnimationOnScroll animateIn="animate__fadeInBottomLeft"> */}
                        <Image
                           className={style.image}
                           src={image.download_url}
                           width={800}
                           height={800}
                           alt="image"
                        />
                     {/* </AnimationOnScroll> */}
                  </div>
               );
            })}
         </div>
         <div className={style.actions}>
            <Link href="/gallery">
               <button className={style.action}>View more photos</button>
            </Link>
         </div>
      </div>
   );
}

export default OurWork;
