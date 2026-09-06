import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { cadastrar } from "../../services/AuthService";

function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErro("");
    setLoading(true);

    try {
      await cadastrar(nome, email, password);

      //alert("Cadastro realizado com sucesso! Faça login para continuar.");
      navigate("/");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setErro("Não foi possível realizar o cadastro. Verifique os dados ou tente outro e-mail.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1 className="register-title">Cadastro</h1>

      <form className="register-card" id="formRegister" onSubmit={handleRegister}>
        {erro && <p style={{ color: "red", textAlign: "center", fontSize: "14px" }}>{erro}</p>}
        <input type="text" id="name" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="text" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button buttonMessage={loading ? "Cadastrando..." : "Cadastrar Usuário"} buttontype="submit" disabled={loading} />
      </form>
    </>
  )
}

export default Register;