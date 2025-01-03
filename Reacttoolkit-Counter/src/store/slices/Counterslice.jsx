import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


 export const CountersliceFun = createSlice({
    name : "Counter",
    initialState : {
        value : 0,
    },
    reducers : {
        incerment : (state , actions) => {
            state.value = state.value + actions.payload;
        },

        decrement : (state , actions) => {
            state.value = state.value - actions.payload;
        },
    },
})
 export const {incerment,decrement} = CountersliceFun.actions;