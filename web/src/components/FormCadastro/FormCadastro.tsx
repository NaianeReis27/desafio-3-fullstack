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
    .string().required("O campo deve ser preenchido."),
    tel: yup
    .number().typeError("O campo deve ser preenchido com um número de telefone").required("O campo deve ser preenchido.").positive("O número tem que ser um valor positivo")
    .integer("O número tem que ser inteiro"),
    email: yup
    .string().email("Deve ser um email").required("O campo deve ser preenchido."),
    password: yup
    .string().required("O campo deve ser preenchido."),
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
              <InputData type="text" data={'name'} label={"Name"} register={register} errors={errors}/>
              <InputData type="email" data={'email'} label={"E-mail"} register={register} errors={errors}/>
              <InputData type="tel" data={'tel'} label={"Tel"} register={register} errors={errors}/>
              <InputData type="password" data={'password'} label={"Password"} register={register} errors={errors}/>
              <button type="submit">cadastrar</button>
          </form>
  );
};

export default FormCadastro;
