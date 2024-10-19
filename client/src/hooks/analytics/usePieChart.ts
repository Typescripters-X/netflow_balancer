import { useQuery } from "@tanstack/react-query";
import { endpoints } from "../../utils/endpoints";
import AuthenticatedCalls from "../../api/authenticatedapi";

const usePieChart =() => {
    const getPieChart = async () => {
        const response = await AuthenticatedCalls.getRequest({
            url: `${endpoints.GET_PIE_CHART_PATH}`,
        });
        return response.data;
    };

    return useQuery({
        queryKey: ['pieChart'],
        queryFn: getPieChart,
        staleTime: 60 * 1000, // 1 minute
        gcTime: 1000 * 60 * 5, // 5 minutes
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

export default usePieChart;