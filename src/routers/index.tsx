import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import NotFound from "../pages/error/NotFound";
import Schedule from "../pages/schedule/Schedule";
import Worker from "../pages/worker/Worker";
import CreateWorker from "../pages/createWorker/CreateWorker";
import LoginDashboard from "../pages/loginDashboard/LoginDashboard";
import PrivateRoute from "./PrivateRoute";
import Outlet from "../pages/outlet/Outlet";
import CreateOutlet from "../pages/createOutlet/CreateOutlet";

export const Router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute
            to="/dashboard/login"
            requiredRoles={["manager", "owner", "cashier"]}
          >
            <DashboardLayout />
          </PrivateRoute>
        }
        errorElement={<NotFound />}
      >
        <Route
          path="/dashboard/schedule"
          element={
            <PrivateRoute
              to="/dashboard/login"
              requiredRoles={["manager", "owner", "cashier"]}
            >
              <Schedule />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/worker"
          element={
            <PrivateRoute
              to="/dashboard/login"
              requiredRoles={["manager", "owner"]}
            >
              <Worker />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/worker/add"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["owner"]}>
              <CreateWorker />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/outlet"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["owner"]}>
              <Outlet />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/outlet/add"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["owner"]}>
              <CreateOutlet />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/dashboard/login" element={<LoginDashboard />} />
    </>
  )
);
