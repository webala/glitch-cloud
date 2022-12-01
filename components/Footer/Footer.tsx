/** @format */

import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.socials}>
        <Link
          target="_blank"
          className={style.icon}
          href="https://www.facebook.com/profile.php?id=100064592267540"
        >
          <BsFacebook />{" "}
        </Link>
        <Link
          target="_blank"
          className={style.icon}
          href="https://instagram.com/glitch_cloud_photography?igshid=YmMyMTA2M2Y="
        >
          <BsInstagram />{" "}
        </Link>
      </div>
      <Link href="#"> Terms of service</Link>
      <p>
        <AiOutlineCopyrightCircle /> 2022 Glitch Cloud Photography
      </p>
    </div>
  );
}

export default Footer;
