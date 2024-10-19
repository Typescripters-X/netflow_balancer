import { IconType } from "react-icons";
import { useNavigate, useLocation } from "react-router-dom";

export type MenuItems = {
  icon: IconType;
  name: string;
  link: string;
};

type SideBarElemelntsProps = {
  elements: any[];
};

const SideBarElemelnts = ({ elements }: SideBarElemelntsProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (link: string) => {
      navigate(link === '.' ? `/dashboard` : `/dashboard/${link}`);
  };

  const isActive = (link: string) => {
      if (link === ".") {
        return pathname === `/dashboard`;
      }
      return pathname.startsWith(`/dashboard/${link}`);
    }
  

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        {elements.map((item, index) => (
          <div key={index} className="">
            <button
              onClick={() => handleNavigation(item.link)}
              disabled={item.commingSoon}
              className={`sideBar-link ${isActive(item.link) ? 'active-sideBar-link' : ''} 
                ${item.commingSoon ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              <item.icon className="text-xl" />
              <h4 className="caption-semibold">{item.name}</h4>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBarElemelnts;
