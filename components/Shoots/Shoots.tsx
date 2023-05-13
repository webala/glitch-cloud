/** @format */

import React, { useState } from "react";
import style from "./Shoots.module.scss";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
   Spinner,
   Switch,
} from "@chakra-ui/react";
import { BookedService, Shoot } from "../../types";

function Shoots() {
   const [deleteShootId, setDeleteShootId] = useState<number>()
      const {
         isOpen: deleteIsOpen,
         onOpen: deleteOnOpen,
         onClose: deleteOnClose,
      } = useDisclosure();


   const fetchShoots = async () => {
      const response = await axios.get("http://localhost:8000/api/shoots");
      return response.data;
   };

   const deleteShootMutation = useMutation(async () => {
      
   })

   const editShootMutation = useMutation(async () => {

   })

   const { data: shoots, isLoading, isError, error } = useQuery(["shoots"], fetchShoots);
   if (isLoading) return <div><Spinner color="red.500" /></div>
   if (isError) return <p>Error: </p>
   console.log('shoots: ', shoots)
   return (
      <section className="">
         <div className={style.container}>
            <div className={style.heading}>
               <h1>Shoots</h1>
            </div>
            <div className={style.shoots}>
               {shoots.map((shoot: Shoot, index: number) => (
                  <div key={index} className={style.shoot}>
                     <div className={style.shoot_heading}>
                        <h1>{shoot.location}</h1>
                        <p>{shoot.date.slice(0, 10)}</p>
                     </div>
                     <div className={style.booked_services}>
                        {shoot.booked_services.map(
                           (service: BookedService, index: number) => (
                              <div key={index} className={style.booked_service}>
                                 <div className={style.service_heading}>
                                    <h2>{service.service.name}</h2>
                                    <small>{service.service.description}</small>
                                 </div>
                                 <p className={style.price}>@ksh{service.service.price}</p>
                              </div>
                           )
                        )}
                     </div>
                     <div className={style.client}>
                        <p>
                           Client name:{" "}
                           <span>
                              {" "}
                              {shoot.client?.first_name}{" "}
                              {shoot.client?.last_name}
                           </span>
                        </p>
                        <p>
                           Phone: <span>{shoot.client?.phone}</span>
                        </p>
                        <p>
                           Email: <span>{shoot.client?.email}</span>
                        </p>
                     </div>

                     <div className={style.actions}>
                        <p>Mark as complete</p>
                        <Switch colorScheme={`orange`} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {/* <Modal
            colorScheme={`blue`}
            isOpen={deleteIsOpen}
            onClose={deleteOnClose}
         >
            <ModalOverlay />
            <ModalContent background={`blue.900`}>
               <ModalHeader>Delete part # {deleteServiceId}</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <DeleteWarning
                     loading={deleteServiceMutation.isLoading}
                     handleDelete={handleDelete}
                     onClose={deleteOnClose}
                  />
               </ModalBody>
            </ModalContent>
         </Modal> */}
      </section>
   );
}

export default Shoots;
