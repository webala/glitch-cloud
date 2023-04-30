/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCategories } from "../../utils";
import { fetchServices } from "../Services/Services";
import style from "./Book.module.scss";
import { Service } from "../../types";
import moment from "moment";
import axios from "axios";

function Book() {
   const [location, setLocation] = useState<string>();
   const [date, setDate] = useState<string>();
   const [time, setTime] = useState<string>();
   const [description, setDescription] = useState<string>();
   const [bookedServices, setBookedServices] = useState<Service[]>([]);

   const bookMutation = useMutation(
      async () => {
         const data = {
            location,
            date,
            time,
            description,
            services: bookedServices,
         };

         const response = await axios.post(
            "http://localhost:8000/api/shoots",
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
         onSuccess: () => console.log("shoot booked"),
         onError: () => console.log("an error occurred"),
      }
   );

   const {
      data: services,
      isLoading: servicesIsLoading,
      isError: servicesIsError,
      error: servicesError,
   } = useQuery(["services"], fetchServices);

   const {
      data: categories,
      isLoading: categoriesIsLoading,
      isError: categoriesIsError,
      error: categoriesError,
   } = useQuery(["categories"], fetchCategories);

   if (servicesIsLoading) return <div>Loading ...</div>;
   if (servicesIsError) return <div>Error ...</div>;

   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
      setDate(newDate);
   };
   const handleBookShoot = (e: React.SyntheticEvent) => {
      e.preventDefault();
      bookMutation.mutate();
   };
   console.log("categories: ", services);
   return (
      <div className={style.book}>
         <div className={style.title}>
            <h1>Book a photoshoot session</h1>
         </div>
         <form onSubmit={handleBookShoot}>
            <div className={style.main}>
               <div className={style.left}>
                  <div className="heading">
                     <h2>Shoot details</h2>
                  </div>
                  <div className="field">
                     <label htmlFor="">Shoot location</label>
                     <input
                        type="text"
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Juja"
                        required
                     />
                  </div>
                  <div className="field">
                     <label htmlFor="">Date</label>
                     <input
                        type="date"
                        placeholder="Shoot date"
                        onChange={handleDateChange}
                        required
                     />
                  </div>
                  <div className="field">
                     <label htmlFor="">Time</label>
                     <input
                        type="text"
                        onChange={(e) => setTime(e.target.value)}
                        placeholder="10:00"
                        required
                     />
                  </div>
                  <div className="field">
                     <label htmlFor="">Description</label>
                     <p className={style.helper}>
                        In your own words, describe what you want for the
                        photoshoot session
                     </p>
                     <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="10:00"
                        required
                     />
                  </div>
               </div>
               <div className={style.right}>
                  <div className={style.services}>
                     <h2 className="heading">
                        Customize your shoot. Which of our services will you
                        need?
                     </h2>
                     <p className={style.helper}>Click on a service to select</p>
                     <div className={style.list}>
                        {services.map((service: Service, index: number) => {
                           const selected = bookedServices.find(
                              (ser: Service) => service.id === ser.id
                           );
                           return (
                              <div
                                 key={index}
                                 className={
                                    selected
                                       ? `${style.service} ${style.selected}`
                                       : `${style.service}`
                                 }
                                 onClick={() => {
                                    if (selected) {
                                       setBookedServices(
                                          bookedServices.filter(
                                             (selected) =>
                                                selected.id !== service.id
                                          )
                                       );
                                    } else {
                                       setBookedServices(
                                          (selected: Service[]) => [
                                             ...selected,
                                             service,
                                          ]
                                       );
                                    }
                                 }}
                              >
                                 <div className={style.info}>
                                    <div>
                                       <h2>{service.name}</h2>
                                       <p>@{service.price}</p>
                                    </div>
                                    <p>{service.description}</p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
            <div className="actions">
               <button className="submit" type="submit">
                  Proceed
               </button>
            </div>
         </form>
      </div>
   );
}

export default Book;
