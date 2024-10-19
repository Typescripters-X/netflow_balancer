import ClientDetails from "@/components/admin/clients/ClientDetails";
import { columns } from "@/components/admin/overview/clientsTable/Column"
import { DataTable } from "@/components/admin/overview/clientsTable/DataTable"
import useClients from "@/hooks/clients/useClients"
import { useClientStore } from "@/store/clients/clientStore";

const ClientsPage = () => {
  const { data: clients } = useClients();
  const { client } = useClientStore()
  // console.log(clients, "clients");

return (
  <div className="container mx-auto py-10">
    {clients && clients?.length > 0 && (
      <DataTable columns={columns} data={clients} />
    )}
    {client?._id !== null && <ClientDetails client={client} />}
  </div>
)
}

export default ClientsPage