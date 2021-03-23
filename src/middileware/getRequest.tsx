import axios from "axios";

const getRequest = ({ dispatch }: any) => (next: any) => async (action: any) => {
  if (action.type !== "getEmpData") return next(action);
  
  next(action);
  const { url, method, data, onSuccess, onFail } = action.payload;
  try {
    const response = await axios.request({
      baseURL: 'https://ts-redux-test6.free.beeceptor.com',
      url,
      method,
      data,
    });
    console.log("...........",response.data);
    dispatch({ type: "SUBMIT_INITIAL_STATE", payload: response.data.employees });
    // dispatch({ type: "SUBMIT_NAME", payload: {
    //     name: "success",
    //     empId: "success",
    //     age: 90,
    //   } });
  } catch (error) {
      console.log(error);
    dispatch({
      type: "SUBMIT_NAME",
      payload: {
        name: "error",
        empId: "error",
        age: 90,
      },
    });
  }

};

export default getRequest;
