import { createRef} from "react"
import { Link } from "react-router-dom"
import useControl from "../hooks/useControlGasto"
import useAuth from "../hooks/useAuth";



const Registro = () => {

  const nameRef = createRef<HTMLInputElement>();
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  const passwordConfirmationRef = createRef<HTMLInputElement>();


  const{setErrores}=useControl()
  const {registro}=useAuth({
    middleware:'guest',
    url:'/'
  })


  const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    const datos={
      name:nameRef.current?.value,
      email:emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation:passwordConfirmationRef.current?.value
    }

    registro(datos, setErrores)

   
  }

  const borrarErrores=()=>{
   
    setErrores([])
  }

  return (
    <>
      <h1 className="text-2xl md:text-4xl lg:text-3xl text-gray-300 font-semibold inter-var text-center " style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>REGISTRO TU CUENTA</h1>
       

        <div className="mt-4 w-full max-w-lg">
            <form 
                noValidate
                onSubmit={handleSubmit}>
                   

                <div className="mb-3">
                    <label className="block text-gray-300 font-semibold"
                    htmlFor="name">Nombre:</label>
                    <input 
                    type="text" 
                    id="name"
                    className="mt-2 w-full p-3 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-xl"
                    name='name'
                    placeholder="Tu Nombre"
                    ref={nameRef}
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-300 font-semibold"
                    htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email"
                    className="mt-2 w-full p-3 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-xl"
                    name='email'
                    placeholder="Tu Email"
                    ref={emailRef}
                    />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-300 font-semibold"
                    htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    id="password"
                    className="mt-2 w-full p-3 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-xl"
                    name='password'
                    placeholder="Tu Password"
                    ref={passwordRef}
                   />
                </div>

                <div className="mb-3">
                    <label className="block text-gray-300 font-semibold"
                    htmlFor="password_confirmation">Repetir Password:</label>
                    <input 
                    type="password" 
                    id="password_confirmation"
                    className="mt-2 w-full p-3 bg-gray-800 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none "
                    name='password_confirmation'
                    placeholder="Repetir Password"
                    ref={passwordConfirmationRef}
                   />
                </div>

                <input 
                    type="submit"
                    value="Crear Cuenta"
                    className="bg-indigo-500 hover:bg-indigo-700 border-indigo-600 text-white rounded-lg w-full mt-5 p-3 uppercase font-bold cursor-pointer shadow-xl"/>
            </form>
        </div>

        <nav className="mt-5">
          <Link onClick={borrarErrores} to="/auth/login" className="block text-gray-400 font-semibold">¿Ya tienes cuenta? Inicia sesión</Link>
        </nav>

        
    </>
  )
}

export default Registro
