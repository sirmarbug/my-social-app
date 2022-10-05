import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getCurrentUser} from "../api/user";

const initialState = {
    currentUser: {}
}

export const fetchCurrentUser = createAsyncThunk(
    'currentUser/fetch',
    async () => {
        const { data } = await getCurrentUser()
        return data
    }
)

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        resetUser: state => {
            state.currentUser = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })
    }
})

export const { setUser, resetUser } = currentUserSlice.actions

export const selectCurrentUser = state => ({
    _id: state.currentUser.currentUser._id || null,
    firstName: state.currentUser.currentUser.firstName || null,
    lastName: state.currentUser.currentUser.lastName || null,
    email: state.currentUser.currentUser.email || null
})

export default currentUserSlice.reducer
