import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import { FieldValues } from "react-hook-form";
import InputData from "../InputData";

const FormNetWork = () => {
  
  const {createNetwork, setModalAdd} = useContext(ApiContext);
 
  const formSchema = yup.object().shape({
    name: yup
    .string().required(),
    tel: yup
    .number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(formSchema),
  });


  const onclick = (data: any) => {
    createNetwork(data)
    setModalAdd(false)
  };

  return (
   
          <form onSubmit={handleSubmit(onclick)}>
              <InputData type="text" data={'name'} label={"name"} register={register} errors={errors}/>
              <InputData type="tel" data={'tel'} label={"tel"} register={register} errors={errors}/>
              <button type="submit">cadastrar</button>
          </form>
  );
};

export default FormNetWork;
