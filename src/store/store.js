import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../store/appSlice.js"
import searchReducer from "../store/searchSlice.js"
import chatSlice from "../store/chatSlice.js"



const appStore = configureStore({
    reducer: {
        app: appSlice,
        search: searchReducer,
        chat: chatSlice,
    }

});

export default appStore;