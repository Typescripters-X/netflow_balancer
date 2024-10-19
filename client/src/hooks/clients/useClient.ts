import { useQuery } from "@tanstack/react-query";
import { endpoints } from "../../utils/endpoints";
import AuthenticatedCalls from "../../api/authenticatedapi";


type useClientsProps = {
    client_id: string,
}

const useClient = ({ client_id }: useClientsProps) => {

  const getClientDetails = async () => {
    const response = await AuthenticatedCalls.getRequest({
      url: `${endpoints.GET_CLIENT_DETAILS_PATH}/${client_id}`,
    });
    return response.data;
  };

  return useQuery({
    queryKey: ['clients', client_id],
    queryFn: getClientDetails,
    staleTime: 60 * 1000, // 1 minute
    gcTime: 1000 * 60 * 5, // 5 minutes
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useClient;
