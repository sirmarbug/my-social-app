import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getMyPosts, getPosts} from "../api/post";

const initialState = {
    loading: true,
    list: null
}

export const fetchAllPosts = createAsyncThunk(
    'posts/fetchAllPosts',
    async () => {
        const { data } = await getPosts()
        return data
    }
)

export const fetchMyPosts = createAsyncThunk(
    'posts/fetchMyPosts',
    async () => {
        const { data } = await getMyPosts()
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
            .addCase(fetchAllPosts.pending, state => {
                state.loading = true
            })
            .addCase(fetchAllPosts.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
            .addCase(fetchAllPosts.rejected, state => {
                state.loading = false
            })
            .addCase(fetchMyPosts.pending, state => {
                state.loading = true
            })
            .addCase(fetchMyPosts.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
            .addCase(fetchMyPosts.rejected, state => {
                state.loading = false
            })
    }
})

export const { resetItems } = postsSlice.actions

export const selectPostsLoading = state => state.posts.loading
export const selectPosts = state => state.posts.list

export default postsSlice.reducer
