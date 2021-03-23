const func = ({ dispatch, getstate }: any) => (next: any) => (action: any) => {
  if (typeof action === "function") {
    action(dispatch, getstate);
  } else next(action);
};
export default func;
