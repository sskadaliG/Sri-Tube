import { configureStore } from "@reduxjs/toolkit";

import appSlice from "../store/appSlice.js"

const appStore = configureStore({
reducer:{
    app: appSlice
}

});

export default appStore;