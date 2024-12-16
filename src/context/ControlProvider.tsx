import { createContext, ReactNode, useState } from "react"



type ControlContextType={
    errores: string[],
    setErrores:(errores:string[])=>void,
    modal:boolean,
    handleClickModal:()=>void
}

type ControlProviderProps={
    children:ReactNode
}

const ControlContext=createContext<ControlContextType>(null!)

const ControlProvider=({children}:ControlProviderProps)=>{

    const [errores, setErrores]=useState<string[]>([])
    const [modal, setModal]=useState(false)


    const handleClickModal=()=>{
        setModal(!modal)
    }
   

    return (
        <ControlContext.Provider
            value={{
                errores,
                setErrores,
                modal,
                handleClickModal
            }}>
                {children}
        </ControlContext.Provider>
    )

}

export {
    ControlProvider
}

export default ControlContext;
