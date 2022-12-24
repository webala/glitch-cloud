/** @format */

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
     category: String;
     type: String;
}

export interface iSelectedPackages {
     selectedPackages: iSelectedPackage[]
}

const Services: React.FC = () => {
     const [selectedPackages, setSelectedPackages] = useState<
          iSelectedPackage[]
     >([]);
     const { isOpen, onOpen, onClose } = useDisclosure();
     const btnRef = React.useRef();

     

     return (
          <div className={style.services} id="services">
               <h1 className={style.services_heading}>Services</h1>
               <Weddings
                    setSelectedPackages={setSelectedPackages}
                    btnRef={btnRef}
                    onOpen={onOpen}
               />
               <Ruracio />
               <Portrait />

               <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
               >
                    <DrawerOverlay />
                    <DrawerContent>
                         <DrawerCloseButton />
                         <DrawerHeader>Create your account</DrawerHeader>

                         <DrawerBody>
                              <Cart selectedPackages={selectedPackages} />
                         </DrawerBody>
                    </DrawerContent>
               </Drawer>
          </div>
     );
};

export default Services;
