import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import { FieldValues } from "react-hook-form";
import InputData from "../InputData";

const FormCadastro = () => {
  
  const {createUser} = useContext(ApiContext);
 
  const formSchema = yup.object().shape({
    name: yup
    .string().required(),
    tel: yup
    .number().required(),
    email: yup
    .string().email().required(),
    password: yup
    .string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });


  const onclick = (data: any) => {
    createUser(data)
  };

  return (
   
          <form onSubmit={handleSubmit(onclick)}>
              <InputData type="text" data={'name'} label={"name"} register={register} errors={errors}/>
              <InputData type="email" data={'email'} label={"email"} register={register} errors={errors}/>
              <InputData type="tel" data={'tel'} label={"tel"} register={register} errors={errors}/>
              <InputData type="password" data={'password'} label={"password"} register={register} errors={errors}/>
              <button type="submit">cadastrar</button>
          </form>
  );
};

export default FormCadastro;
