import RegisterTask from "../components/layout/RegisterTask";
import GetTasks from "../components/layout/GetTasks";
import Button from "../components/ui/Button";
import "../css/pages/Tasks.css";
import { useState } from "react";

function Tasks() {
  const [option, setOption] = useState(1);
  return (
    <>
      <div>
        <Button buttonMessage="Mostrar Tasks" onClick={() => setOption(1)} />
        <Button buttonMessage="Registrar Task" onClick={() => setOption(2)} />
      </div>
      {option == 1 && (<>
        <GetTasks />
      </>)
      }
      {option == 2 && (<>
        <RegisterTask />
      </>)
      }
    </>
  );
}

export default Tasks