import { createContext, ReactNode, useEffect, useState } from "react"
import { Frecuencia, Moneda } from "../types"
import clienteAxios from "../config/axios"



type ControlContextType={
    errores: string[],
    setErrores:(errores:string[])=>void,
    modal:boolean,
    handleClickModal:()=>void,
    frecuencias:Frecuencia[],
    monedas:Moneda[],
    isChecked:boolean
    handleCheckboxChange:()=>void
}

type ControlProviderProps={
    children:ReactNode
}

const ControlContext=createContext<ControlContextType>(null!)

const ControlProvider=({children}:ControlProviderProps)=>{

    const [errores, setErrores]=useState<string[]>([])
    const [modal, setModal]=useState(false)
    const [isChecked, setIsChecked]=useState(false)
    const [frecuencias, setFrecuencias]=useState<Frecuencia[]>([])
    const [monedas, setMonedas]=useState<Moneda[]>([])


    const handleClickModal=()=>{
        setModal(!modal)
    }

    const handleCheckboxChange=()=>{
        setIsChecked(!isChecked)
    }


    const obtenerFrecuencias =async()=>{
        try {
            const {data}= await clienteAxios('api/frecuencia')
            setFrecuencias(data.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerMonedas=async()=>{
        try {
            const {data}=await clienteAxios('api/moneda')
            setMonedas(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        obtenerFrecuencias()
        obtenerMonedas()
    },[])
   

    return (
        <ControlContext.Provider
            value={{
                errores,
                setErrores,
                modal,
                handleClickModal,
                frecuencias,
                monedas,
                isChecked,
                handleCheckboxChange,
            }}>
                {children}
        </ControlContext.Provider>
    )

}

export {
    ControlProvider
}

export default ControlContext;
