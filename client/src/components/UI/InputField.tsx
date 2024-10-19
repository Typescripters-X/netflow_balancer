import { IconType } from "react-icons";


type InputFieldTypes = {
    type?: string,
    placeholder?: string,
    required: boolean,
    width?: string,
    name?: any,
    Icon?: IconType,
    register?: any,
    errors?: any,
    height?: string,
    disabled?: boolean,
}


const InputField = ({type, placeholder, required, width, name, Icon, register, errors, height, disabled = false }: InputFieldTypes) => {
  return (
    <div className="flex flex-col gap-2 w-full relative">
      {Icon && <Icon className="absolute bottom-[4px] left-2 text-2xl" />}
      <input 
        className={`bg-white placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold py-1 shadow-sm ${Icon ? "px-10" : "px-3"} ${disabled ? "text-black cursor-not-allowed" : ""} duration-100 ease-linear focus:outline-1 focus:outline-[#1A67B3] focus-within:text-[#003566] placeholder:focus:text-[#003566] rounded-sm border-[1px] border-[#D9D9D9]`}
        type={type} 
        placeholder={placeholder} 
        required={required} 
        style={{ width: width, height: height }} 
        {...register && register(name)} 
        disabled={disabled}
      />
      {errors && errors[name] && (
        <p className="text-error text-sm">{errors[name].message}</p>
      )}
    </div>
  );
}

export default InputField;
