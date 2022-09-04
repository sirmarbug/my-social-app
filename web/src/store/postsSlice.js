import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getPosts} from "../api/post";

const initialState = {
    loading: true,
    list: null
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const { data } = await getPosts()
        return data
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        resetItems: (state) => {
            state.list = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
            .addCase(fetchPosts.rejected, state => {
                state.loading = false
            })
    }
})

export const { resetItems } = postsSlice.actions

export const selectPostsLoading = state => state.posts.loading
export const selectPosts = state => state.posts.list

export default postsSlice.reducer
