/** @format */

import {
   Spinner,
   useToast,
   useDisclosure,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalCloseButton,
   ModalBody,
} from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { GalleryImage } from "../types";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { AiFillDelete } from "react-icons/ai";
import DeleteWarning from "../components/DeleteWarning/DeleteWarning";
import Upload from "../components/UploadImage/Upload";

export const fetchImages = async () => {
   const response = await axios.get("http://localhost:8000/api/gallery");
   return response.data;
};
function Gallery() {
   const [deleteImageId, setDeleteImageId] = useState<number>();
   const {
      data: images,
      isLoading,
      isError,
      error,
      isSuccess,
   } = useQuery(["gallery"], fetchImages);

   const {
      isOpen: deleteIsOpen,
      onOpen: deleteOnOpen,
      onClose: deleteOnClose,
   } = useDisclosure();

   const session = useSession();
   const toast = useToast();
   const queryClient = useQueryClient();

   const { status: authStatus } = session;

   const deleteImageMutation = useMutation(
      async () => {
         const response = await axios.delete(
            `http://localhost:8000/api/image/delete/${deleteImageId}`
         );
         return response.data;
      },
      {
         onSuccess: () => {
            toast({
               title: "Success!",
               description: "Image deleted",
               status: "success",
               duration: 9000,
               isClosable: true,
            });
            queryClient.invalidateQueries(["gallery"]);
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

   const handleDelete = () => {
      deleteImageMutation.mutate();
   };

   return (
      <div className="gallery">
         <div className="heading">
            <h1>Glitch photo gallery</h1>
            <div className="feedback">
               {isLoading ? <Spinner color="red.500" /> : null}
               {isError ? <p>Could load images. Try again later.</p> : null}
            </div>
         </div>

         <div className="images-container">
            {isSuccess ? (
               <div className="images">
                  {images.map((image: GalleryImage, index: number) => {
                     return (
                        <div key={index} className="item">
                           <Image
                              src={image.download_url}
                              width={800}
                              height={800}
                              alt="image"
                              className="image"
                           />
                           {authStatus === "authenticated" ? (
                              <div className="actions">
                                 <button
                                    className="delete"
                                    onClick={() => {
                                       setDeleteImageId(image.id);
                                       deleteOnOpen()
                                    }}
                                 >
                                    <AiFillDelete />
                                 </button>
                              </div>
                           ) : null}
                        </div>
                     );
                  })}
               </div>
            ) : null}
         </div>
         <Modal
            colorScheme={`blue`}
            isOpen={deleteIsOpen}
            onClose={deleteOnClose}
         >
            <ModalOverlay />
            <ModalContent background={`blue.900`}>
               <ModalHeader>Delete image # {deleteImageId}</ModalHeader>
               <ModalCloseButton />
               <ModalBody>
                  <DeleteWarning
                     loading={deleteImageMutation.isLoading}
                     handleDelete={handleDelete}
                     onClose={deleteOnClose}
                  />
               </ModalBody>
            </ModalContent>
         </Modal>
      </div>
   );
}

export default Gallery;
