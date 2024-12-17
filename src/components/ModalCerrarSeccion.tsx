import useControlGasto from "../hooks/useControlGasto"
import useAuth from "../hooks/useAuth"


const ModalCerrarSeccion = () => {

  const {handleClickModal}=useControlGasto()
  const {logout}=useAuth({middleware:'auth'})
  return (
    <section>
    <div className="p-8 text-center sm:p-12">
      <p className="text-lg font-semibold uppercase tracking-widest text-purple-600" >
        Cerrar Sesión
      </p>
  
      <h2 className="mt-6 text-3xl font-bold" >¿Estás seguro que deseas cerrar sesión? </h2>
  
    <div className="flex gap-4 mt-5">
        <a
          className="mt-8 inline-block w-full rounded-full bg-purple-600 py-4 text-lg font-bold text-white shadow-xl"
          href="#"
          type="button"
          onClick={()=>{logout(); handleClickModal()} }
        >
          Aceptar
        </a>
        <a
          className="mt-8 inline-block w-full rounded-full bg-red-600 py-4 text-lg font-bold text-white shadow-xl"
          href="#"
          type="button"
          onClick={handleClickModal}
        >
          Cancelar
        </a>
      </div>
    </div>
  </section>
  )
}

export default ModalCerrarSeccion
