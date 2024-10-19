import { useQuery } from "@tanstack/react-query";
import { endpoints } from "../../utils/endpoints";
import AuthenticatedCalls from "../../api/authenticatedapi";

const useClientsCount = () => {
    const getClientsCount = async () => {
        const response = await AuthenticatedCalls.getRequest({
        url: `${endpoints.GET_CLIENTS_COUNT_PATH}`,
        });
        return response.data;
    };
    
    return useQuery({
        queryKey: ['clientsCount'],
        queryFn: getClientsCount,
        staleTime: 60 * 1000, // 1 minute
        gcTime: 1000 * 60 * 5, // 5 minutes
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    }


export default useClientsCount;