import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from "./Home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          {/* <App /> */}

          <Routes>
              <Route element={<App />}>
                  <Route index element={<Home />} />
                  <Route path={"deals"} element={<App />} />
              </Route>

              {/* <Route index element={<Home />} /> */}
              {/* <Route path={"deals"} element={<App />} /> */}
          </Routes>
      </BrowserRouter>
  </StrictMode>
)
