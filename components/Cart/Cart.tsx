/** @format */

import React, { useState } from "react";
import style from "./Cart.module.scss";
import { iSelectedPackages, iSelectedPackage } from "../Services/Services";
import { AiOutlineDelete } from "react-icons/ai";
import Link from "next/link";
import {useDispatch} from 'react-redux'
import {shootActions} from '../../store/shoot-slice'

interface iCartProps {
   selectedPackages: iSelectedPackages;
   onClose: Function;
   setSelectedPackages: Function;
}

export interface iShoot {
   client: object;
   shoot: object;
   packages: iSelectedPackages;
   id?: number;
}

const Cart = ({
   selectedPackages,
   onClose,
   setSelectedPackages,
}: iCartProps) => {
   console.log("packages: ", selectedPackages);

   const [first_name, setFirstName] = useState<string>();
   const [last_name, setLastName] = useState<string>();
   const [email, setEmail] = useState<string>();
   const [phone_number, setPhoneNumber] = useState<string>();
   const [location, setLocation] = useState<string>();
   const [date, setDate] = useState<Date>();

   const dispatch = useDispatch()

   const handleBookShoot = async (e: React.SyntheticEvent) => {
      e.preventDefault();

      const data:iShoot = {
         client: {
            first_name,
            last_name,
            email,
            phone: phone_number,
         },
         shoot: {
            date,
            location,
         },
         packages: selectedPackages,
      };

      const response = await fetch("/api/shoot", {
         method: "POST",
         body: JSON.stringify(data),
      });

      if (response.status == 201) {
         const savedShoot = await response.json();
         // localStorage.setItem('shoots', [savedShoot.id])
         const storedShoots = localStorage.getItem("shoots");
         if (storedShoots) {
            let shoots: number[] = JSON.parse(storedShoots);
            shoots.push(savedShoot.id);
            localStorage.setItem("shoots", JSON.stringify(shoots));
         } else {
            localStorage.setItem("shoots", JSON.stringify([savedShoot.id]));
         }
         data.id = savedShoot.id
         dispatch(shootActions.setBookedShoot(data))

         setSelectedPackages([]);
         console.log("saved shoot: ", savedShoot);
      }
   };

   if (selectedPackages.length === 0) {
      return (
         <div className={style.cart}>
            <h1 className={style.no_packages}>Please select a package</h1>
         </div>
      );
   }

   return (
      <div className={style.cart}>
         <div className={style.packages}>
            <h1>Selected Packages</h1>
            {selectedPackages.map(
               (item: iSelectedPackage, index: number): any => (
                  <div key={index} className={style.package}>
                     <p>
                        {item.type}-{item.nature} ({item.category})
                     </p>

                     <button
                        className={style.delete_btn}
                        onClick={() => {
                           setSelectedPackages((items: iSelectedPackages) => {
                              let newState = [...items];
                              newState.splice(index, 1);
                              return newState;
                           });
                        }}
                     >
                        <AiOutlineDelete />
                     </button>
                  </div>
               )
            )}
         </div>

         <Link
            onClick={() => onClose()}
            className={style.add_package}
            href="#services"
         >
            Add a package
         </Link>

         <div className={style.shoot_details}>
            <h2>Please provide the following information</h2>
            <form onSubmit={handleBookShoot}>
               <div className={style.field}>
                  <label htmlFor="first_name">First Name</label>
                  <input
                     type="text"
                     name="first_name"
                     id="first_name"
                     placeholder="Enter your first name"
                     onChange={(e) => setFirstName(e.target.value)}
                     required
                  />
               </div>
               <div className={style.field}>
                  <label htmlFor="last_name">Last Name</label>
                  <input
                     type="text"
                     name="last_name"
                     id="last_name"
                     placeholder="Enter your last name"
                     onChange={(e) => setLastName(e.target.value)}
                     required
                  />
               </div>
               <div className={style.field}>
                  <label htmlFor="first_name">Email</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Enter your email"
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />
               </div>
               <div className={style.field}>
                  <label htmlFor="first_name">Phone number</label>
                  <input
                     type="text"
                     name="phone_number"
                     id="phone_number"
                     placeholder="Enter your phone number"
                     onChange={(e) => setPhoneNumber(e.target.value)}
                     required
                  />
               </div>

               <div className={style.field}>
                  <label htmlFor="first_name">Shoot Location</label>
                  <input
                     type="text"
                     name="location"
                     id="location"
                     placeholder="Enter your Shoot location"
                     onChange={(e) => setLocation(e.target.value)}
                     required
                  />
               </div>
               <div className={style.field}>
                  <label htmlFor="first_name">Shoot Date</label>
                  <input
                     type="date"
                     name="date"
                     id="date"
                     placeholder="Enter your shoot date"
                     onChange={(e) => setDate(e.target.value)}
                     required
                  />
               </div>

               <div className={style.submit}>
                  <button type="submit">Book Shoot</button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Cart;
