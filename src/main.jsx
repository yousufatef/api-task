import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { PdfViewer } from './pages/PdfViewer.jsx';
import ExcelViewer from './pages/ExcelViewer.jsx';
import PowerPointViewer from './pages/PowerPointViewer.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/pdf" element={<PdfViewer />} />
      <Route path="/excel" element={<ExcelViewer />} />
      <Route path="/power-point" element={<PowerPointViewer />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
