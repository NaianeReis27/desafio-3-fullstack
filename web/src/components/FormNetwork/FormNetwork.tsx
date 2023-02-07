import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ApiContext } from "../../context/apiContext";
import { FieldValues } from "react-hook-form";
import InputData from "../InputData";

interface IProps {
  type: string;
  id?: string;
}

const FormNetWork = ({type, id}:IProps) => {
  
  const {createNetwork, setModalAdd, updatedNetwork} = useContext(ApiContext);
 
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
    if(type === "update"){
      updatedNetwork(data, id)
    }else{
      createNetwork(data)
    }
    
    setModalAdd(false)
  };

  return (
   
          <form onSubmit={handleSubmit(onclick)}>
              <InputData type="text" data={'name'} label={"name"} register={register} errors={errors}/>
              <InputData type="tel" data={'tel'} label={"tel"} register={register} errors={errors}/>
              <button type="submit">{type=="update"? "Atualizar" : "Criar"}</button>
          </form>
  );
};

export default FormNetWork;
