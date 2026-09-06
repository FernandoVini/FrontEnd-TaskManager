import api from "./Services";

export const getTarefas = async () => {
  const response = await api.get('/v1/tarefas');
  return response.data;
};

export const criarTarefa = async (tarefaDados) => {
  const response = await api.post('/v1/tarefas', tarefaDados);
  return response.data;
};

export const atualizarTarefa = async (id, tarefaDados) => {
  const response = await api.put(`/v1/tarefas/${id}`, tarefaDados);
  return response.data;
};

export const deletarTarefa = async (id) => {
  await api.delete(`/v1/tarefas/${id}`);
};