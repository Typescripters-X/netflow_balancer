import useClients from "@/hooks/clients/useClients"
import { DataTable } from "./DataTable";
import { columns } from "./Column";


const Clients = () => {
    const { data: clients } = useClients();
    // console.log(clients, "clients");

  return (
    <div className="container mx-auto py-10">
      {clients && clients?.length > 0 && (
        <DataTable columns={columns} data={clients} />
      )}
    </div>
  )
}

export default Clients