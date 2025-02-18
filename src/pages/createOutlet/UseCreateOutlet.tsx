import { ChangeEvent, FormEvent, useState } from "react";

const UseCreateOutlet = () => {
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
    console.log(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default UseCreateOutlet;
