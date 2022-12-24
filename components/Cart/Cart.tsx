/** @format */

import React from "react";
import style from "./Cart.module.scss";
import { iSelectedPackages, iSelectedPackage } from "../Services/Services";

const Cart: React.FC<iSelectedPackages> = ({
     selectedPackages,
}: iSelectedPackages) => {
     console.log("packages: ", selectedPackages);

     if (selectedPackages.length === 0) {
          return <></>;
     }
     return (
          <div className={style.cart}>
               {selectedPackages.map(
                    (item: iSelectedPackage, index: number): any => (
                         <p key={index}>{item.nature}</p>
                    )
               )}
          </div>
     );
};

export default Cart;
