/** @format */

import React, { useState } from "react";
import style from "./Shoots.module.scss";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
   useToast,
} from "@chakra-ui/react";
import { BookedService, Shoot } from "../../types";
import { AiFillDelete } from "react-icons/ai";
import DeleteWarning from "../DeleteWarning/DeleteWarning";
// import { getShootCost } from "../../utils";

function Shoots() {
   const [deleteShootId, setDeleteShootId] = useState<number>();
   var editShootId: number;
   var mutationData: { complete?: boolean };
   const {
      isOpen: deleteIsOpen,
      onOpen: deleteOnOpen,
      onClose: deleteOnClose,
   } = useDisclosure();

   const toast = useToast();
   const queryClient = useQueryClient();

   const fetchShoots = async () => {
      const response = await axios.get("http://localhost:8000/api/shoots");
      return response.data;
   };

   const deleteShootMutation = useMutation(
      async () => {
         const response = await axios.delete(
            `http://localhost:8000/api/shoot/${deleteShootId}`
         );
         return response.data;
      },
      {
         onSuccess: () => {
            toast({
               title: "Success!",
               description: "Shoot deleted",
               status: "success",
               duration: 9000,
               isClosable: true,
            });
            queryClient.invalidateQueries(["shoots"]);
         },

         onError: () => {
            toast({
               title: "Error!",
               description: "Please try again later",
               status: "error",
               duration: 9000,
               isClosable: true,
            });
         },
      }
   );

   const editShootMutation = useMutation(
      async () => {
         const response = await axios.patch(
            `http://localhost:8000/api/shoot/${editShootId}`,
            mutationData,
            {
               headers: {
                  "Content-Type": "application/json",
               },
            }
         );

         return response;
      },
      {
         onSuccess: () => {
            toast({
               title: "Success!",
               description: "Shoot complete",
               status: "success",
               duration: 9000,
               isClosable: true,
            });
            queryClient.invalidateQueries(["shoots"]);
         },

         onError: () => {
            toast({
               title: "Error!",
               description: "Please try again later",
               status: "error",
               duration: 9000,
               isClosable: true,
            });
         },
      }
   );

   const {
      data: shoots,
      isLoading,
      isError,
      error,
   } = useQuery(["shoots"], fetchShoots);
   if (isLoading)
      return (
         <div>
            <Spinner color="red.500" />
         </div>
      );
   if (isError) return <p>Error: </p>;
   const handleDelete = () => {
      deleteShootMutation.mutate();
   };
   console.log(shoots);
   return (
      <section className="">
         <div className={style.container}>
            <div className={style.heading}>
               <h1>Shoots</h1>
            </div>
            <div className={style.shoots}>
               {shoots.map((shoot: Shoot, index: number) => {
                  const shootTotal = 700;
                  return (
                     <div key={index} className={style.shoot}>
                        <div className={style.shoot_heading}>
                           <div>
                              <h1>{shoot.location}</h1>
                              <p>{shoot.date.slice(0, 10)}</p>
                           </div>
                           <p
                              className={
                                 shoot.booked
                                    ? `${style.booked} ${style.total}`
                                    : `${style.total}`
                              }
                           >
                              ksh {shootTotal}
                           </p>
                        </div>
                        <div className={style.description}>
                           {shoot.description}
                        </div>
                        <div className={style.booked_services}>
                           {shoot.booked_services.map(
                              (service: BookedService, index: number) => (
                                 <div
                                    key={index}
                                    className={style.booked_service}
                                 >
                                    <div className={style.service_heading}>
                                       <h2>{service.service.name} X {service.quantity}</h2>
                                       <small>
                                          {service.service.description}
                                       </small>
                                    </div>
                                    <p className={style.price}>
                                       @ksh{service.service.price}
                                    </p>
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
                           <div className="edit">
                              <p>Mark as complete</p>
                              <Switch
                                 colorScheme={`orange`}
                                 defaultChecked={shoot.complete}
                                 onChange={() => {
                                    editShootId = shoot.id;
                                    mutationData = {
                                       complete: !shoot.complete,
                                    };
                                    editShootMutation.mutate();
                                 }}
                              />
                           </div>
                           <div>
                              <button
                                 className={style.delete}
                                 onClick={() => {
                                    setDeleteShootId(shoot.id);
                                    deleteOnOpen();
                                 }}
                              >
                                 <AiFillDelete />
                              </button>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <Modal
            colorScheme={`blue`}
            isOpen={deleteIsOpen}
            onClose={deleteOnClose}
         >
            <ModalOverlay />
            <ModalContent background={`blue.900`}>
               <ModalHeader>Delete part # {deleteShootId}</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <DeleteWarning
                     loading={deleteShootMutation.isLoading}
                     handleDelete={handleDelete}
                     onClose={deleteOnClose}
                  />
               </ModalBody>
            </ModalContent>
         </Modal>
      </section>
   );
}

export default Shoots;
