import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { CatalogPage } from "./pages/CatalogPage"

import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<CatalogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
