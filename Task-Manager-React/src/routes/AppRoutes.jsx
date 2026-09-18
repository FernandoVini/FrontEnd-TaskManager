import { Routes, Route } from "react-router-dom";
import Init from "../pages/Init";
import Tasks from "../pages/Tasks";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/"
        element={<Init />}
      />
      <Route path="/home"
        element={<Tasks />}
      />
    </Routes>
  )
}

export default AppRoutes;