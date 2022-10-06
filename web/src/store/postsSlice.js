import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getMyPosts, getPosts, likePostApi, unlikePostApi} from "../api/post";

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

export const likePostAction = createAsyncThunk(
    'posts/likePostAction',
    async data => {
        await likePostApi(data)
        return data.postId
    }
)

export const unlikePostAction = createAsyncThunk(
    'posts/unlikePostAction',
    async data => {
        await unlikePostApi(data)
        return data.postId
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        resetItems: (state) => {
            state.list = null
        },
        addNewPost: (state, action) => {
            state.list.items.unshift(action.payload)
            state.list.total += 1
        },
        removePost: (state, action) => {
            state.list.items = state.list.items.filter(p => p._id !== action.payload)
            state.list.total -= 1
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
            .addCase(likePostAction.fulfilled, (state, action) => {
                const postIndex = state.list.items.findIndex(p => p._id === action.payload)

                if (postIndex === -1) {
                    return
                }

                state.list.items[postIndex].like = true
            })
            .addCase(unlikePostAction.fulfilled, (state, action) => {
                const postIndex = state.list.items.findIndex(p => p._id === action.payload)

                if (postIndex === -1) {
                    return
                }

                state.list.items[postIndex].like = false
            })
    }
})

export const { resetItems, addNewPost, removePost } = postsSlice.actions

export const selectPostsLoading = state => state.posts.loading
export const selectPosts = state => state.posts.list

export default postsSlice.reducer
