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

function OurWork() {
	return (
		<div className={style.our_work_container} id="our_work">
			<AnimationOnScroll animateIn="animate__heartBeat">
				<h1 className={style.heading}>Our work</h1>
			</AnimationOnScroll>
			<div className={style.gallery}>
				<div className={`${style.item1} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image1}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item2} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image3}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item3} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image4}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item4} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image2}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item5} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image5}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item6} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image6}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>

				<div className={`${style.item7} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image7}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item8} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image8}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item11} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image11}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item9} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image9}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
				<div className={`${style.item10} ${style.item}`}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<Image
							className={style.image}
							src={image10}
							width={800}
							height={800}
							alt="image"
						/>
					</AnimationOnScroll>
				</div>
			</div>
		</div>
	);
}

export default OurWork;
