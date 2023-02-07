import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import { FieldValues } from "react-hook-form";
import InputData from "../InputData";
import { Link } from "react-router-dom";
import "./styles.sass";

const FormData = () => {
  const { login } = useContext(ApiContext);

  const formSchema = yup.object().shape({
    email: yup.string().email("É necessário ser um email").required("O campo deve ser preenchido."),
    password: yup.string().required("O campo deve ser preenchido."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });

  const onclick = (data: any) => {
    login(data);
    console.log(data)
  };

  return (
    <>
      <form  className={"form_login"} onSubmit={handleSubmit(onclick)}>
        <InputData
          type="text"
          data={"email"}
          label={"email"}
          register={register}
          errors={errors}
        />
        <InputData
          type="password"
          data={"password"}
          label={"password"}
          register={register}
          errors={errors}
        />
        <button>Login</button>
        <Link to="/cadastro">Clique aqui para cadastrar</Link>
      </form>
      
    </>
  );
};

export default FormData;
