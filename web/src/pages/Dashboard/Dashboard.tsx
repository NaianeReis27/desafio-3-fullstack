import Network from "../../components/ListNetwork";
import "./styles.sass";
import { ApiContext } from "../../context/apiContext";
import { useContext } from "react";
import Modal from "../../components/Modal";
import FormNetWork from "../../components/FormNetwork/FormNetwork";
const Dashboard = () => {
  const { modalAdd, setModalAdd } = useContext(ApiContext);
  const exit = () => {
    localStorage.removeItem("@TOKEN");
    window.location.reload()
  }
  return (
    <>
    <button className="btn_exit" onClick={exit}>sair</button>
      {modalAdd && (
        <div className="modal_container">
          <Modal>
            <div  className="container_flex">
              <h4>Cadastrar network</h4>
              <button onClick={() => setModalAdd(false)} className="btn_close">X</button>
            </div>
            <FormNetWork/>
          </Modal>
        </div>
      )}

      <div className="container_dashboard">
        <button onClick={() => setModalAdd(true)}>Adicionar contato</button>
        <Network />
      </div>
    </>
  );
};

export default Dashboard;
