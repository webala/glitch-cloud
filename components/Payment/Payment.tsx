/** @format */

import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { iShoot } from "../Cart/Cart";
import { iSelectedPackage } from "../Services/Services";
import style from "./Payment.module.scss";
import { useToast, Progress } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { getShootCost } from "../../utils";
import { BookedService } from "../../types";
import { duration } from "moment";

interface iPayment {
   setLoading: Dispatch<SetStateAction<boolean>>;
}

function Payment({ setLoading }: iPayment) {
   const [first_name, setFirstName] = useState<string>();
   const [last_name, setLastName] = useState<string>();
   const [email, setEmail] = useState<string>();
   const [phone, setPhone] = useState<string>();
   const [iframeUrl, setIframeUrl] = useState<string>();
   const queryClient = useQueryClient();

   const toast = useToast();
   const router = useRouter();
   const { shootId } = router.query;

   console.log("shoot id:", shootId);

   const fetchShoot = async () => {
      const response = await axios.get(
         `http://localhost:8000/api/shoot/${shootId}`
      );
      return response.data;
   };

   const paymentMutation = useMutation(
      async () => {
         const data = {
            shoot: {
               ...shoot,
               client: {
                  first_name,
                  last_name,
                  email,
                  phone,
               },
            },
         };
         console.log("data: ", data);

         const response = await axios.post(
            "http://localhost:8000/api/payment",
            data,
            {
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );

         return response.data;
      },
      {
         onSuccess: (data) => {
            setLoading(false);
            setIframeUrl(data.redirect_url);
            queryClient.invalidateQueries(["transactions"]);
         },
         onError: () => {
            setLoading(false);
            toast({
               title: "Error",
               description:
                  "Unable to initialize transaction. Please try again.",
               duration: 3000,
               status: "error",
            });
         },
      }
   );
   const {
      data: shoot,
      isLoading: shootLoading,
      isError: isShootError,
      error: shootError,
   } = useQuery(["shoot", shootId], fetchShoot);

   if (shootLoading) {
      return <div>Loading ...</div>;
   }

   if (isShootError) {
      return <div>Error ...</div>;
   }

   const shootCost = getShootCost(shoot.booked_services);

   const handlePayment = (e: React.SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);
      paymentMutation.mutate();
   };
   return (
      <div className={style.payment}>
         <h1 className={style.heading}>Shoot summary</h1>

         <div>
            <p>{shoot.location}</p>
            <p>{shoot.description}</p>
            <p>Shoot total: ksh {shootCost}</p>

            <div className="services">
               {shoot.booked_services.map(
                  (service: BookedService, index: number) => (
                     <div className={style.service} key={index}>
                        <h2>
                           {service.service.name} x {service.quantity}
                        </h2>
                        <p>{service.service.description}</p>
                        <p>@ ksh {service.service.price}</p>
                     </div>
                  )
               )}
            </div>
         </div>

         <h1 className={style.heading}>Payment</h1>

         <form onSubmit={handlePayment} className={style.payment_form}>
            <div className="heading">
               <h2>Your details</h2>
            </div>

            <div className="field name">
               <label htmlFor="name">Your Name</label>
               <div>
                  <input
                     type="text"
                     placeholder="First name"
                     onChange={(e) => setFirstName(e.target.value)}
                     required
                  />
                  <input
                     type="text"
                     placeholder="Last name"
                     onChange={(e) => setLastName(e.target.value)}
                     required
                  />
               </div>
            </div>
            <div className="field">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </div>
            <div className="field">
               <label htmlFor="phone">Phone number</label>
               <input
                  type="text"
                  placeholder="Your phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
               />
            </div>
            <div className="actions">
               <button type="submit" className="submit">
                  Initialize payment
               </button>
            </div>
         </form>
         {iframeUrl ? (
            <iframe
               src={iframeUrl}
               width="100%"
               height="600px"
            ></iframe>
         ) : null}
      </div>
   );
}

export default Payment;
