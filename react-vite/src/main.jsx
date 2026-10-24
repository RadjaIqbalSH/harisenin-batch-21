import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route  } from "react-router";
import { RouterProvider  } from "react-router";
import { router } from "./router/index"
import "./assets/styles/main.css";

const app = document.getElementById("root");

const root = createRoot(app);

root.render(
  <RouterProvider router={router} />
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<HomePage />} />
  //     <Route path="/login" element={<LoginPage />} />
  //     <Route path="/register" element={<RegisterPage />} />
  //   </Routes>
  // </BrowserRouter>,
);
