import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IDateResponse,
  IScheduleResponse,
  IWorkScheduleArrayResponse,
  IWorkScheduleByDateResponse,
  IWorkScheduleQuery,
} from "../types/scheduleType";
import axios, { AxiosResponse } from "axios";
import { IResponse } from "../types/responseType";

export const getAllScheduleThunk = createAsyncThunk<
  IWorkScheduleByDateResponse[],
  { filter?: IWorkScheduleQuery; token: string },
  { rejectValue: IResponse }
>("getAllScheduleThunk/get", async (form, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/dashboard/schedule`;
  const params = new URLSearchParams();

  if (form.filter?.month) {
    params.append("month", form.filter?.month);
  } else {
    const now = new Date();
    const monthNow = now.getMonth() + 1;
    params.append("month", monthNow.toString());
  }

  if (form.filter?.outletId) {
    params.append("outletId", form.filter?.outletId);
  }

  if (form.filter?.roleId) {
    params.append("roleId", form.filter?.roleId);
  }

  if (form.filter?.userId) {
    params.append("userId", form.filter?.userId);
  }

  const fullUrl = `${url}?${params.toString()}`;
  try {
    const response: AxiosResponse<IWorkScheduleArrayResponse> = await axios.get(
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

export const getAllDateThunk = createAsyncThunk<
  IDateResponse[],
  { month?: string },
  { rejectValue: IResponse }
>("getAllDateThunk/get", async (form, { rejectWithValue }) => {
  const url = `${
    import.meta.env.VITE_REACT_APP_API_URL
  }/dashboard/schedule/date`;
  const params = new URLSearchParams();
  if (form.month) {
    params.append("month", form.month);
  }

  const fullUrl = `${url}?${params.toString()}`;

  try {
    const response: AxiosResponse<IScheduleResponse> = await axios.get(fullUrl);

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
