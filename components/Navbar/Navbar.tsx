/** @format */

import React from "react";
import style from "./Navbar.module.scss";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiFillCamera, AiFillPhone } from "react-icons/ai";
import { IoMdPhotos } from "react-icons/io";
import { SlSpeech } from "react-icons/sl";
import Link from "next/link";

function Navbar() {
   return (
      <div className={style.nav_bar}>
         <div className={style.nav_item}>
            <Link href="#services" className={style.menu_btn_text}>
               Services
            </Link>
            <AiFillCamera className={style.icon} />
         </div>

         <div className={style.nav_item}>
            <Link href="#our_work" className={style.menu_btn_text}>
               Our Work
            </Link>
            <IoMdPhotos className={style.icon} />
         </div>

         <div className={style.title}>
            {/* <Image src={logo} alt='Logo' width={70} height={70} /> */}
            <h1 className={style.text}>
               Glit
               <span>ch</span>{" "}
            </h1>
            <div className={style.social}>
               <Link
                  className={style.link}
                  href="https://www.facebook.com/profile.php?id=100064592267540"
               >
                  <BsFacebook className={style.icon} />{" "}
               </Link>
               <Link
                  className={style.link}
                  href="https://instagram.com/glitch_cloud_photography?igshid=YmMyMTA2M2Y="
               >
                  <BsInstagram className={style.icon} />{" "}
               </Link>
            </div>
         </div>

         <div className={style.nav_item}>
            <Link href="#client_stories" className={style.menu_btn_text}>
               Client Stories
            </Link>
            <SlSpeech className={style.icon} />
         </div>

         <div className={style.nav_item}>
            <Link href="#contact" className={style.menu_btn_text}>
               Contact
            </Link>
            <AiFillPhone className={style.icon} />
         </div>
      </div>
   );
}

export default Navbar;
