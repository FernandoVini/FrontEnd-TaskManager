import { useState } from "react";
import Button from "../ui/Button";
import { createTask } from "../../services/TaskService";

function RegisterTask({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleToggle = () => {
    setIsCompleted(!isCompleted);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('@TaskManager:token');

    if (!token) {
      alert("Sessão expirada. Faça login novamente.");
      return;
    }

    try {
      const taskData = {
        title: title,
        description: description,
        status: isCompleted,
      };

      await createTask(taskData);

      alert("Task registrada com sucesso!");
      setTitle("");
      setDescription("");
      setIsCompleted(false);

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Erro ao registrar a task:", error);
      alert(`Erro ao registrar: ${JSON.stringify(error.response?.data || error.message)}`);
    }
  };
  return (
    <>
      <h1 className="register-title">Criar Task</h1>

      <form className="register-card" id="formRegister" onSubmit={handleSubmit}>
        <input type="text"
          id="task-title"
          placeholder="Nome Completo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea id="task-description"
          rows="4" cols="50"
          placeholder="Descreva sua Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="status-container" onClick={handleToggle}>
          <input
            type="checkbox"
            id="status"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
          <label htmlFor="status">
            Sua Task está concluída?
            <strong className={isCompleted ? "status-yes" : "status-no"}>
              {isCompleted ? " (Sim)" : " (Não)"}
            </strong>
          </label>
        </div>
        <Button type="submit"
          variant="create"
          buttonMessage="Registrar Task"
        />
      </form>
    </>
  );
}

export default RegisterTask;