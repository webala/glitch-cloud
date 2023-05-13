/** @format */

export type GalleryImage = {
   id: number;
   filename: string;
   download_url: string;
   display: boolean;
};
export type Category = {
   id: number;
   name: string;
};
export type Service = {
   id: number;
   name: string;
   description: string;
   price: number;
   category: Category[];
   quantifiable: boolean;
};

export type BookedService = {
   service: Service;
   quantity: number;
};

export type User = {
   id: number;
   username: string;
   first_name: string;
   last_name: string;
   email: string;
};

export type Client = {
   first_name: string;
   last_name: string;
   phone: string;
   email: string;
};

export type Shoot = {
   id: number;
   date: string;
   location: string;
   description: string;
   booked: boolean;
   cost: number;
   complete: boolean;
   booked_services: BookedService[];
   client?: Client;
};
