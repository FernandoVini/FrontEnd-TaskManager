import service from "./Services";

export const login = async (userEmail, userPassword) => {
  try {
    const response = await service.post('/auth/login', { userEmail, userPassword });
    const token = response.data.token;
    

    if (!token) {
      console.error("Token não retornado pela API");
      return false;
    }
    
    localStorage.setItem('@TaskManager:token', token);

    return true;
  } catch (error) {
    console.error("Erro ao fazer login", error);
    return false;
  }
};

export const register = async (userName, userEmail, userPassword) => {
  try {
    const response = await service.post('/auth/register', { userName, userEmail, userPassword });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário", error);
    throw error;
  }
};