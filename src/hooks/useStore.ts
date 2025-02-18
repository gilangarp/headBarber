import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useStoreSelector = useSelector.withTypes<RootState>();
export const useStoreDispatch = useDispatch.withTypes<AppDispatch>();
