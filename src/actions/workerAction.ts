import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  IAuthWorkerResponse,
  ILoginWorkerForm,
  IWorkerLoginResponse,
} from "../types/workerType";
import { IResponse } from "../types/responseType";

export const loginWorkerThunk = createAsyncThunk<
  IWorkerLoginResponse,
  ILoginWorkerForm,
  { rejectValue: IResponse }
>("authWorker/login", async (form, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/dashboard/login`;

  try {
    const response: AxiosResponse<IAuthWorkerResponse> = await axios.post(
      url,
      form
    );
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorResponse: IResponse = error.response?.data || {};
      const errorMessage =
        errorResponse.error?.message || "An unexpected error occurred.";
      const errorDetails = errorResponse.error?.details;

      return rejectWithValue({
        error: {
          message: errorMessage,
          details: errorDetails,
        },
      });
    }

    return rejectWithValue({
      error: {
        message: "An unexpected error occurred.",
      },
    });
  }
});
