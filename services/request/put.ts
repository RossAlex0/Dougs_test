import { StateDetail } from "../type/types";
import { myAxios } from "./axiosInstance";

// ** OPERATION ** \\

export const putOperation = (id: number, request: StateDetail) => {
  if (typeof request.categoryId == "string") {
    request.categoryId = parseInt(request.categoryId);
  }
  if (typeof request.amount == "string") {
    request.amount = parseInt(request.amount);
  }
  return myAxios
    .put(`/operations/${id}`, { request })
    .then((response) => response.data)
    .catch((error) => error.response.status);
};
