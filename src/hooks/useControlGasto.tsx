import {useContext} from "react";
import ControlContext from "../context/ControlProvider";

const useControlGasto=()=>{
    return useContext(ControlContext)
}

export default useControlGasto