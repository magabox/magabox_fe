import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

export const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers:{
        openModal : (state,action) => {
            console.log(action.payload)
            state.isOpen = action.payload

        }
    }
})

export const {openModal} = modalSlice.actions
export default modalSlice.reducer;