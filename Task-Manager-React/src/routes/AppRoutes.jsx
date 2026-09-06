import { Routes, Route } from "react-router-dom";
import Init from "../pages/Init";
import Tasks from "../pages/Tasks";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home"
        element={<Init />}
      />
      <Route path="/"
        element={<Tasks />}
      />
    </Routes>
  )
}

export default AppRoutes;