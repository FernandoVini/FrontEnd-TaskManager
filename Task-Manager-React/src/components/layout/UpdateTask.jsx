import { useState } from "react";
import Button from "../ui/Button";
import { updateTask } from "../../services/TaskService";

function UpdateTask({ task, taskId, onSuccess, onUpdateSuccess, onCancel }) {
  const targetId = taskId;
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [isCompleted, setIsCompleted] = useState(task?.status || false);

  const [prevTask, setPrevTask] = useState(task);
  if (task !== prevTask) {
    setPrevTask(task);
    setTitle(task?.title || "");
    setDescription(task?.description || "");
    setIsCompleted(task?.status || false);
  }

  const handleToggle = () => {
    setIsCompleted((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('@TaskManager:token');

    if (!token) {
      alert("Sessão expirada. Faça login novamente.");
      return;
    }

    if (!targetId) {
      alert("Erro: Nenhuma tarefa válida selecionada para atualização.");
      return;
    }

    try {
      const taskData = {
        title: title,
        description: description,
        status: isCompleted,
      };

      await updateTask(targetId, taskData);

      alert("Task atualizada com sucesso!");

      const callback = onSuccess || onUpdateSuccess;
      if (callback) {
        callback();
      }
    } catch (error) {
      console.error("Erro ao atualizar a task:", error);
      alert(`Erro ao atualizar: ${JSON.stringify(error.response?.data || error.message)}`);
    }
  };
  return (
    <>
      <h1 className="register-title">
        Atualizar Task
      </h1>

      <form className="register-card" id="formRegister" onSubmit={handleSubmit}>
        <input type="text"
          id="task-title"
          placeholder="Título da Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea id="task-description"
          rows="4"
          cols="50"
          placeholder="Descreva sua Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="status-container"
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        >
          <input
            type="checkbox"
            id="status"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
          />
          <label htmlFor="status" style={{ cursor: "pointer" }}>
            Sua Task está concluída?
            <strong className={isCompleted ? "status-yes" : "status-no"}>
              {isCompleted ? " (Sim)" : " (Não)"}
            </strong>
          </label>
        </div>
        <div className="group-choice" style={{ marginTop: "1rem" }}>
          <Button type="submit"
            variant="create"
            buttonMessage="Atualizar Task" />
          {onCancel && (
            <Button type="button"
              variant="delete"
              buttonMessage="Cancelar"
              onClick={onCancel}
            />
          )}
        </div>
      </form>
    </>
  );
}

export default UpdateTask;