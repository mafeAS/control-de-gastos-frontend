import { Outlet } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import SidebarComp from "../components/SidebarComp"
import Modal from "react-modal"
import useControlGasto from "../hooks/useControlGasto";
import ModalCerrarSeccion from "../components/ModalCerrarSeccion";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


const Layout = () => {

  const {user, error}=useAuth({middleware:'auth'})
  const {modal}=useControlGasto()

  console.log(user)
  console.log(error)


  
  return (
    <>
    <div className="flex h-screen dark">
      
      <SidebarComp/>
      <main className="flex-1 h-screen overflow-y-scroll bg-gray-100 p-3">
          <Outlet/>
        </main>
      </div>


    <Modal isOpen={modal} style={customStyles}>
      <ModalCerrarSeccion/>
    </Modal>
    </>
  )
}

export default Layout




