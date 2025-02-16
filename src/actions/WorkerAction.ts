// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ISuperUserResponse, IWorkerBody } from "../types/workerType";

// export const createWorkerThunk = createAsyncThunk<
//   IWorkerBody,
//   IWorkerBody,
//   { rejectValue: { error: string; status?: number } }
// >("createWorkerThunk", async (body: IWorkerBody, { rejectWithValue }) => {
//   try {
//     const url = `${import.meta.env.VITE_REACT_APP_API_URL}/user/register`;
//     const result: AxiosResponse<ISuperUserResponse> = await axios.post(
//       url,
//       body
//     );
//     return result.data.data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       const errorMessage =
//         error.response?.data?.error?.message || "An unexpected error occurred";
//       const status = error.response?.status;
//       return rejectWithValue({
//         error: errorMessage,
//         status: status,
//       });
//     }
//     return rejectWithValue({
//       error: "An unexpected error occurred.",
//     });
//   }
// });
