import service from "./Services";

export const getAllTasks = async () => {
  const response = await service.get('/tasks/get');
  return response.data;
};

export const getUserTasks = async () => {
  const response = await service.get(`/tasks/get/user`);
  return response.data;
};

export const createTask = async (dataTasks) => {
  const response = await service.post('/tasks/create', dataTasks);
  return response.data;
};

export const updateTask = async (id, dataTasks) => {
  const response = await service.put(`/tasks/${id}`, dataTasks);
  return response.data;
};

export const deleteTask = async (id) => {
  await service.delete(`/tasks/${id}`);
};