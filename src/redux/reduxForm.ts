import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const SUBMIT_NAME = "SUBMIT_NAME";
interface MyState {
  name: string;
  empId: string;
  age: number | null;
}

interface submitDetailsReturnType {
  type: string;
  payload: MyState;
}

interface initialStateType{
    employees:MyState[]
}

export const submitDetails = (per: MyState): submitDetailsReturnType => {
  return {
    type: SUBMIT_NAME,
    payload: per,
  };
};


const initialState = {
  employees: [
  ],
};

const reducer = (state: initialStateType = initialState, action:submitDetailsReturnType):initialStateType => {
  switch (action.type) {
    case "SUBMIT_NAME":
      return {
        employees: [...state.employees, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
