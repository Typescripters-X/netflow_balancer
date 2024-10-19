type EndpointTypes = {
    LOGIN_PATH: string,
    GET_CLIENTS_PATH: string,
    GET_CLIENT_DETAILS_PATH: string,
    EDIT_CLIENT_DETAILS_PATH: string,
    GET_BANDWIDTH_CHART_PATH: string,
    GET_PIE_CHART_PATH : string,
    GET_CLIENTS_COUNT_PATH: string

};



export const endpoints: EndpointTypes = {
    LOGIN_PATH: "api/v1/login", 
    GET_CLIENTS_PATH: "api/v1/clients",
    GET_CLIENT_DETAILS_PATH: "api/v1/clients",
    EDIT_CLIENT_DETAILS_PATH: "api/v1/clients",
    GET_BANDWIDTH_CHART_PATH: "/api/v1/history",
    GET_PIE_CHART_PATH:"/api/v1/history/subscriptions",
    GET_CLIENTS_COUNT_PATH: "/api/v1/clients/count"

}