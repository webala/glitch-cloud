/** @format */

import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Category } from "../../types";
import { fetchCategories } from "../../utils";
import style from "./CreateService.module.scss";

function CreateService() {
   const [name, setName] = useState<string>();
   const [description, setDescription] = useState<string>();
   const [price, setPrice] = useState<number>();
   const [quantifiable, setQuantifiable] = useState<boolean>();
   const [serviceCategories, setServiceCategories] = useState<Category[]>([]);

   const queryClient = useQueryClient();
   const toast = useToast();

   const addServiceMutation = useMutation(
      async () => {
         const data = {
            name,
            description,
            price,
            quantifiable,
            category: serviceCategories,
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
            setName('');
            setDescription('');
            setPrice(0)
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

   console.log(serviceCategories);

   const {
      data: categories,
      isLoading: categoriesIsLoading,
      isError: categoriesIsError,
      error: categoriesError,
      isSuccess: isCategoriesSuccess,
   } = useQuery(["categories"], fetchCategories);

   return (
      <form className={style.create_service} onSubmit={handleSubmit}>
         <div className="field">
            <label htmlFor="">Name</label>
            <input
               onChange={(e) => setName(e.target.value)}
               type="text"
               placeholder="Service name"
               value={name}
            />
         </div>

         <div className="field">
            <label htmlFor="">Description</label>
            <input
               onChange={(e) => setDescription(e.target.value)}
               type="text"
               placeholder="Service description"
               value={description}
            />
         </div>
         <div className="field">
            <label htmlFor="">Price</label>
            <input
               onChange={(e) => setPrice(parseInt(e.target.value))}
               type="number"
               placeholder="Price"
               value={price}
            />
         </div>
         <div className="field checkbox">
            <label htmlFor="">Quantifiable</label>
            <input
               onChange={(e) => {
                  setQuantifiable(() => (e.target.checked ? true : false));
               }}
               type="checkbox"
            />
         </div>

         <div className="heading">
            <h2>Which of the following categories requires this service?</h2>
         </div>
         {categoriesIsLoading ? <>Loading ...</> : null}

         {isCategoriesSuccess ? (
            <>
               {categories.map((category: Category, index: number) => {
                  const selected = serviceCategories?.find(
                     (cat: Category) => cat.id === category.id
                  );

                  return (
                     <div
                        className={`field checkbox ${style.selected}`}
                        key={index}
                     >
                        <label htmlFor="">{category.name}</label>
                        <input
                           onChange={() => {
                              if (selected) {
                                 setServiceCategories([
                                    ...serviceCategories?.filter(
                                       (cat: Category) => cat.id !== category.id
                                    ),
                                 ]);
                              } else {
                                 setServiceCategories([
                                    ...serviceCategories,
                                    category,
                                 ]);
                              }
                           }}
                           type="checkbox"
                        />
                     </div>
                  );
               })}
            </>
         ) : null}
         {categoriesIsError ? <div>Error</div> : null}

         <div className="actions">
            <button type="submit" className="submit">
               Create service
            </button>
         </div>
      </form>
   );
}

export default CreateService;
