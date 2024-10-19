import assets from "@/assets";
import Logo from "@/components/UI/Logo";
import SideBarElemelnts from "./SideBarElemelnts";
import { useAuthStore } from "@/store/login/authStore";


const DashboardSideBar = () => {
    const { user, clearSession } = useAuthStore();
  const menuItems = [
    {
      name: "Home",
      icon: assets.homeIcon,
      link: ".",
    },
    {
      name: "Clients",
      icon: assets.clientsIcon,
      link: "clients",
    },
    {
      name: "Analytics",
      icon: assets.analyticsIcon,
      link: "analytics",
    },
  ];

  return (
    <>
    <div className=" fixed md:static md:h-screen hidden    md:w-[25%] lg:w-[20%] 2xl:w-[17%] 3xl:w-[14%] h-[99%]  top-[0.5%]  rounded-[8px] md:flex flex-col justify-between p-5 z-40 shadow-2xl border-[1px] border-gray-200 left-[5px]  ">
        <div className="flex flex-col gap-12">
            <Logo/>
            <SideBarElemelnts elements={menuItems} />
        </div>
        <div className="flex relative gap-2 border-[1px] border-[#D9D9D952] p-2 rounded-[12px]">
            <div className="size-10 rounded-full flex items-center justify-center bg-[#003566] text-white uppercase text-2xl">{user.name?.slice(0, 1)}</div>
            <div className="flex flex-col gap-1">
                <h4 className="traffic-light text-[#003566] font-medium text-sm">{user.mail}</h4>
                {user.isAdmin && <h2 className="bg-[#f6e098] text-[#FFC300] text-center p-1 rounded-[32432px]
                ">admin</h2>}
            </div>
        <button onClick={clearSession} className="absolute right-2"><assets.logOutIcon className="text-gray-300 text-2xl" /></button>
        </div>
    </div>
    </>
  );
};

export default DashboardSideBar;
