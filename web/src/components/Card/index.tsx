import "./styles.sass";
import { FaUserCircle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

interface IProps {
  name: string;
  tel: string;
}

function Card({ name, tel }: IProps) {
  return (
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
          <button className="btn_delete"><AiTwotoneDelete/></button>
          <button className="btn_edite"><AiFillEdit/></button>
        </div>
      </td>
    </tr>
  );
}

export default Card;
