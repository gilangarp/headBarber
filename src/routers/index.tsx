import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import NotFound from "../pages/error/NotFound";
import Schedule from "../pages/Schedule/Schedule";
import Worker from "../pages/worker/Worker";
import CreateWorker from "../pages/createWorker/CreateWorker";

export const Router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route
        path="/dashboard"
        element={<DashboardLayout />}
        errorElement={<NotFound />}
      >
        <Route path="/dashboard/schedule" element={<Schedule />} />
        <Route path="/dashboard/worker" element={<Worker />} />
        <Route path="/dashboard/worker/add" element={<CreateWorker />} />
      </Route>
    </>
  )
);
