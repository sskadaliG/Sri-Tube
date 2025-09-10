import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../store/appSlice.js"
import searchReducer from "../store/searchSlice.js"


const appStore = configureStore({
reducer:{
    app: appSlice,
    search: searchReducer
}

});

export default appStore;