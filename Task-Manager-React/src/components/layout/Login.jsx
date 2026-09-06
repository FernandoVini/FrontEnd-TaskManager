import Button from "../ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/AuthService";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro("");

    const sucesso = await login(email, password);
    if (sucesso) {
      navigate("/home");
    } else {
      setErro("E-mail ou senha incorretos.");
    }
  };
  return (
    <>
      <h1 className="register-title">Login</h1>

      <form className="register-card" id="formRegister" onSubmit={handleLogin}>
        {erro && <p style={{ color: "red", textAlign: "center" }}>{erro}</p>}
        <input type="text" id="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
        <input type="password" id="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}  required />
        <Button buttonMessage="Entrar" buttontype="submit" />
      </form>
    </>
  )
}

export default Login;