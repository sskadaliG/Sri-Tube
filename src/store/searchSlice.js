import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState:{
    
    },
    reducers: {
        addCacheResults: (state,action) => {
            state=Object.assign(state,action.payload);
        }
    }
});

export const {addCacheResults} = searchSlice.actions;
export default searchSlice.reducer;