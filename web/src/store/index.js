import {configureStore} from "@reduxjs/toolkit";
import currentUserSlice from "./currentUserSlice";

const store = configureStore ({
    reducer: {
        currentUser: currentUserSlice
    }
})

export default store
