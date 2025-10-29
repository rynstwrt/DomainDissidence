import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import Deals from './pages/Deals.jsx'
import NotFound from "./pages/NotFound.jsx";
import Layout from "./Layout.jsx";
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route element={<Layout />}>
                  {/* 404 Page */}
                  <Route path={"*"} element={<NotFound />} />

                  {/* Home Page */}
                  <Route index element={<Home />} />

                  {/* Deals Page */}
                  <Route path={"deals"} element={<Deals />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
