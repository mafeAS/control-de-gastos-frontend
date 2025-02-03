import { createContext, ReactNode, useState } from "react"





type ControlContextType={
    errores: string[],
    setErrores:(errores:string[])=>void,
    modal:boolean,
    handleClickModal:()=>void,
    isChecked:boolean,
    handleCheckboxChange:()=>void,
    crearConfiguracion:()=>void
}

type ControlProviderProps={
    children:ReactNode
}

const ControlContext=createContext<ControlContextType>(null!)

const ControlProvider=({children}:ControlProviderProps)=>{

    const [errores, setErrores]=useState<string[]>([])
    const [modal, setModal]=useState(false)
    const [isChecked, setIsChecked]=useState(false)


    const handleClickModal=()=>{
        setModal(!modal)
    }

    const handleCheckboxChange=()=>{
        setIsChecked(!isChecked)
    }



    const crearConfiguracion=async()=>{

    }



   /* useEffect(()=>{
        if(!user && error){

        }
    },[user,error])*/
   

    return (
        <ControlContext.Provider
            value={{
                errores,
                setErrores,
                modal,
                handleClickModal,
                isChecked,
                handleCheckboxChange,
                crearConfiguracion
            }}>
                {children}
        </ControlContext.Provider>
    )

}

export {
    ControlProvider
}

export default ControlContext;
