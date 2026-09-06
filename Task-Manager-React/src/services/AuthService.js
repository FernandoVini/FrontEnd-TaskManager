import api from "./Services";

export const login = async (email, senha) => {
  try {
    const response = await api.post('/auth/login', { email, senha });
    const { token, usuario } = response.data;
    
    localStorage.setItem('@TaskManager:token', token);
    localStorage.setItem('@TaskManager:usuario', JSON.stringify(usuario));
    
    return true;
  } catch (error) {
    console.error("Erro ao fazer login", error);
    return false;
  }
};

export const cadastrar = async (nome, email, senha) => {
  try {
    const response = await api.post('/auth/register', { nome, email, senha });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário", error);
    throw error;
  }
};