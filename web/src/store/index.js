import {configureStore} from "@reduxjs/toolkit";
import currentUserSlice from "./currentUserSlice";
import postsSlice from "./postsSlice";

const store = configureStore ({
    reducer: {
        currentUser: currentUserSlice,
        posts: postsSlice
    }
})

export default store
