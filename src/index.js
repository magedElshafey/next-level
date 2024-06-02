import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// i18n next
import "./i18n";
// react query
import { QueryClientProvider, QueryClient } from "react-query";
// routes
import AppRouter from "./routes/AppRouter";
// toaster
import { Toaster } from "react-hot-toast";
// common functionality
import CommonFunctions from "./components/common/CommonFunctions";
// aos
import "aos/dist/aos.css";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-center" reverseOrder={false} />
    <CommonFunctions />
    <AppRouter />
  </QueryClientProvider>
);
