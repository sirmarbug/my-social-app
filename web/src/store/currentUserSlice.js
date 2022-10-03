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
            state.currentUser.firstName = null
            state.currentUser.lastName = null
            state.currentUser.email = null
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
    firstName: state.currentUser.currentUser.firstName || null,
    lastName: state.currentUser.currentUser.lastName || null,
    email: state.currentUser.currentUser.email || null
})

export default currentUserSlice.reducer
