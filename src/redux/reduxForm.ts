// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import postRequest from "../middileware/getRequest";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import getRequest from "../middileware/getRequest";

const SUBMIT_NAME = "SUBMIT_NAME";
const SUBMIT_INITIAL_STATE = "SUBMIT_INITIAL_STATE";
// const SHOW_POPUP = "SHOW_POPUP";

interface MyState {
  name: string;
  empId: string;
  age: number | null;
}

interface submitDetailsReturnType {
  type: string;
  payload: MyState;
}

interface initialStateType {
  employees: MyState[];
  // showPopup:any
}

export const submitDetails = (per: MyState): submitDetailsReturnType => {
  return {
    type: SUBMIT_NAME,
    payload: per,
  };
};
// export const showPopup = (per: any): any => {
//   return {
//     type: SHOW_POPUP,
//     payload: per,
//   };
// };

const initialState = {
  employees: [],
  // showPopup:false
};

const reducer = (
  state: initialStateType = initialState,
  // ? add fun type here at any
  action: submitDetailsReturnType | any
): initialStateType => {
  switch (action.type) {
    case "SUBMIT_NAME":
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    // case "SHOW_POPUP":
    //   return{
    //     ...state,
    //     showPopup:action.payload

    //   };
    case "SUBMIT_INITIAL_STATE":
      return{
        employees:action.payload
      }
    default:
      return state;
  }
};
// ()=>{
//   return(configureStore({reducer}))
// }

// const store = createStore(reducer, applyMiddleware(logger));

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), getRequest],
});

// store.dispatch((dispatch: any, getstate: any) => {
//   dispatch({
//     type: "getEmpData",
//     payload: {
//       url: "/employees",
//       // gethod:"get",
//       // date:{},
//       onSuccess: "updated",
//       onApiFail: "failed",
//     },
//   });

//   type: "",
// payload: {
//   name: "string",
//   empId: "string",
//   age: 0,
// },
// });

// store.dispatch((dispatch: any, getstate: any) => {
//   dispatch({
//     type: "getEmpData",
//     payload: {
//       url: "/employees",
//       gethod:"post",
//       data:{"name": "success", "empId": "post req ", "age": 0},
//       onSuccess: "updated",
//       onApiFail: "failed",
//     },
//   });

//   //   type: "",
//     // payload: {
//     //   name: "string",
//     //   empId: "string",
//     //   age: 0,
//     // },
// });

// store.dispatch((dispatch: any, getstate: any) => {
//   dispatch({
//     type: "getEmpData",
//     payload: {
//       url: "/",
//       // gethod:"get",
//       // date:{},
//       onSuccess: "updated",
//       onApiFail: "failed",
//     },
//   });

//   //   type: "",
//     // payload: {
//     //   name: "string",
//     //   empId: "string",
//     //   age: 0,
//     // },
// });

export default store;
