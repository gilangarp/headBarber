import { useState } from "react";
import { useParams } from "react-router-dom";
import { InputField } from "../../components/Input/InputField";

const UpdateOutlet = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    outletName: "",
    outletCode: "",
    latitude: "",
    longitude: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLoading(true);
    if (value) {
      setFormData({
        outletName: id === "outletName" ? value : "",
        outletCode: id === "outletCode" ? value : "",
        latitude: id === "latitude" ? value : "",
        longitude: id === "longitude" ? value : "",
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Cek apakah hanya satu field yang diisi
    const filledFields = Object.values(formData).filter(
      (field) => field !== ""
    ).length;

    if (filledFields !== 1) {
      setError("Please fill in only one field.");
      return;
    }

    // Hanya log data ke console jika ada yang diisi
    if (filledFields > 0) {
      console.log("Form Data Submitted:", formData, id);
      setError(null); // Reset error jika data valid
    } else {
      setError("Please fill at least one field.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <InputField
              id="outletName"
              label="Outlet Name"
              placeholder="Type outlet name"
              value={formData.outletName}
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <InputField
              label="Outlet Code"
              id="outletCode"
              value={formData.outletCode}
              onChange={handleChange}
              placeholder="Type outlet code"
            />
          </div>
          <div className="w-full">
            <InputField
              label="Latitude"
              id="latitude"
              value={formData.latitude}
              onChange={handleChange}
              placeholder="Latitude"
            />
          </div>
          <div className="w-full">
            <InputField
              label="Longitude"
              id="longitude"
              value={formData.longitude}
              onChange={handleChange}
              placeholder="Longitude"
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
        >
          {loading ? "Updating..." : "Update Outlet"}
        </button>

        {error && <div className="text-red-500 pt-5">{error}</div>}
      </form>
    </div>
  );
};

export default UpdateOutlet;
