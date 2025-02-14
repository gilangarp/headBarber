import "./index.css";
import "flowbite";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { Router } from "./routers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
);
