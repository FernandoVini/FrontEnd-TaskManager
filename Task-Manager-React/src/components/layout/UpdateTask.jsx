import Button from "../ui/Button";

function UpdateTask() {
  return (
    <>
      <h1 className="register-title">Atualizar Task</h1>

      <div className="register-card" id="formRegister">
        <input type="text" id="task-title" placeholder="Nome Completo" required />
        <textarea id="task-description" rows="4" cols="50" placeholder="Descreva sua Task" required />
        <label htmlFor="status">Sua Task está concluída?</label>
        <input type="radio" id="status" />
        <Button buttonMessage="Atualizar Task" />
      </div>
    </>
  );
}

export default UpdateTask;