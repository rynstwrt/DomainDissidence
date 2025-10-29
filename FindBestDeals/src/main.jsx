import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from "./Home.jsx";
import NotFound from "./pages/NotFound.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<App />}>
                  <Route path={"*"} element={<NotFound />} />
                  <Route index element={<Home />} />
                  <Route path={"deals"} element={<App />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
