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
import DetailWorker from "../pages/detailWorker/DetailWorker";
import CreateRole from "../pages/createRole/CreateRole";
import UpdateRole from "../pages/updateRole/UpdateRole";
import UpdateOutlet from "../pages/updateOutlet/UpdateOutlet";

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
          path="/dashboard/schedule/add"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["manager"]}>
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
            <PrivateRoute
              to="/dashboard/login"
              requiredRoles={["owner", "manager"]}
            >
              <CreateWorker />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/outlet"
          element={
            <PrivateRoute
              to="/dashboard/login"
              requiredRoles={["owner", "manager"]}
            >
              <Outlet />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/outlet/add"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["manager"]}>
              <CreateOutlet />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/outlet/setting/:id"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["manager"]}>
              <UpdateOutlet />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/worker/:id"
          element={
            <PrivateRoute
              to="/dashboard/login"
              requiredRoles={["manager", "owner", "cashier"]}
            >
              <DetailWorker />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/role/add"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["manager"]}>
              <CreateRole />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/role/setting/:id"
          element={
            <PrivateRoute to="/dashboard/login" requiredRoles={["manager"]}>
              <UpdateRole />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/dashboard/login" element={<LoginDashboard />} />
    </>
  )
);
