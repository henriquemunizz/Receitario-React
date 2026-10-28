import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"
import { CatalogPage } from "./pages/CatalogPage"
import { RecipePage } from "./pages/RecipePage"
import { NotFoundPage } from "./pages/NotFoundPage"

import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<CatalogPage />} />
          <Route path="/receitas/:id" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
