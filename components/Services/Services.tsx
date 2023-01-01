/** @format */

<<<<<<< HEAD
import React from "react";
import Portrait from "./components/Portrait";
import Ruracio from "./components/Ruracio";
import Weddings from "./components/Weddings";
import style from "./Services.module.scss";

function Services() {
  return (
    <div className={style.services} id="services">
      <h1 className={style.services_heading}>Services</h1>
      <Weddings />

      <div className={style.micro_service}>
        <Ruracio />
        <Portrait />
      </div>
    </div>
  );
}

=======
import React, { useState } from "react";
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

export interface iSelectedPackage {
   nature: string;
   category?: String;
   type: String;
}

export interface iSelectedPackages {
   selectedPackages: iSelectedPackage[];
}

const Services: React.FC = () => {
   const [selectedPackages, setSelectedPackages] = useState<iSelectedPackage[]>(
      []
   );
   const { isOpen, onOpen, onClose } = useDisclosure();
   const btnRef = React.useRef();

   const selectPackage = (pkg: iSelectedPackage) => {
      const existingPkg = selectedPackages.find((item) => {
         if (
            (item.category &&
               item.category == pkg.category &&
               item.nature == pkg.nature &&
               item.type == pkg.type) ||
            (!item.category &&
               item.nature == pkg.nature &&
               item.type == pkg.type)
         ) {
            return item;
         }
      });

      if (existingPkg) {
         return;
      }

      setSelectedPackages((items: iSelectedPackages) => [...items, pkg]);
   };

   return (
      <div className={style.services} id="services">
         <h1 className={style.services_heading}>Services</h1>
         <Weddings
            selectPackage={selectPackage}
            btnRef={btnRef}
            onOpen={onOpen}
         />
         <Ruracio
            selectPackage={selectPackage}
            btnRef={btnRef}
            onOpen={onOpen}
         />
         <Portrait
            selectPackage={selectPackage}
            btnRef={btnRef}
            onOpen={onOpen}
         />

         <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xl"
         >
            <DrawerOverlay />
            <DrawerContent bg="slate">
               <DrawerCloseButton />
               <DrawerBody>
                  <Cart
                     setSelectedPackages={setSelectedPackages}
                     onClose={onClose}
                     selectedPackages={selectedPackages}
                  />
               </DrawerBody>
            </DrawerContent>
         </Drawer>
      </div>
   );
};

>>>>>>> development
export default Services;
