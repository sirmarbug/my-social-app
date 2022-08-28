import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,
    email: null
}

const currentUserSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
        setUser: (state) => {
            state.firstName = 'Mariusz'
            state.lastName = 'Bugajski'
            state.email = 'sirmarbug+u1@gmail.com'
        },
        resetUser: state => {
            state.firstName = null
            state.lastName = null
            state.email = null
        }
    }
})

export const { setUser, resetUser } = currentUserSlice.actions

export const selectCurrentUser = state => ({
    firstName: state.currentUser.firstName,
    lastName: state.currentUser.lastName,
    email: state.currentUser.email
})

export default currentUserSlice.reducer
