import { useEffect, useState } from "react";
import { Frecuencia, Moneda } from "../types"
import clienteAxios from "../config/axios";

import useSWR from "swr";


const useConfiguracion=()=>{

        const [frecuencias, setFrecuencias]=useState<Frecuencia[]>([])
        const [monedas, setMonedas]=useState<Moneda[]>([])
        const token = localStorage.getItem("AUTH_TOKEN");

      //  const {data: configuracion, error, mutate}=useSWR("/api/configuracion", ()=>obtenerConfiguracion)

        const obtenerConfiguracion=async()=>{
            try {
                const { data } = await clienteAxios.get("/api/configuracion", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                return data.configuracion;
            } catch (error) {
                throw new Error("Error al obtener la configuración");
            }
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


 /*       const guardarConfiguracion=async()=>{
            try {
                const {data}=await clienteAxios.get()
            } catch (error){
                
            }
        }*/

        useEffect(()=>{
                obtenerFrecuencias()
                obtenerMonedas()
            },[])

    return{
        frecuencias,
        monedas
    }
}

export default useConfiguracion