import { useAuthStore } from "@/store/login/authStore";

const AdminHeaders = () => {
  const user = useAuthStore(store => store.user); 

  

  return (
    <>
    <div className="w-full flex sm:flex-col sm:gap-3 md:flex-row md:gap-0 justify-between sm:px-3 md:px-0">
      <h1 className="title2-regular text-[#003566]">Good Morning <span className="font-semibold capitalize">{user?.name}</span></h1>
    </div>
    </>
  )
}

export default AdminHeaders