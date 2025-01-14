import { useEffect } from "react";
import useSWR from "swr";
import clienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

type useAuthProps={
    middleware?:string,
    url?:string
}

const useAuth =({middleware,url}:useAuthProps)=>{//con esto puedo redireccionar al usuario a donde quiero que vaya, en los casos de / es porque quiero que se diriga a la pagina principal

    const token =localStorage.getItem('AUTH_TOKEN')
    const navigate=useNavigate()

    const {data:user, error, mutate}=useSWR('/api/user', ()=>
        clienteAxios('/api/user',{
            headers:{
                Authorization:`Bearer ${token}` 
            }
        })
        .then(res=>res.data)
        .catch(error=>{
            throw Error(error.response.data.errors)
        })
    
    )

    const verificarConfiguracion=async()=>{
        const token = localStorage.getItem('AUTH_TOKEN');
        const {data}= await clienteAxios.get('/api/configuracion',{
            headers:{
                Authorization:`Bearer ${token}` 
            }
        })
        
        return data.configuracion;
    }


    const login=async(datos:{}, setErrores:(errores: string[]) => void)=>{
        try {
            const {data} =await clienteAxios.post('/api/login', datos)
            localStorage.setItem('AUTH_TOKEN',data.token)
            setErrores([])
            mutate()
            const configuracionUsuario =await verificarConfiguracion();

            if(!configuracionUsuario){
                navigate('/configuracion')
            }else{
                navigate(url||'/')
            }

          } catch (error:any) {
            
            setErrores(Object.values(error.response.data.errors))
            
          }
    }

    const registro =async(datos:{}, setErrores:(errores: string[]) => void)=>{
        try {
            const {data} =await clienteAxios.post('/api/registro', datos)
            localStorage.setItem('AUTH_TOKEN',data.token)
            setErrores([])
            await mutate()
            const configuracionUsuario =await verificarConfiguracion();

            if(!configuracionUsuario){
                navigate('/configuracion')
            }else{
                navigate(url||'/')
            }
            
          } catch (error:any) {
         
            setErrores(Object.values(error.response.data.errors))
            
          }
    }
    
    const logout =async()=>{
        try {
            await clienteAxios.post('/api/logout', null, {
                headers:{
                    Authorization:`Bearer ${token}` 
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error:any) {
            throw Error(error.response.data.errors)
        }
    }



    useEffect (()=>{
        if(middleware==='guest' && url && user){
            
            navigate(url)
        }

        if(middleware==='auth' && error){
            navigate('/auth/login')
        }

    },[user,error])

   

    return{
        login,
        registro,
        logout,
        user,
        error
    }
}

export default useAuth