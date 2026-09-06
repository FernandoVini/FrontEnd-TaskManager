import { useState } from "react";
import Button from "../ui/Button";
function RegisterTask() {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <>
      <h1 className="register-title">Criar Task</h1>

      <div className="register-card" id="formRegister">
        <input type="text" id="task-title" placeholder="Nome Completo" required />
        <textarea id="task-description" rows="4" cols="50" placeholder="Descreva sua Task" required />
        <div className="status-container" onClick={handleToggle}>
          <input
            type="checkbox"
            id="status"
            checked={isCompleted}
            onChange={handleToggle}
          />
          <label htmlFor="status">
            Sua Task está concluída?
            <strong className={isCompleted ? "status-yes" : "status-no"}>
              {isCompleted ? " (Sim)" : " (Não)"}
            </strong>
          </label>
        </div>
        <Button buttonMessage="Registrar Task" />
      </div>
    </>
  );
}

export default RegisterTask;