import { Outlet } from "react-router-dom"
import AdminHeaders from "./AdminHeaders"

const WorkspaceSharedLayout = () => {
  return (
    <div className="w-screen overflow-x-hidden overflow-y-auto p-5">
          <div className="w-full  md:w-[80%] sm:px-3 md:px-10 2xl:px-20 py-5 xl:w-[86%] flex flex-col min-h-screen gap-4">
          <AdminHeaders />
          <Outlet />
          </div>
    </div>
  )
}

export default WorkspaceSharedLayout