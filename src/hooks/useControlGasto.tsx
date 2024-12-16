import {useContext} from "react";
import ControlContext from "../context/ControlProvider";

const useControl=()=>{
    return useContext(ControlContext)
}

export default useControl