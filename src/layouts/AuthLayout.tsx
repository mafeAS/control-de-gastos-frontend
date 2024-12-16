import { Outlet } from "react-router-dom"
import { Boxes } from "../ui/background-boxes"
import useControl from "../hooks/useControlGasto"
import Alerta from "../components/Alerta"


const AuthLayout = () => {

  const {errores}=useControl()

  console.log(errores)

  return (
    <div className="h-screen w-full relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
     
        <Boxes/>

        {errores.length > 0 && (
          <div className="absolute top-4 right-4 z-30 space-y-2">
            {errores.map((mensaje, i) => (
              <Alerta key={i}>{mensaje}</Alerta>
            ))}
          </div>
        )}
        
        
      <div className="relative z-20 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl flex flex-col items-center">
        <Outlet />
      </div>
      
    </div>
  )
}

export default AuthLayout
