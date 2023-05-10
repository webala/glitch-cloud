/** @format */

import { Service } from "../../types";

type Props = {
   setMutationData: any;
   setEditData: any;
   editData: any;
   onClose: () => void;
   loading: boolean;
   handleEdit: () => void;
};

const EditForm = ({
   setEditData,
   setMutationData,
   editData,
   onClose,
   loading,
   handleEdit,
}: Props) => {
   return (
      <div>
         <form>
            {Object.entries(editData).map((entry) => {
               if (entry[0] !== "id") {
                  return (
                     <div className="field" key={entry[0]}>
                        <label>{entry[0]}</label>
                        <input
                           type="text"
                           value={entry[1] as string | number}
                           onChange={(e) => {
                              setEditData((prevData: any) => ({
                                 ...prevData,
                                 [entry[0]]: e.target.value,
                              }));
                              setMutationData((prevData: Service) => ({
                                 ...prevData,
                                 [entry[0]]: e.target.value,
                              }));
                           }}
                        />
                     </div>
                  );
               }
            })}
            <div className="actions">
               <button
                  className="sumbit"
                  onClick={(e) => {
                     e.preventDefault();
                     handleEdit();
                  }}
               >
                  Proceed
               </button>
               <button type="button" className="cancel" onClick={onClose}>
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
};

export default EditForm;
