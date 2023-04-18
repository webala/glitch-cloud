/** @format */

import React from "react";
import style from "./OurWork.module.scss";
import Image from "next/image";
import image1 from "../../public/assets/gallery/GLI_0482.jpg";
import image2 from "../../public/assets/gallery/GLI_0663.jpg";
import image3 from "../../public/assets/gallery/GLITCH CLOUD PHOTOGRAPHY-399.jpg";
import image4 from "../../public/assets/gallery/JUD_0050.jpg";
import image5 from "../../public/assets/gallery/TERRY 2.jpg";
import image6 from "../../public/assets/gallery/RAS_0088.jpg";
import image7 from "../../public/assets/gallery/NYE_0265_1.jpg";
import image8 from "../../public/assets/gallery/JUDY 9.jpg";
import image9 from "../../public/assets/gallery/DSC_0744.jpg";
import image10 from "../../public/assets/gallery/CVV_1354.jpg";
import image11 from "../../public/assets/gallery/CVV_1066.jpg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { GalleryImage } from "../../types";

function OurWork() {
   const fetchImages = async () => {
      const response = await axios.get("http://localhost:8000/api/gallery");
      return response.data;
   };

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

	console.log('images: ', images)
   return (
      <div className={style.our_work_container} id="our_work">
         <AnimationOnScroll animateIn="animate__heartBeat">
            <h1 className={style.heading}>Our work</h1>
         </AnimationOnScroll>
         <div className={style.gallery}>

				{images.map((image:GalleryImage, index:number) => {
					return (
                  <div className={` ${style.item}`} key={index}>
                     <AnimationOnScroll animateIn="animate__fadeInBottomLeft">
                        <Image
                           className={style.image}
                           src={image.download_url}
                           width={800}
                           height={800}
                           alt="image"
                        />
                     </AnimationOnScroll>
                  </div>
               );
				})}
            
            
         </div>
      </div>
   );
}

export default OurWork;
