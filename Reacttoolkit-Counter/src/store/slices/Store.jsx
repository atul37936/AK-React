import { configureStore } from "@reduxjs/toolkit";
import { CountersliceFun } from "./Counterslice";

export const store = configureStore({
    reducer: {
        counter: CountersliceFun.reducer,
    },
})