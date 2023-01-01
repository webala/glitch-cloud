<<<<<<< HEAD
/** @format */

import React from "react";
import style from "./Contact.module.scss";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { IoConstructOutline } from "react-icons/io5";
import { useToast } from "@chakra-ui/react";

function Contact() {
  const toast = useToast();

  const handleSendMessage = () => {
    toast({
      title: "Sorry!",
      description:
        "This part of the site is still under constrction. Feel free to call or whatsapp me.",
      status: "warning",
      duration: 9000,
      isClosable: true,
      icon: <IoConstructOutline />,
      position: "bottom-right",
    });
  };
  return (
    <div className={style.contact_container} id="contact">
      <h1 className={style.heading}>Contact Me</h1>
      <div className={style.contact}>
        <div className={style.contact_details}>
          <div>
            <AiOutlinePhone className={style.icon} />
            <p>+254719603688</p>
          </div>
          <div>
            <HiOutlineMail className={style.icon} />
            <p>glitchcloud@gmail.com</p>
          </div>
          <div>
            <GoLocation className={style.icon} />
            <p>Thika</p>
          </div>
        </div>
        <form
          action="#"
          onSubmit={(e) => e.preventDefault()}
          className={style.form}
        >
          <p>Have a question? or Just want to say Hi?</p>
          <p>Drop a message</p>

          <div className={style.form_field}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={style.form_field}>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div className={style.form_field}>
            <label htmlFor="message">Message</label>
            <textarea></textarea>
          </div>
          <div className={style.submit_btn}>
            <button onClick={handleSendMessage} type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
=======
import React from "react";
import style from "./Contact.module.scss";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { useToast } from "@chakra-ui/react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Contact() {
	const toast = useToast();

	const handleSendMessage = () => {
		toast({
			title: "Opps!",
			description: "This part of the site is still under constrction",
			status: "success",
			duration: 9000,
			isClosable: true,
		});
	};
	return (
		<div className={style.contact_container} id="contact">
			<AnimationOnScroll animateIn="animate__wobble">
				<h1 className={style.heading}>Contact Me</h1>
			</AnimationOnScroll>
			<div className={style.contact}>
				<div className={style.contact_details}>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<div>
							<AiOutlinePhone className={style.icon} />
							<p>+2547907674</p>
						</div>
					</AnimationOnScroll>
					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<div>
							<HiOutlineMail className={style.icon} />
							<p>glitchcloud@gmail.com</p>
						</div>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__fadeInBottomLeft">
						<div>
							<GoLocation className={style.icon} />
							<p>Thika</p>
						</div>
					</AnimationOnScroll>
				</div>
				<form
					action="#"
					onSubmit={(e) => e.preventDefault()}
					className={style.form}
				>
					<AnimationOnScroll animateIn="animate__fadeInRight">
						<p>Have a question? or Just want to say Hi?</p>
						<p>Drop a message</p>

						<div className={style.form_field}>
							<label htmlFor="name">Name</label>
							<input type="text" />
						</div>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__fadeInRight" delay={500}>
						<div className={style.form_field}>
							<label htmlFor="email">Email</label>
							<input type="email" />
						</div>
					</AnimationOnScroll>

					<AnimationOnScroll animateIn="animate__fadeInRight">
						<div className={style.form_field}>
							<label htmlFor="message">Message</label>
							<textarea></textarea>
						</div>
						<div className={style.submit_btn}>
							<button type="submit">Send Message</button>
						</div>
					</AnimationOnScroll>
				</form>
			</div>
		</div>
	);
>>>>>>> development
}

export default Contact;
