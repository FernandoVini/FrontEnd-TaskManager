import { useState } from "react";
import Button from "../ui/Button";
import { register } from "../../services/AuthService";

function Register({ onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      await register(name, email, password);
      alert("Cadastro realizado com sucesso! Faça login para continuar.");
      setName("");
      setEmail("");
      setPassword("");
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setErro("Não foi possível realizar o cadastro. Verifique os dados ou tente outro e-mail.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className="register-title">
        Cadastro
      </h1>

      <form className="register-card" id="formRegister" onSubmit={handleRegister}>
        {erro && <p className="erro">{erro}</p>}
        <input type="text"
          id="name"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="password"
          id="password"
          placeholder="Senha"
          value={password} onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button buttonMessage={loading ? "Cadastrando..." : "Registrar Usuário"}
          variant="create"
          buttontype="submit"
          disabled={loading}
        />
      </form>
    </>
  )
}

export default Register;