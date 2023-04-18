/** @format */

import React, { useState, Dispatch, SetStateAction } from "react";
import Portrait from "./components/Portrait";
import Ruracio from "./components/Ruracio";
import Weddings from "./components/Weddings";
import Cart from "../Cart/Cart";
import style from "./Services.module.scss";
import {
   Drawer,
   DrawerBody,
   useDisclosure,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   DrawerCloseButton,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Service } from "../../types";
import { AnimationOnScroll } from "react-animation-on-scroll";

export interface iSelectedPackage {
   nature: string;
   category?: String;
   type: String;
}

export interface iSelectedPackages {
   selectedPackages: iSelectedPackage[];
}

export interface iPackageProps {
   selectPackage: Function;
   btnRef: React.Ref<HTMLButtonElement>;
   onOpen: Function;
}

export const fetchServices = async () => {
   const response = await axios.get("http://localhost:8000/api/services");
   return response.data;
};

const Services: React.FC = () => {
   const {
      data: services,
      isLoading,
      isError,
      error,
   } = useQuery(["services"], fetchServices);

   if (isLoading) return <div>Loading ...</div>;
   if (isError) return <div>Error ...</div>;
   console.log('services: ', services)
   return (
      <div className={style.services} id="services">
         <div className={style.services_heading}>
            <h1 className={style.services_heading}>Services</h1>
         </div>

         <div className={style.list}>
            {services.map((service: Service, index: number) => (
               <AnimationOnScroll
                  animateIn="animate__fadeInBottomLeft"
                  key={index}
               >
                  <div className={style.service}>
                     <h2>{service.name}</h2>
                     <p>{service.description}</p>
                  </div>
               </AnimationOnScroll>
            ))}
         </div>
      </div>
   );
};

export default Services;
