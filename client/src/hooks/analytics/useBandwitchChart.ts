import { useQuery } from "@tanstack/react-query";
import { endpoints } from "../../utils/endpoints";
import AuthenticatedCalls from "../../api/authenticatedapi";

const useBandwidthChart = (date:string) => {
    const getBandwidthChart = async () => {
        const response = await AuthenticatedCalls.getRequest({
        url: `${endpoints.GET_BANDWIDTH_CHART_PATH}?date=${date}`,
        });
        return response.data;
    };
    
    return useQuery({
        queryKey: ["bandwidthChart",{ date}],
        queryFn: getBandwidthChart,
        staleTime: 60 * 1000, // 1 minute
        gcTime: 1000 * 60 * 5, // 5 minutes
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
    };

export default useBandwidthChart;