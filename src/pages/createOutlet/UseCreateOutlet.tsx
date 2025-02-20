import { ChangeEvent, FormEvent, useState } from "react";
import { useStoreDispatch, useStoreSelector } from "../../hooks/useStore";
import { createOutletThunk } from "../../actions/outletAction";

const UseCreateOutlet = () => {
  const dispatch = useStoreDispatch();
  const { error, loading } = useStoreSelector((state) => state.createOutlet);
  const [formData, setFormData] = useState({
    outletName: "",
    outletCode: "",
    latitude: "",
    longitude: "",
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
    dispatch(createOutletThunk(formData));
  };

  return { formData, handleChange, handleSubmit, error, loading };
};

export default UseCreateOutlet;
