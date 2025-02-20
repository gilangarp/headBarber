import { InputField } from "../../components/Input/InputField";
import UseCreateOutlet from "./UseCreateOutlet";

const FormOutlet = () => {
  const { formData, handleChange, handleSubmit, error, loading } =
    UseCreateOutlet();
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          Add a new Outlet
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <InputField
                id="outletName"
                label="Outlet Name"
                placeholder="Type outlet name"
                value={formData.outletName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <InputField
                label="Outlet Code"
                id="outletCode"
                value={formData.outletCode}
                onChange={handleChange}
                placeholder="Type outlet code"
                required
              />
            </div>
            <div className="w-full">
              <InputField
                label="Latitude"
                id="latitude"
                value={formData.latitude}
                onChange={handleChange}
                placeholder="Latitude"
                required
              />
            </div>
            <div className="w-full">
              <InputField
                label="Longitude"
                id="longitude"
                value={formData.longitude}
                onChange={handleChange}
                placeholder="Longitude"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800"
          >
            {loading ? "Add Outlet..." : "Add Outlet"}
          </button>

          {error && <div className="text-red-500 pt-5">{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default FormOutlet;
