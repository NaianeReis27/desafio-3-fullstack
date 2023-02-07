import "./styles.sass";
import { UseFormRegister,FieldErrorsImpl, FieldValues} from "react-hook-form/dist/types";

interface IProps {
  label:string
  data: string
  register: UseFormRegister<FieldValues>
  errors:Partial<FieldErrorsImpl>
  type: string
}

function InputData({label, data, register, errors, type}:IProps) {
  return (
    <div className="Info">
      <label>{label}</label>
      <input type={type} {...register(data)} autoComplete="on"/>
      <p>{errors[data]?.message?.toString()}</p>
    </div>
  );
}

export default InputData;
