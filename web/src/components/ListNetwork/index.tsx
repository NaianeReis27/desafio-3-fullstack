import * as React from "react";
import "./styles.sass";
import { ApiContext } from "../../context/apiContext";
import { useContext } from "react";
import { useEffect } from "react";
import Card from "../Card";
import FormNetWork from "../FormNetwork/FormNetwork";

function Network() {
  const { listNetwork, list } = useContext(ApiContext);
  useEffect(() => {
    listNetwork();
  }, [list]);

  return (
    <>
      <table>
        <thead className="title">
          <tr>
            <td>
              <h2>Contatos</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((ele) => (
              <Card tel={ele.tel} id={ele.id} name={ele.name} />
            ))
          ) : (
            <tr>
              <td>
                <p>Ainda não foram adicionados contatos</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Network;
