import "./styles.sass";
import { UseFormRegister,FieldErrorsImpl, FieldValues} from "react-hook-form/dist/types";



interface IProps {
  label:string
  data: string
  register: UseFormRegister<FieldValues>
  errors:Partial<FieldErrorsImpl>
  type: string
}

interface Idata {
  label: string;
  data: string;
}

function InputData({label, data, register, errors, type}:IProps) {
  return (
    <div className="Info">
      <label>{label}</label>
      <input type={type} {...register(data)} />
      <p>{errors[data]?.message?.toString()}</p>
    </div>
  );
}

export default InputData;
