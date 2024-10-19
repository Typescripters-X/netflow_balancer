import { useMutation } from "@tanstack/react-query";
import UsersCalls from "@/api/userapi";
import { endpoints } from "@/utils/endpoints";
import { loginSchemaType } from "@/types/loginSchema";
import { useAuthStore } from "@/store/login/authStore";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const { store_access_token, store_user } = useAuthStore()
    const navigate = useNavigate();
    const login = async (data: loginSchemaType) => {
        const response = await UsersCalls.postRequest({
            url: endpoints.LOGIN_PATH,
            data: data,
      });
      
        return response?.data;
    }


  return useMutation({
    mutationFn: (data: loginSchemaType) => login(data),
    onSuccess: (data) => {
        // console.log(data);
        store_access_token(data?.token);
        store_user(data?.user);
        setTimeout(() => {
            navigate("/dashboard");
        }, 350)

    } 
  })
}

export default useLogin