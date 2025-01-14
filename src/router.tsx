import { createBrowserRouter} from "react-router-dom";
import Layout from "./layouts/Layout";
import Inicio from "./views/Inicio";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./views/Login";
import Registro from "./views/Registro";
import Estadisticas from "./views/Estadisticas";
import Nicolas from "./views/Nicolas";
import Usuario from "./views/Usuario";
import Otros from "./views/Otros";
import Configuracion from "./views/Configuracion";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Inicio/>
            },
            {
                path:'estadisticas',
                element:<Estadisticas/>
            },
            {
                path:'nicolas',
                element:<Nicolas/>
            },
            {
                path:'Usuario',
                element:<Usuario/>
            },
            {
                path:'otros',
                element:<Otros/>
            }

        ]

    },

    {
        path:'/configuracion',
        element:<Configuracion/>
    },

    {
        path:'/auth',
        element:<AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>
            },
            {
                path:'/auth/registro',
                element:<Registro/>
            }
        ]
    }


])

export default router