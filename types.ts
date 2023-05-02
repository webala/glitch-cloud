/** @format */

export type GalleryImage = {
   filename: string;
   download_url: string;
   display: boolean;
};

export type Service = {
   id:number;
   name: string;
   description: string;
   price: number;
};

export type BookedService = {
   service: Service;
   quantity: number;
}

export type Category = {
   id: number;
   name: string;
}