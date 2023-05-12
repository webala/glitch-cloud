/** @format */

export type GalleryImage = {
   filename: string;
   download_url: string;
   display: boolean;
};
export type Category = {
   id: number;
   name: string;
};
export type Service = {
   id:number;
   name: string;
   description: string;
   price: number;
   category: Category[]
   quantifiable: boolean;
};

export type BookedService = {
   service: Service;
   quantity: number;
}

export type User = {
   id: number;
   username: string;
   first_name: string;
   last_name: string;
   email: string;
}

