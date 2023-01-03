/** @format */

import React from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { iPackageProps } from "../Services";
import style from "../Services.module.scss";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Ruracio({ selectPackage, btnRef, onOpen }: iPackageProps) {
   return (
      <div className={style.ruracio}>
         <div className={style.heading}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
               <h1>Ruracio</h1>
            </AnimationOnScroll>
         </div>

         <div className={style.items}>
            <div className={style.item}>
               <AnimationOnScroll animateIn="animate__fadeInLeft">
                  <h2>Photography</h2>
               </AnimationOnScroll>

               <AnimationOnScroll
                  animateIn="animate__fadeInBottomLeft"
                  delay={500}
               >
                  <div className={style.package}>
                     <ul className="">
                        <li>1 Photographer</li>
                        <li>Full event photography</li>
                        <li>A3 Photomount (1 piece)</li>
                        <li>A4 Photobook (20 pages)</li>
                     </ul>
                     <div className={style.price}>
                        <p className="">ksh 11000</p>

                        <button
                           ref={btnRef}
                           onClick={() => {
                              onOpen();
                              selectPackage({
                                 nature: "PHOTOGRAHY",
                                 type: "RURACIO",
                              });
                           }}
                        >
                           <p>Book now</p>
                           <BsFillBookmarkPlusFill />
                        </button>
                     </div>
                  </div>
               </AnimationOnScroll>
            </div>

            <div className={style.item}>
               <AnimationOnScroll animateIn="animate__fadeInLeft">
                  <h2>Videography</h2>
               </AnimationOnScroll>
               <AnimationOnScroll
                  animateIn="animate__fadeInBottomLeft"
                  delay={500}
               >
                  <div className={style.package}>
                     <ul className="">
                        <li>1 videographer</li>
                        <li>Drone pilot</li>
                        <li>Full event video coverage</li>
                        <li>1 YouTube teaser</li>
                        <li>Flash drive with photos and edited video</li>
                        <li>Drone services</li>
                     </ul>
                     <div className={style.price}>
                        <p className="">ksh 22000</p>

                        <button
                           ref={btnRef}
                           onClick={() => {
                              onOpen();
                              selectPackage({
                                 nature: "VIDEOGRAPHY",
                                 type: "RURACIO",
                              });
                           }}
                        >
                           <p>Book now</p>
                           <BsFillBookmarkPlusFill />
                        </button>
                     </div>
                  </div>
               </AnimationOnScroll>
            </div>
         </div>
      </div>
   );
}

export default Ruracio;
