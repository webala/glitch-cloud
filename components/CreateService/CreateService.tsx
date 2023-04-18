/** @format */

import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import style from "./CreateService.module.scss";

function CreateService() {
   const [name, setName] = useState<string>();
   const [description, setDescription] = useState<string>();
   const [price, setPrice] = useState<number>();
   const queryClient = useQueryClient();
   const toast = useToast();

   const addServiceMutation = useMutation(
      async () => {
         const data = {
            name,
            description,
            price,
         };
         const response = await axios.post(
            "http://localhost:8000/api/services",
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
         onSuccess: () => {
            toast({
               title: "Success",
               description: "Service created.",
               status: "success",
               duration: 9000,
               isClosable: true,
            });
            queryClient.invalidateQueries(["services"]);
         },
         onError: () => {
            toast({
               title: "Error.",
               description: "Failed to creatae service",
               status: "error",
               duration: 9000,
               isClosable: true,
               position: "bottom-right",
            });
         },
      }
   );

   const handleSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      addServiceMutation.mutate();
   };
   return (
      <form className={style.create_service} onSubmit={handleSubmit}>
         <div className={style.field}>
            <label htmlFor="">Name</label>
            <input
               onChange={(e) => setName(e.target.value)}
               type="text"
               placeholder="Service name"
            />
         </div>

         <div className={style.field}>
            <label htmlFor="">Description</label>
            <input
               onChange={(e) => setDescription(e.target.value)}
               type="text"
               placeholder="Service description"
            />
         </div>

         <div className={style.field}>
            <label htmlFor="">Price</label>
            <input
               onChange={(e) => setPrice(parseInt(e.target.value))}
               type="number"
               placeholder="Service price"
            />
         </div>

         <div className="actions">
            <button>Create service</button>
         </div>
      </form>
   );
}

export default CreateService;
