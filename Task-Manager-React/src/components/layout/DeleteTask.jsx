import Button from "../ui/Button";
import { deleteTask } from "../../services/TaskService";
import "../../css/ui/Modal.css";

function DeleteTask({ isOpen, onClose, taskId, onSuccess }) {
  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      await deleteTask(taskId);
      onSuccess(taskId);
      alert("tarefa excluída com sucesso!");
      onClose();       
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
      alert("Não foi possível excluir a tarefa.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-title">Confirmar Exclusão</h3>
        <p className="modal-text">
          Tem certeza de que deseja excluir esta tarefa? Essa ação não poderá ser desfeita.
        </p>

        <div className="modal-actions">
          <Button
            variant="neutral"
            buttonMessage="Cancelar"
            onClick={onClose}
          />
          <Button
            variant="delete"
            buttonMessage="Confirmar Exclusão"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default DeleteTask;