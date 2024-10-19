import { useMutation } from "@tanstack/react-query";
import { endpoints } from "@/utils/endpoints";
import { loginSchemaType } from "@/types/loginSchema";
import { editClientDetailsSchemaType } from "@/types/editClientSchema";
import AuthenticatedCalls from "@/api/authenticatedapi";


type useEditClientProps = {
    id: string,
}

const useEditClient = ({id} : useEditClientProps) => {
    const login = async (data: editClientDetailsSchemaType) => {
        const response = await AuthenticatedCalls.patchRequest({
            url: `${endpoints.EDIT_CLIENT_DETAILS_PATH}/${id}`,
            data: data,
      });
      
        return response?.data;
    }


  return useMutation({
    mutationFn: (data: loginSchemaType) => login(data),
  })
}

export default useEditClient