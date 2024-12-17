import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import useControlGasto from "../hooks/useControlGasto";

const SidebarComp = () => {

  const {handleClickModal}=useControlGasto()

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <p className="text-3xl md:text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
        Control de Gastos</p>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
          <Sidebar.Item  icon={HiTable}>
              <Link to='/'>Inicio</Link>
            </Sidebar.Item>
            <Sidebar.Item  icon={HiChartPie}>
             <Link to='/estadisticas'>Estadisticas</Link> 
            </Sidebar.Item>
           
            <Sidebar.Item icon={HiInbox}>
             <Link to='/nicolas'>Nicolas</Link> 
            </Sidebar.Item>
            <Sidebar.Item icon={HiUser}>
             <Link to='/usuario'>Usuario</Link> 
            </Sidebar.Item>
            <Sidebar.Item icon={HiShoppingBag}>
              <Link to='/otros'>Otros</Link> 
            </Sidebar.Item>
            <Sidebar.Item href='#' icon={HiArrowSmRight} onClick={handleClickModal}>
              Cerrar Sesión
            </Sidebar.Item>
            
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
  )
}

export default SidebarComp
