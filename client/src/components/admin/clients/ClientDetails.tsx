import { clientSchemaType } from "@/types/clientsSchema";
import assets from "@/assets";
import { useAuthStore } from "@/store/login/authStore";
import { useClientStore } from "@/store/clients/clientStore";
import ClientDetailsChart from "./ClientDetailsChart";
import useClient from "@/hooks/clients/useClient";
import ControleBandwith from "./ControleBandwith";

type ClientDetailsProps = {
    client: clientSchemaType;
};

const ClientDetails = ({ client }: ClientDetailsProps) => {
    const { data: clientDetails } = useClient({
        client_id: client?._id
    })
 console.log(clientDetails, "client");
    const { user } = useAuthStore();
    const { clearClient } = useClientStore()
     const isVisible = !!client?._id;

    return (
        <div
            className={`overlay z-[999] transition-all duration-500 ease-in-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
        >
            <div className={`fixed right-2 top-3 w-[90%] 3xl:w-[14%] 3xl:h-[95.4%] h-[97%] 3xl:top-[7.2%] rounded-[8px] bg-white flex flex-col justify-between z-50 shadow-2xl border-[1px] border-gray-200`}
            >
            <div className="w-full flex justify-between px-2 py-1 border-b-2 3xl:p-5">
            <div className="flex items-center gap-3"> 
                <assets.userIcon className="text-xl" />
                <h2 className="capitalize text-lg font-semibold">{user?.name}</h2>
            </div>
                <div className="">
                    <button onClick={clearClient} className="flex flex-col text-grayText border-[1px] p-1 rounded-md hover:text-secondary hover:border-secondary duration-300 ease-linear">
                    <assets.closeActionBarIcon className="text-[1.5rem]" />
                    </button>
                </div>
            </div>
            <div className="w-full h-[77%] p-5 overflow-y-auto overflow-x-hidden flex flex-col gap-4">
                <ClientDetailsChart client={clientDetails} />
                <ControleBandwith client={clientDetails} />
            </div>
            <div className=""></div>
            </div>
        </div>
    );
};

export default ClientDetails;
