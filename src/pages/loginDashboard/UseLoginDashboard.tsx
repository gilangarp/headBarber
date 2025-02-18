import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { loginWorkerThunk } from "../../actions/workerAction";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { ILoginWorkerForm } from "../../types/workerType";

const UseLoginDashboard = () => {
  const dispatch = useStoreDispatch();
  const navigate = useNavigate();
  const { error, token } = useStoreSelector((state) => state.loginDashboard);
  const [formData, setFormData] = useState<ILoginWorkerForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginWorkerThunk(formData));
  };
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate, token]);
  return { handleChange, handleSubmit, error, formData };
};

export default UseLoginDashboard;
