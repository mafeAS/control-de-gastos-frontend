import { ReactNode } from "react"
import "flowbite/dist/flowbite.css";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react"
type alertaProps={
    children:ReactNode
}

const Alerta = ({children}:alertaProps) => {
  return (

    <Alert color="failure" icon={HiInformationCircle}>
      <span className="font-medium">{children}</span>
    </Alert>
  )
}

export default Alerta
