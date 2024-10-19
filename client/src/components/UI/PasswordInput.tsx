import { useState } from "react";
import { IconType } from "react-icons";
import assets from "@/assets";

type PasswordInputTypes = {
    placeholder?: string,
    required: boolean,
    width?: string,
    instructions?: string,
    name?: any,
    Icon?: IconType,
    register?: any,
    errors?: any,
}

const PasswordInput = ({placeholder, Icon, required, width, instructions, name, register, errors }: PasswordInputTypes) => {
    const [isPwdVisible, setIsPwdVisible] = useState(false);


    const TogglePwd = () => {
        setIsPwdVisible(!isPwdVisible);
    }

    return (
        <div className={`flex flex-col gap-13 relative w-full`} style={{width: width}}>
            {Icon && <Icon className="absolute bottom-[4px] left-2 text-2xl"/>}
            <input 
                className={`bg-white placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold py-1  shadow-sm ${Icon ? "px-10" : "px-3"} duration-100 ease-linear focus:outline-1 focus:outline-[#1A67B3] focus-within:text-[#003566] placeholder:focus:text-[#003566] rounded-sm border-[1px] border-[#D9D9D9]`} 
                type={isPwdVisible ? "text" : "password" }
                placeholder={placeholder} 
                required={required}
                {...register(name)}
            />
            {errors && errors[name] && (
                <p className="text-error text-sm mt-3">{errors[name]?.message}</p>
            )}

            <button onClick={TogglePwd} type="button" className={`absolute ${errors[name] ? "top-[10%]" : "top-[20%]"} right-[5%] text-xl z-10 bg-transparent border-none cursor-pointer`}>
                {isPwdVisible ? <assets.closePwdIcon /> : <assets.viewPwdIcon />}
            </button>

            {instructions && <p className={`text-[#ADB5BD] w-[80%] ${errors ? "hidden" : "block"}`}>{instructions}</p>}
        </div>
    );
}

export default PasswordInput;
