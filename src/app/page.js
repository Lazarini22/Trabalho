"use client";
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined) {
        toast.error("E-mail ou senha invalidos");
      } else {
        toast.success("Login efetuado!");
        push("/pages/dashboard");
      }
    } catch {
      toast.error("Erro");
      refresh();
    }
  };

  return (
    <div className="page">
      <header id="espace">
        <h1>
          IFMS<span class="servidores">.servidores</span>
        </h1>
      </header>
      <div className="section">
        <form onSubmit={handlerLogin}>
          <input
            placeholder="E-mail"
            type="email"
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          ></input>
          <input
            placeholder="Senha"
            type="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          ></input>
          <button>Entrar</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
