import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponse } from "../types/responseType";
import { IOutletDto, IOutletResponse } from "../types/outletType";
import axios, { AxiosResponse } from "axios";

export const createOutletThunk = createAsyncThunk<
  IOutletDto,
  IOutletDto,
  { rejectValue: IResponse }
>("outletThunk/post", async (form: IOutletDto, { rejectWithValue }) => {
  const url = `${import.meta.env.VITE_REACT_APP_API_URL}/dashboard/outlet/add`;
  try {
    const response: AxiosResponse<IOutletResponse> = await axios.post(
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
