import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import cnmpIMG from "../../assets/cnmp.jpg";
import { LayoutComponents } from "../../components/LayoutComponents";
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    localStorage.setItem('token', 'seuTokenDeAutenticacao');


    navigate('/HomePageLogada');
  };

  return (
    <LayoutComponents>
      <form className="login-form">
        <span className="login-form-title">
          <img src={cnmpIMG} alt="Usuário do CNMP" />
        </span>

        <span className="login-form-title">Bem vindo</span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn" onClick={handleLogin}>Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};

export default Login;