import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { ApiContext } from "../../context/apiContext";
import { FieldValues } from "react-hook-form";
import InputData from "../InputData";
import { Link } from "react-router-dom";

const FormData = () => {
  const { login } = useContext(ApiContext);

  const formSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
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
  };

  return (
    <>
      <form onSubmit={handleSubmit(onclick)}>
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
      </form>
      <Link to="/cadastro">Clique aqui para cadastrar</Link>
    </>
  );
};

export default FormData;
