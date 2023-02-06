import * as React from "react";
import "./styles.sass";
import { ApiContext } from "../../context/apiContext";
import { useContext } from "react";
import { useEffect } from "react";
import Card from "../Card";

function Network() {
  const { listNetwork, list } = useContext(ApiContext);
  useEffect(() => {
    listNetwork();
  }, [list]);

  return (
    <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
          </tr>
        </thead>
      <tbody>
        {list.length > 0 ? (
          list.map((ele) => <Card tel={ele.tel} name={ele.name} />)
        ) : (
          <h1>Ainda não foram adicionados contatos</h1>
        )}
      </tbody>
    </table>
  );
}

export default Network;
