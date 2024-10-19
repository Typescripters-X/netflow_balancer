import BandwithChart from "@/components/admin/analytics/BandwithChart";
import { ClientsBarChart } from "@/components/admin/analytics/ClientsBarChart";
import { SubscriptionPieChart } from "@/components/admin/analytics/SubscriptionPieChart";

const AnalyticsPage = () => {
  return (
    <div className=" px-5 py-4 h-[90vh]  flex flex-col justify-between items-start">
      <div className="  w-full ">
        <SubscriptionPieChart />

      </div>
      <div className=" flex flex-row items-center gap-4  w-full ">
        <div className="w-1/2  ">
        <BandwithChart />

        </div>
        <div className="w-1/2">
        <ClientsBarChart />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
