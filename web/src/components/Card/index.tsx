import "./styles.sass";
import { FaUserCircle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { ApiContext } from "../../context/apiContext";
import { useContext, useState } from "react";
import FormNetWork from "../FormNetwork/FormNetwork";
import Modal from "../Modal";

interface IProps {
  name: string;
  tel: string;
  id: string;
}

function Card({ name, tel, id }: IProps) {
  const [modalUpdate, openModalUpdate] = useState(false);

  const { deleteNetwork } = useContext(ApiContext);
  return (
    <>
      {modalUpdate && (
        <div className="modal_container">
          <Modal>
            <div className="container_flex">
              <h4>Atualizar network</h4>
              <button onClick={() => openModalUpdate(false)} className="btn_close">
                X
              </button>
            </div>
            <FormNetWork type="update" id={id}/>
          </Modal>
        </div>
      )}

      <tr>
        <td>
          <div className="display_flex">
            <FaUserCircle size={"26px"} />
            <h3>{name}</h3>
          </div>
          <div className="display_flex">
            <BsFillTelephoneFill size={"26px"} />
            <p>{tel}</p>
          </div>
          <div className="display_flex">
            <button className="btn_delete" onClick={() => deleteNetwork(id)}>
              <AiTwotoneDelete />
            </button>
            <button className="btn_edite" onClick={() => openModalUpdate(true)}>
              <AiFillEdit />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}

export default Card;
