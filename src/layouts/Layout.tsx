import { Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import SidebarComp from "../components/SidebarComp"



const Layout = () => {

  const {user, error}=useAuth({middleware:'auth'})

  console.log(user)
  console.log(error)


  
  return (
    <div className="flex h-screen dark">
      
      <SidebarComp/>
      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet/>
        </main>
      </div>
  )
}

export default Layout




