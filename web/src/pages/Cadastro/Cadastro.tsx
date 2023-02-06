import "./styles.sass";


import FormCadastro from "../../components/FormCadastro/FormCadastro";
const Cadastro = () => {

  return (
    <>
      <div className="container_cadastrar">
        <h4>Cadastrar usuário</h4>
        <FormCadastro/>
      </div>
    </>
  );
};

export default Cadastro;
