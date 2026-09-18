import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
import Button from "../ui/Button";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getUserTasks } from "../../services/TaskService.js";

function GetTasks() {
  const navigate = useNavigate();

  const [option, setOption] = useState(1);
  const [task, setTask] = useState([]);
  const [tarefaSelecionadaId, setTarefaSelecionadaId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [erro, setErro] = useState("");

  const loadTasks = useCallback(async () => {
    await Promise.resolve();
    const token = localStorage.getItem("@TaskManager:token");
    if (!token) {
      alert("Sessão expirada. Faça login novamente.");
      navigate("/");
      return;
    }
    try {
      const dados = await getUserTasks();
      setTask(dados);
      setErro("");
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error);
      setErro("Não foi possível carregar as tarefas do servidor.");

      if (error.response && error.response.status === 401) {
        alert("Sessão expirada. Faça login novamente.");
        navigate("/");
      }
    }
  }, [navigate]);

  useEffect(() => {
    const carregar = async () => {
      await loadTasks();
    };

    carregar();
  }, [loadTasks]);

  const handleDeleteSuccess = (deletedId) => {
    setTask((prevTasks) =>
      prevTasks.filter((item) => (item.taskId) !== deletedId)
    );
  };

  const handleUpdateSuccess = () => {
    setOption(1);
    loadTasks();
  };
  return (
    <>
      {option === 1 && (
        <>
          <h2 className="register-title">Suas Tarefas</h2>
          {erro && <p className="erro">{erro}</p>}

          {
            task.length === 0 ? (
              <p className="user-info">Nenhuma tarefa cadastrada.</p>
            ) : (
              task.map((task) => (
                <div
                  key={task.taskId}
                  className="user-card"
                >
                  <p className="user-info">
                    <strong>Nome:</strong> {task.title}
                  </p>

                  <p className="user-info">
                    <strong>Descrição:</strong> {task.description}
                  </p>

                  <p className="user-info">
                    <strong>Status:</strong> {task.status ? "Concluída" : "Incompleta"}
                  </p>

                  <div className="group-choice">
                    <Button variant="update"
                      buttonMessage="Alterar Task"
                      onClick={() => {
                        setTarefaSelecionadaId(task.taskId);
                        setOption(2);
                      }}
                    />
                    <Button variant="delete"
                      buttonMessage="Deletar Task"
                      onClick={() => {
                        setTarefaSelecionadaId(task.taskId);
                        setIsDeleteModalOpen(true);
                      }}
                    />
                  </div>
                </div>
              ))
            )
          }
        </>
      )}
      {option === 2 && (
        <>
          <UpdateTask taskId={tarefaSelecionadaId}
            task={task.find((task) => task.taskId === tarefaSelecionadaId)}
            onSuccess={handleUpdateSuccess}
            onCancel={() => setOption(1)} />
        </>
      )}
      <DeleteTask
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        taskId={tarefaSelecionadaId}
        onSuccess={handleDeleteSuccess}
      />
    </>
  );
}

export default GetTasks;