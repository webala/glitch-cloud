/** @format */

import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import style from "./Upload.module.scss";

function Upload() {
   const [image, setImage] = useState<Blob>();
   const toast = useToast();
   const queryClient = useQueryClient();

   const uploadImageMutation = useMutation(
      async () => {
         let data = new FormData();
         data.append("image", image as Blob, image?.name);

         axios
            .post("http://localhost:8000/api/gallery/upload", data, {
               headers: { "content-type": "multipart/form-data" },
            })
            .then((res) => console.log("response: ", res.data))
            .catch((err) => console.log("err: ", err));
      },
      {
         onSuccess: () => {
            toast({
               title: "Success.",
               description: "New image uploaded.",
               status: "success",
               duration: 9000,
               isClosable: true,
               position: "bottom-right",
            });
            queryClient.invalidateQueries(["gallery"]);
         },
         onError: () => {
            toast({
               title: "Error.",
               description: "Failed to upload image",
               status: "error",
               duration: 9000,
               isClosable: true,
               position: "bottom-right",
            });
         },
      }
   );

   const handleImageUpload = (e:React.SyntheticEvent) => {
      e.preventDefault()
      uploadImageMutation.mutate()
   };
   return (
      <form className={style.upload} onSubmit={handleImageUpload} encType="multipart/form-data">
         <div className="field">
            <label htmlFor="brakes">Upload new image</label>
            <input
               className="image-input"
               type="file"
               accept="image/jpeg,image/jpg,image/png,image/gif"
               onChange={(e) => {
                  if (e.target.files) {
                     setImage(e.target.files[0] as Blob);
                  }
               }}
               required
            />
         </div>
         <div className="actions">
            <button type="submit">Upload</button>
         </div>
      </form>
   );
}

export default Upload;
