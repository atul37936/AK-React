import { legacy_createStore } from "redux";
import {Reducer} from './Reducer'
import Counter from "./Components/Counter";

const initialstate = {
    Counter : 0
}

export const Store = legacy_createStore(Reducer,initialstate);