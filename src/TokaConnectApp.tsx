import { RouterProvider } from "react-router";

import { appRouter } from "./routers/app.router";

export function TokaConnectApp() {
  return <RouterProvider router={appRouter} />;
}

export default TokaConnectApp;
