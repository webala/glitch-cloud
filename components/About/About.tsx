<<<<<<< HEAD
/** @format */

=======
>>>>>>> development
import React from "react";
import style from "./About.module.scss";
import Image from "next/image";
import mosh from "../../public/assets/mosh.jpg";
<<<<<<< HEAD

function About() {
  return (
    <div className={style.about}>
      <h1 className={style.heading}>About</h1>
      <div className={style.about_text_container}>
        <Image
          className={style.about_image}
          width={200}
          src={mosh}
          alt="mosh"
        />
        <p>Meet Brendan, the CEO and founder of Glitch Cloud Photography.</p>
        <p>
          I am a photographer based in Nairobi Kenya from a small surbubian town
          called Ruiru. I am self taught with sincere passion for all things
          photography, beautiful light, good music, sincere people and inspiring
          spaces.
        </p>
        <p>
          I believe everyone should have the oportunity to feel beautiful in a
          photograph so i&apos;ll guide you through your photography sessions
          and ease all your &quot;i&apos;m awkward&quot; fears.
        </p>
        <p>
          Wheather you are comfortable or shy in from of a camera, my sessions
          are relaxed with a no pressure atmosphere that brings out the best in
          you.
        </p>
      </div>
    </div>
  );
=======
import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
	return (
		<div className={style.about}>
			<AnimationOnScroll animateIn="animate__heartBeat" delay={700}>
				<h1 className={style.heading}>About</h1>
			</AnimationOnScroll>

			<AnimationOnScroll animateIn="animate__flipInX">
				<div className={style.about_text_container}>
					<Image
						className={style.about_image}
						width={200}
						src={mosh}
						alt="mosh"
					/>

					<p>Meet Brendan, the CEO and founder of Glitch Cloud Photography.</p>
					<p>
						I am a photographer based in Nairobi Kenya from a small surbubian
						town called Ruiru. I am self taught with sincere passion for all
						things photography, beautiful light, good music, sincere people and
						inspiring spaces.
					</p>
					<p>
						I believe everyone should have the oportunity to feel beautiful in a
						photograph so i'll guide you through your photography sessions and
						ease all your "i'm awkward" fears.
					</p>
					<p>
						Wheather you are comfortable or shy in from of a camera, my sessions
						are relaxed with a no pressure atmosphere that brings out the best
						in you.
					</p>
				</div>
			</AnimationOnScroll>
		</div>
	);
>>>>>>> development
}

export default About;
