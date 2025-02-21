import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  IAuthWorkerResponse,
  IFilterSuperUser,
  ILoginWorkerForm,
  IWorkerArrayResponse,
  IWorkerCreate,
  IWorkerCreateRespone,
  IWorkerLoginResponse,
  IWorkerRespone,
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

export const getAllWorkerThunk = createAsyncThunk<
  IWorkerRespone[],
  { token: string; filter: IFilterSuperUser },
  { rejectValue: IResponse }
>("allWorker/get", async (form, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/dashboard/worker`;
  const params = new URLSearchParams();
  if (form.filter.outletCode) {
    params.append("outletCode", form.filter.outletCode);
  }
  if (form.filter.roleName) {
    params.append("roleName", form.filter.roleName);
  }
  const fullUrl = `${url}?${params.toString()}`;
  try {
    const response: AxiosResponse<IWorkerArrayResponse> = await axios.get(
      fullUrl,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${form.token}`,
        },
      }
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

export const createWorkerThunk = createAsyncThunk<
  string,
  { form: IWorkerCreate; token: string },
  { rejectValue: IResponse }
>("workerThunk/post", async ({ form, token }, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/dashboard/worker/add`;
  try {
    const response: AxiosResponse<IWorkerCreateRespone> = await axios.post(
      url,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data.message);

    return response.data.message;
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
