import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import { useContext } from "react";
import { ApiContext } from "../context/apiContext";
import Cadastro from "../pages/Cadastro/Cadastro";
 
function RotaMain() {
  const {token} = useContext(ApiContext)
  return (
    <Routes>
      <Route path="/" element={!token ? <MainPage /> : <Dashboard />} />
      <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to='/' replace/>} />
      <Route path="/cadastro" element={ <Cadastro />} />
    </Routes>
  );
}

export default RotaMain;
