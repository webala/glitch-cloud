import { createSlice } from "@reduxjs/toolkit";

const shootSlice = createSlice({
   name: 'shoot',
   initialState: {
      bookedShoot: {id:46}
   },
   reducers: {
      setBookedShoot(state, action) {
         state.bookedShoot = action.payload
      }
   }
})

export const shootActions = shootSlice.actions
export default shootSlice