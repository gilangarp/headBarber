import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { IResponse } from "../types/responseType";
import { IRoleArrayResponse, IRoleResponse } from "../types/roleType";

export const getAllRoleThunk = createAsyncThunk<
  IRoleResponse[],
  void,
  { rejectValue: IResponse }
>("allRoleThunk/get", async (_, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/admin/role`;

  try {
    const response: AxiosResponse<IRoleArrayResponse> = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
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
