/** @format */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { iShoot } from "../Cart/Cart";
import { iSelectedPackage } from "../Services/Services";
import style from "./Payment.module.scss";

function Payment() {
   const bookedShoot = useSelector((state) => state.shoot.bookedShoot);

   const [shoot, setShoot] = useState<iShoot>();
   const [phoneNumber, setPhoneNumber] = useState<string>()
   console.log("shoot: ", shoot);

   const handlePayment = (e:React.SyntheticEvent) => {
      e.preventDefault()
      console.log("handlePaymen called");
      
   }

   useEffect(() => {
      const fetchBookedShoot = async () => {
         const response = await fetch(
            `http://localhost:8000/shoot/${bookedShoot.id}`
         );
         const jsonRes = await response.json();
         console.log("booked shoot: ", jsonRes);
         setShoot(jsonRes);
         setPhoneNumber(jsonRes.client.phone)
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
               <p>A deposit of ksh 1000 is required to process your order. Please confirm your M-Pesa number below.</p>
               <form onSubmit={handlePayment}>
                  <div className={style.field}>
                     <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
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
