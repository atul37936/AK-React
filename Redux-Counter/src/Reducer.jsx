import {ADD,SUB} from "./Components/Action";
import Counter from "./Components/Counter";

export function reducer(state,Action)
{
    switch(Action.type)
    {
        case ADD:{
            return{Counter : state.Counter + Action.payload};
        }
        case SUB:{
            return{Counter : state.Counter - Action.payload};
        }
        default:
            return state;
    }

}