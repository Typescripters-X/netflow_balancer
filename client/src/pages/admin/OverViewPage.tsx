import Clients from "@/components/admin/overview/clientsTable/Clients";
import TotalNetUsage from "@/components/admin/overview/TotalNetUsage";
import TrackControl from "@/components/admin/overview/TrackControl";

const OverViewPage = () => {  
  return (
    <div className="flex flex-col gap-10">
      <TotalNetUsage />
      <TrackControl />
      <Clients />
    </div>
  )
}

export default OverViewPage