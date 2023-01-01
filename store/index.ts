import { configureStore } from "@reduxjs/toolkit";
import shootSlice from "./shoot-slice";

const store = configureStore({
   reducer: {
      shoot: shootSlice.reducer
   }
})

export default store