import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "Vo Ngan",
    age: 21,
    about: "hello world",
    ava: "https://preview.redd.it/rrz3hmsxcll71.png?auto=webp&s=59f9f6ae2b212be39fc4f3e17fcabc873c287858",
    theme: "#ff9051"
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        update: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.about = action.payload.about
            state.ava = action.payload.ava
            state.theme = action.payload.theme
        }
    },
})

export const { update } = userSlice.actions

export default userSlice.reducer