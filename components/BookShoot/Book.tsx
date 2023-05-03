/** @format */

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchCategories } from "../../utils";
import { fetchServices } from "../Services/Services";
import style from "./Book.module.scss";
import { BookedService, Category, Service } from "../../types";
import moment from "moment";
import axios from "axios";
import Link from "next/link";

function Book() {
   const [location, setLocation] = useState<string>();
   const [date, setDate] = useState<string>();
   const [time, setTime] = useState<string>();
   const [description, setDescription] = useState<string>();
   const [bookedServices, setBookedServices] = useState<BookedService[]>([]);

   const bookMutation = useMutation(
      async () => {
         const data = {
            location,
            date,
            time,
            description,
            booked_services: bookedServices,
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
      isSuccess: isCategoriesSuccess,
   } = useQuery(["categories"], fetchCategories);

   if (servicesIsLoading) return <div>Loading ...</div>;
   if (servicesIsError) return <div>Error ...</div>;

   console.log("booked services:", bookedServices);
   const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
      setDate(newDate);
   };
   const handleBookShoot = (e: React.SyntheticEvent) => {
      e.preventDefault();
      bookMutation.mutate();
   };

   const quantifiableServices = bookedServices.filter(
      (service: BookedService) => service.service.quantifiable
   );

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
                     <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        required
                     />
                  </div>
                  {quantifiableServices.length > 0 ? (
                     <>
                        <h2 className="heading">
                           Set a quantity for the following
                        </h2>
                        {quantifiableServices.map(
                           (service: BookedService, index: number) => (
                              <div key={index} className="field">
                                 <label htmlFor="">
                                    {service.service.name}
                                 </label>
                                 <input
                                    type="number"
                                    onChange={(e) => {
                                       setBookedServices((services) => {
                                          const newServices = services.map(
                                             (ser) => {
                                                if (ser.service.id === service.service.id) {
                                                   ser.quantity = parseInt(
                                                      e.target.value
                                                   );
                                                }
                                                return ser;
                                             }
                                          );
                                          return newServices;
                                       });
                                    }}
                                    placeholder="10:00"
                                    required
                                    value={service.quantity}
                                 />
                              </div>
                           )
                        )}
                     </>
                  ) : null}

                  <div className="actions">
                     <button className="submit" type="submit">
                        Proceed
                     </button>
                  </div>
               </div>
               <div className={style.right}>
                  <div className={style.services}>
                     <h2 className="heading">
                        Customize your shoot. Which of our services will you
                        need?
                     </h2>
                     <p className={style.helper}>
                        Click on a service to select
                     </p>
                     <div className={style.links}>
                        <p>Find a category</p>

                        {isCategoriesSuccess ? (
                           <ul>
                              {categories.map(
                                 (category: Category, index: number) => (
                                    <li key={index}>
                                       <Link href={`#${category.id}`}>
                                          {category.name}
                                       </Link>
                                    </li>
                                 )
                              )}
                           </ul>
                        ) : null}
                     </div>

                     {isCategoriesSuccess ? (
                        <>
                           {categories.map(
                              (category: Category, index: number) => {
                                 const servicesInCategory = services.filter(
                                    (service: Service) => {
                                       const serviceCategories =
                                          service.category;
                                       const serviceIsPresent =
                                          serviceCategories.find(
                                             (cat: Category) =>
                                                category.id === cat.id
                                          );
                                       if (serviceIsPresent) return service;
                                    }
                                 );

                                 return (
                                    <>
                                       <h2
                                          className={style.category_heading}
                                          id={`${category.id}`}
                                       >
                                          {category.name}
                                       </h2>
                                       <div className={style.list} key={index}>
                                          {servicesInCategory.map(
                                             (
                                                service: Service,
                                                index: number
                                             ) => {
                                                const selected =
                                                   bookedServices.find(
                                                      (ser: BookedService) =>
                                                         service.id ===
                                                         ser.service.id
                                                   );
                                                return (
                                                   <div
                                                      className={
                                                         selected
                                                            ? `${style.service} ${style.selected}`
                                                            : `${style.service}`
                                                      }
                                                      key={index}
                                                      onClick={() => {
                                                         if (selected) {
                                                            setBookedServices(
                                                               bookedServices.filter(
                                                                  (selected) =>
                                                                     selected
                                                                        .service
                                                                        .id !==
                                                                     service.id
                                                               )
                                                            );
                                                         } else {
                                                            setBookedServices(
                                                               (
                                                                  selected: BookedService[]
                                                               ) => [
                                                                  ...selected,
                                                                  {
                                                                     service,
                                                                     quantity: 1,
                                                                  },
                                                               ]
                                                            );
                                                         }
                                                      }}
                                                   >
                                                      <div
                                                         className={style.info}
                                                      >
                                                         <div>
                                                            <h2>
                                                               {service.name}
                                                            </h2>
                                                            <p>
                                                               @{service.price}
                                                            </p>
                                                         </div>
                                                         <p>
                                                            {
                                                               service.description
                                                            }
                                                         </p>
                                                      </div>
                                                   </div>
                                                );
                                             }
                                          )}
                                       </div>
                                    </>
                                 );
                              }
                           )}
                        </>
                     ) : null}

                     <div className={style.list}>
                        {services.map((service: Service, index: number) => {
                           const selected = bookedServices.find(
                              (ser: BookedService) =>
                                 service.id === ser.service.id
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
                                                selected.service.id !==
                                                service.id
                                          )
                                       );
                                    } else {
                                       setBookedServices(
                                          (selected: BookedService[]) => [
                                             ...selected,
                                             { service, quantity: 1 },
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
         </form>
      </div>
   );
}

export default Book;
