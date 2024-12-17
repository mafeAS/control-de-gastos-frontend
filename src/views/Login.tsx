import { createRef} from "react"
import { Link } from "react-router-dom"
import useControl from "../hooks/useControlGasto"
import useAuth from "../hooks/useAuth";



const Login = () => {

 
  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();
  

 // const [errores, setErrores]=useState([])
  const{setErrores}=useControl()
  const {login}=useAuth({
    middleware:'guest',
    url:'/'
  })


  const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    
    const datos={
      email:emailRef.current?.value,
      password: passwordRef.current?.value,
    }

    login(datos,setErrores)

   
  }

  const borrarErrores=()=>{
   
    setErrores([])
  }


  return (
    <>
    <h1 className="text-2xl md:text-4xl lg:text-3xl text-gray-300 font-semibold inter-var text-center " style={{
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
}}>INICIAR SESIÓN</h1>
     

      <div className="mt-4 w-full max-w-lg">
          <form 
              onSubmit={handleSubmit}
              noValidate>
                 
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

             

              <input 
                  type="submit"
                  value="Iniciar sesión"
                  className="bg-indigo-500 hover:bg-indigo-700 border-indigo-600 text-white rounded-lg w-full mt-5 p-3 uppercase font-semibold cursor-pointer shadow-xl"/>
          </form>
      </div>

      <nav className="mt-5">
        <Link onClick={borrarErrores} to="/auth/registro" className="block text-gray-400 font-semibold" >¿Aún no tienes una cuenta? ¡Crea la tuya!</Link>
      </nav>

      
  </>
  )
}

export default Login
