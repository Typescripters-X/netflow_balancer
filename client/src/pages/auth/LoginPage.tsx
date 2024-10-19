import InputField from "@/components/UI/InputField"
import assets from "../../assets"
import PasswordInput from "@/components/UI/PasswordInput"
import { Button } from "@/components/UI/button"
import Logo from "@/components/UI/Logo"
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginScehma, loginSchemaType } from "@/types/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import useLogin from "@/hooks/login/useLogin"


const LoginPage = () => {
  const { register, formState: { errors }, handleSubmit } = useForm<loginSchemaType>({
    resolver: zodResolver(LoginScehma)
  });
 

  const loginMutation = useLogin();

  const onSubmit: SubmitHandler<loginSchemaType> = (data) => {
    console.log(data, "data");
    loginMutation.mutate(data)
  }

  return (
    <div 
    className="w-screen h-screen overflow-hidden flex flex-col justify-between p-5"
       style={{ backgroundImage: `url(${assets.loginBg})` }}
    >
      <Logo />
      <div className="flex flex-col gap-6 items-center py-7 border-[1px] w-[90%] mx-auto rounded-[12px] bg-gray-50 xs:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%]">
        <div className="w-[83px] h-[79px] px-2 border-[1px] rounded-[12px] flex items-center justify-center">
          <img src={assets.logoIcon} className="w-[61.13px]" alt="logo icon" />
        </div>
        <h4 className="traffic-light font-semibold text-xl sm:text-2xl">Access Your Dashboard</h4>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-[90%]">
          <div className="flex flex-col gap-6">
            <InputField register={register} name={"mail"} Icon={assets.emailIcon} placeholder="email@example.com" type="email" required={true} />
            <PasswordInput register={register} name={"password"} errors={errors} Icon={assets.passwordIcon} placeholder="*******"  required={true} />
          </div>
          <Button type="submit" className="bg-[#003566] border-2 border-[#1A67B3] text-[#D9D9D9] font-semibold text-base hover:bg-[#1A67B3] hover:border-[#003566]">Login and Manage Bandwidth</Button>
        </form>
      </div>
      <div></div>
    </div>
  )
}

export default LoginPage