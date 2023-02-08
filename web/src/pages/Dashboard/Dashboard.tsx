import Network from "../../components/ListNetwork";
import "./styles.sass";
import { ApiContext } from "../../context/apiContext";
import { useContext, useState } from "react";
import Modal from "../../components/Modal";
import FormNetWork from "../../components/FormNetwork/FormNetwork";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import { MdOutlineAdd } from 'react-icons/md'


const Dashboard = () => {
  const { modalAdd, setModalAdd, asideActive, setAsideActive, setAnimation, animation} = useContext(ApiContext);
  

  const closeModal = () => {
    console.log("huh")
    setAnimation(true)
    setTimeout(() => {
      setAsideActive(false)
    }, 300)
   
    
  }
  return (
    <>
      {modalAdd && (
        <div className="modal_container">
          <Modal>
            <div className="container_flex">
              <h4>Cadastrar network</h4>
              <button onClick={() => setModalAdd(false)} className="btn_close">
                X
              </button>
            </div>
            <FormNetWork type="created" />
          </Modal>
        </div>
      )}

      <div className="container_dashboard"  >
        <Nav />
        <div>
        <div className="container_network">
            <button onClick={() => setModalAdd(true)}><MdOutlineAdd size="20px"/></button>
            <Network />
          </div>
          {
            asideActive && (
            <>
            <SideBar animation ={animation} />
            <div onClick={closeModal} className="overlay"></div>
            </>
            )  
          }
       
        </div>
      </div>
    </>
  );
};

export default Dashboard;
