/** @format */

import axios from "axios";
import { BookedService } from "./types";

export const fetchCategories = async () => {
   const response = await axios.get("http://localhost:8000/api/categories");
   return response.data;
};

export const getShootCost = (bookedServices: BookedService[]) => {
   const initialValue = 0;
   return bookedServices.reduce(
      (accumulator: number, currentValue: BookedService) =>
         accumulator + currentValue.service.price * currentValue.quantity,
      initialValue
   );
};
