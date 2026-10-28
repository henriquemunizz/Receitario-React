import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts/MainLayout"

import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<h1 className="font-display text-2xl font-bold">Catálogo</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
