import UpdateTask from "./UpdateTask";
import DeleteTask from "./DeleteTask";
import Button from "../ui/Button";
import { useState } from "react";
import { useEffect } from "react";
import { getTarefas } from "../../services/TaskService.js";

function GetTasks() {
  const [option, setOption] = useState(1);
  const [task, setTask] = useState([]);
  const [tarefaSelecionadaId, setTarefaSelecionadaId] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarTarefas() {
      try {
        const dados = await getTarefas();
        setTarefas(dados);
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
        setErro("Não foi possível carregar as tarefas do servidor.");
      }
    }
    carregarTarefas();
  }, []);
  return (
    <>
      {option == 1 && (
        <>
          <h2 className="register-title">Suas Tarefas</h2>
          {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}

          {
            task.length === 0 ? (
              <p className="user-info">Nenhum usuário cadastrado.</p>
            ) : (
              task.map((task) => (
                <div
                  key={task.registration}
                  className="user-card"
                >
                  <p className="user-info">
                    <strong>Nome:</strong> {task.fullName}
                  </p>

                  <p className="user-info">
                    <strong>Descrição:</strong> {task.description}
                  </p>

                  <div className="group-buttons">
                    <Button buttonMessage="Alterar Task" onClick={() => {
                      setTarefaSelecionadaId(task.id);
                      setOption(2);
                    }} />
                    <Button buttonMessage="Deletar Task" onClick={() => {
                      setTarefaSelecionadaId(task.id);
                      setOption(3);
                    }} />
                  </div>
                </div>
              ))
            )
          }
        </>
      )}
      {option == 2 && (
        <>
          <UpdateTask />
        </>
      )}
      {option == 3 && (
        <>
          <DeleteTask />
        </>
      )}
    </>
  );
}

export default GetTasks;