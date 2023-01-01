/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { iShoot } from "../Cart/Cart";
import { iSelectedPackage } from "../Services/Services";
import style from "./Payment.module.scss";
import { useToast, Progress } from "@chakra-ui/react";


interface iPayment {
   setLoading: Function
}

function Payment({setLoading}: iPayment) {
   const bookedShoot = useSelector((state) => state.shoot.bookedShoot);

   const [shoot, setShoot] = useState<iShoot>();
   const [phoneNumber, setPhoneNumber] = useState<string>()
   const [requestId, setRequestId] = useState<string>();
   const [error, setError] = useState<string>()
   
   console.log("shoot: ", shoot);


   //Chakra UI toast
   const toast = useToast()

   const fetchTransaction = async () => {
      const response = await fetch(
         `http://localhost:8000/transaction/${requestId}`
      );
      const jsonRes = await response.json()
      console.log('transaction: ', jsonRes);
      
   }

   const handlePayment = async (e:React.SyntheticEvent) => {
      setLoading(true);
      e.preventDefault()
      console.log("handlePaymen called");
      console.log("Phone number: ", phoneNumber);
      
      const response = await fetch(
         `http://localhost:8000/shoot/pay/${bookedShoot.id}`, {
            method:'POST',
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({
               phoneNumber
            })
         }
      );

      const jsonRes = await response.json();
      setLoading(false);
      if (response.status === 200 ) {
         
         let {requestId} = jsonRes
         setRequestId(requestId)
         console.log("requestId", requestId);
         toast({
            title: "Push notification sent.",
            description: "Please check your phone.",
            status: "success",
            duration: 9000,
            isClosable: true,
            position: "top",
         });
         // fetchTransaction()
      } else if (response.status === 400) {
         setError(jsonRes.message)
         toast({
            title: "Error",
            description: error,
            status: "error",
            duration: 9000,
            isClosable: true,
            position: "top",
         });
      } 
   }

   useEffect(() => {
      const fetchBookedShoot = async () => {
         setLoading(true)
         const response = await fetch(
            `http://localhost:8000/shoot/${bookedShoot.id}`
         );
         const jsonRes = await response.json();
         console.log("booked shoot: ", jsonRes);
         setShoot(jsonRes);
         setPhoneNumber(jsonRes.client.phone)
         setLoading(false);
      };

      fetchBookedShoot();
   }, [bookedShoot]);
   return (
      <div className={style.payment}>
         <h1 className={style.heading}>Payment</h1>
         
         <div className={style.shoot_summary}>
            <p>
               Book shoot for {shoot?.shoot.date} in {shoot?.shoot.location}
            </p>

            <div className={style.packages}>
               <h2>Packages</h2>
               {shoot?.packages.map(
                  (item: iSelectedPackage, index: number): any => (
                     <div key={index} className={style.package}>
                        <p>
                           {item.type}-{item.nature} ({item.category})
                        </p>
                     </div>
                  )
               )}
            </div>

            <div className={style.phone_form}>
               <p>
                  A deposit of ksh 1000 is required to process your order.
                  Please confirm your M-Pesa number below.
               </p>
               <form onSubmit={handlePayment}>
                  <div className={style.field}>
                     <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                     />
                  </div>
                  <div>
                     <button type="submit">Proceed</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
}

export default Payment;
