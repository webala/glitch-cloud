/** @format */

import React, { useState, Dispatch, SetStateAction } from "react";
import Portrait from "./components/Portrait";
import Ruracio from "./components/Ruracio";
import Weddings from "./components/Weddings";
import Cart from "../Cart/Cart";
import style from "./Services.module.scss";
import {
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
} from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Service } from "../../types";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Link from "next/link";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditForm from "../EditForm/EditForm";

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
   const [mutationData, setMutationData] = useState({});
   const [editData, setEditData] = useState<Service>();

   const {
      isOpen: editIsOpen,
      onOpen: editOnOpen,
      onClose: editOnClose,
   } = useDisclosure();

   const editServiceMutation = useMutation(async () => {
      const response = await axios.put(
         `http://localhost:8000/api/service/${editData?.id}`,
         mutationData,
         {
            headers: {
               "Content-Type": "application/json",
            },
         }
      );
      return response.data
   }, {
      onSuccess: () => console.log('success'),
      onError: () => console.log('error')
   });
   const {
      data: services,
      isLoading,
      isError,
      error,
   } = useQuery(["services"], fetchServices);

   if (isLoading) return <div>Loading ...</div>;
   if (isError) return <div>Error ...</div>;

   const handleEdit = () => {
      editServiceMutation.mutate();
   };

   console.log("services: ", services);
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
                     <div className={style.name}>
                        <h2>{service.name}</h2>
                        <div className={style.actions}>
                           <button className={style.delete}>
                              <AiFillDelete />
                           </button>
                           <button
                              className={style.edit}
                              onClick={() => {
                                 setEditData(service);
                                 editOnOpen();
                              }}
                           >
                              <AiFillEdit />
                           </button>
                        </div>
                     </div>
                     <p>{service.description}</p>
                  </div>
               </AnimationOnScroll>
            ))}
         </div>
         <div className={style.actions}>
            <Link href="/book-shoot">
               <button className={style.book_shoot}>Book a shoot</button>
            </Link>
         </div>
         <Modal
            colorScheme={`blue`}
            isOpen={editIsOpen}
            onClose={editOnClose}
            motionPreset={`scale`}
         >
            <ModalOverlay />
            <ModalContent background={`blue.900`}>
               <ModalHeader>Edit part # {editData?.id}</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <EditForm
                     handleEdit={handleEdit}
                     loading={editServiceMutation.isLoading}
                     setEditData={setEditData}
                     editData={editData}
                     setMutationData={setMutationData}
                     onClose={editOnClose}
                  />
               </ModalBody>
            </ModalContent>
         </Modal>
      </div>
   );
};

export default Services;
