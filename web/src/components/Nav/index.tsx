import "./styles.sass";
import logo from "../../assets/logo.svg";
import { FaUserCircle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { ApiContext } from "../../context/apiContext";
import { useContext, useState } from "react";
import FormNetWork from "../FormNetwork/FormNetwork";
import Modal from "../Modal";

interface IProps {
  name: string;
  tel: string;
  id: string;
}

function Nav() {
  const { setAsideActive , setAnimation, asideActive} = useContext(ApiContext);

  const openMenu = () => {
    asideActive? setAsideActive(false) :setAsideActive(true)
    
    setAnimation(false)
  }
  return (
    <>
      <nav>
        <div>
          <img src={logo} alt="" />
          <h2>Contatos</h2>
        </div>

        <div className="box_input">
          <button className="btn_search">
            <AiOutlineSearch size={"22px"} />
          </button>
          <input type={"text"} />
        </div>

        <button className="btn_menu" onClick={openMenu}>
          <AiOutlineMenu size={"22px"} />
        </button>
      </nav>
    </>
  );
}

export default Nav;
