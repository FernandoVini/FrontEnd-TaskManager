import RegisterTask from "../components/layout/RegisterTask";
import GetTasks from "../components/layout/GetTasks";
import Button from "../components/ui/Button";
import "../css/pages/Tasks.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tasks() {
  const navigate = useNavigate();
  const [option, setOption] = useState(1);

  const token = localStorage.getItem("@TaskManager:token");

  useEffect(() => {
    if (!token) {
      alert("Sessão expirada. Faça login novamente.");
      navigate("/");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("@TaskManager:token");
    navigate("/");
  };
  return (
    <>
      <div className="group-choice">
        <Button variant="menu" margin="mg-R" buttonMessage="Sair" onClick={handleLogout}/>
        {option == 2 && (<>
          <Button variant="menu" margin="mg-L" buttonMessage="Mostrar Tasks" onClick={() => setOption(1)} />
        </>)}
        {option == 1 && (<>
          <Button variant="menu" margin="mg-L" buttonMessage="Registrar Task" onClick={() => setOption(2)} />
        </>)}
      </div>
      {option == 1 && (<>
        <div>
          <GetTasks />
        </div>
      </>)}

      {option == 2 && (<>
        <div>
          <RegisterTask onSuccess={() => setOption(1)} />
        </div>
      </>)}

    </>
  );
}

export default Tasks;