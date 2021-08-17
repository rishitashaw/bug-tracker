import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    next(action);
    const { url, method, data, onSuccess, onFailure } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "https://localhost:9001/api",
        url,
        method,
        data,
      });
      dispatch(actions.apiCallSuccess({ payload: response.data }));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actions.apiCallFailure({ payload: error }));
      if (onFailure) dispatch({ type: actions.apiCallFailure, payload: error });
    }
  };

export default api;
