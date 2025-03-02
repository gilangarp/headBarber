import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IResponse } from "../types/responseType";
import {
  IRoleArrayResponse,
  IRoleResponse,
  IRoleResponseApp,
} from "../types/roleType";

export const createRoleThunk = createAsyncThunk<
  string,
  { token: string; name: string },
  { rejectValue: IResponse }
>("createRoleThunk/post", async (form, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/dashboard/role/add`;
  try {
    const response: AxiosResponse<IRoleResponseApp> = await axios.post(
      url,
      { name: form.name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${form.token}`,
        },
      }
    );
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

export const getAllRoleThunk = createAsyncThunk<
  IRoleResponse[],
  { token: string },
  { rejectValue: IResponse }
>("allRoleThunk/get", async (form, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/dashboard/role`;
  try {
    const response: AxiosResponse<IRoleArrayResponse> = await axios.get(url, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${form.token}`,
      },
    });
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

export const updateRoleThunk = createAsyncThunk<
  string,
  { token: string; roleId: number; name: string },
  { rejectValue: IResponse }
>("updateRoleThunk/patch", async (form, { rejectWithValue }) => {
  const url = `${
    import.meta.env.VITE_REACT_APP_API_URL
  }/dashboard/role/setting/${form.roleId}`;
  try {
    const response: AxiosResponse<IRoleResponseApp> = await axios.patch(
      url,
      { name: form.name },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${form.token}`,
        },
      }
    );
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

export const deleteRoleThunk = createAsyncThunk<
  string,
  { token: string; id: number },
  { rejectValue: IResponse }
>("deleteRoleThunk/delete", async (form, { rejectWithValue }) => {
  const url = `${
    import.meta.env.VITE_REACT_APP_API_URL
  }/dashboard/role/setting/${form.id}`;

  try {
    const response: AxiosResponse<IRoleResponseApp> = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${form.token}`,
      },
    });

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
