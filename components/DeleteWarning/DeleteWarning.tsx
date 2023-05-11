/** @format */

// import "./DeleteWarning.scss";
import { Spinner } from "@chakra-ui/react";

function DeleteWarning({
   onClose,
   handleDelete,
   loading,
}: {
   onClose: () => void;
   handleDelete: () => void;
   loading: boolean;
}) {
   return (
      <div className="delete-warning">
         {loading && (
            <div className="loading">
               <Spinner color="green.500" />
               <p>Just a sec</p>
            </div>
         )}
         <p className="text">Are you sure you want to delete this entry?</p>
         <div className="actions">
            <button
               className="delete"
               onClick={() => {
                  handleDelete();
                  onClose();
               }}
            >
               Proceed
            </button>
            <button className="cancel" type="button" onClick={onClose}>
               Cancel
            </button>
         </div>
      </div>
   );
}

export default DeleteWarning;
