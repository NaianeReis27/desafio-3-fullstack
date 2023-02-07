import * as React from "react";
import "./styles.sass";
import { ApiContext } from "../../context/apiContext";
import { useContext } from "react";
import { useEffect } from "react";
import Card from "../Card";
import FormNetWork from "../FormNetwork/FormNetwork";

function Network() {
  const { listNetwork, list} = useContext(ApiContext);
  useEffect(() => {
    listNetwork();
  }, [list]);

  return (
  <>

    <table>
        <thead className="title">
          <tr>
            <h2>Contatos</h2>
          </tr>
        </thead>
      <tbody>
        {list.length > 0 ? (
          list.map((ele) => <Card tel={ele.tel} id={ele.id} name={ele.name} />)
        ) : (
          <h2>Ainda não foram adicionados contatos</h2>
        )}
      </tbody>
    </table>
  </>
    
  );
}

export default Network;
