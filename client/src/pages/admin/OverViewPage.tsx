import BandwithChart from "@/components/admin/analytics/BandwithChart";
import Clients from "@/components/admin/overview/clientsTable/Clients";
import TrackControl from "@/components/admin/overview/TrackControl";

const OverViewPage = () => {
  return (
    <div className="flex  h-[90vh] flex-col gap-10 overflow-y-auto">
      <div className=" flex  flex-row ">
        <div className="w-1/2  ">
          <BandwithChart />
        </div>
        <TrackControl />
      </div>
      <Clients />
    </div>
  );
};

export default OverViewPage;
