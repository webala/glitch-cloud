<<<<<<< HEAD
/** @format */

import React from "react";
import style from "./Testimonials.module.scss";
import { ImQuotesRight } from "react-icons/im";

function Testimonisls() {
  return (
    <div className={style.testimonials} id="client_stories">
      <h1 className={style.heading}>Our clients speak</h1>
      <ImQuotesRight className={style.quote} />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={style.testimony}>
              <div className={style.header}>
                <p className={style.name}>@webala</p>
                <p>June 2022</p>
              </div>
              <p>He has heart, he has passion</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className={style.testimony}>
              <div className={style.header}>
                <p className={style.name}>@webala</p>
                <p>June 2022</p>
              </div>
              <p>He has heart, he has passion</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className={style.testimony}>
              <div className={style.header}>
                <p className={style.name}>@webala</p>
                <p>June 2022</p>
              </div>
              <p>He has heart, he has passion</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
=======
import React from "react";
import style from "./Testimonials.module.scss";
import { ImQuotesRight } from "react-icons/im";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Testimonisls() {
	return (
		<div className={style.testimonials} id="client_stories">
			<AnimationOnScroll animateIn="animate__fadeInLeft">
				<h1 className={style.heading}>Our clients speak</h1>
			</AnimationOnScroll>
			<AnimationOnScroll animateIn="animate__rotateIn">
				<ImQuotesRight className={style.quote} />
			</AnimationOnScroll>

			<AnimationOnScroll animateIn="animate__fadeInRight">
				<div
					id="carouselExampleFade"
					className="carousel slide carousel-fade"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className={style.testimony}>
								<div className={style.header}>
									<p className={style.name}>@webala</p>
									<p>June 2022</p>
								</div>
								<p>He has heart, he has passion</p>
							</div>
						</div>
						<div className="carousel-item">
							<div className={style.testimony}>
								<div className={style.header}>
									<p className={style.name}>@webala</p>
									<p>June 2022</p>
								</div>
								<p>He has heart, he has passion</p>
							</div>
						</div>
						<div className="carousel-item">
							<div className={style.testimony}>
								<div className={style.header}>
									<p className={style.name}>@webala</p>
									<p>June 2022</p>
								</div>
								<p>He has heart, he has passion</p>
							</div>
						</div>
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleFade"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</AnimationOnScroll>
		</div>
	);
>>>>>>> development
}

export default Testimonisls;
