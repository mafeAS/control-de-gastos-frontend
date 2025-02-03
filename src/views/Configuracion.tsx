import { FloatingLabel } from "flowbite-react";
import { SparklesCore } from "../ui/sparkles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { createRef,  useState } from "react";
import useControlGasto from "../hooks/useControlGasto";
import useConfiguracion from "../hooks/useConfiguracion";


const Configuracion = () => {


    const sueldoRef = createRef<HTMLInputElement>();
    const bonificacionRef = createRef<HTMLInputElement>();
   
  const [age, setAge] = useState("");
  const [mon, setMon] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;

    if (name === "frecuencia") {
      setAge(value);
     
      
    } else if (name === "moneda") {
      setMon(value);
    }
  };
  

  const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      const datos ={
        sueldo:sueldoRef.current?.value,
        bonificacion:bonificacionRef.current?.value ?? null,
        moneda_id:mon,
        frecuencia_id:age 
      }

      console.log(datos)
  }



  const { isChecked, handleCheckboxChange } =useControlGasto();
  const {frecuencias,monedas}=useConfiguracion()
  

  return (
    <section className=" overflow-hidden text-transform: uppercase">
      <div className="h-screen flex overflow-hidden">
        <div className="h-screen w-1/2 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          <div className="text-center max-w-[40rem]">
            <h1 className="md:text-6xl text-3xl font-bold text-center text-white relative z-20 bg-gradient-to-b from-gray-200 via-white to-gray-400 text-transparent bg-clip-text">
              CONTROL DE GASTOS
            </h1>
            <p className="text-center text-white relative z-20 whitespace-pre-line">
              Antes de continuar, complete el formulario indicando cuánto gana y
              con qué frecuencia recibe su ingreso para gestionar mejor sus
              gastos.
            </p>
          </div>
          <br />
          <div className="w-[40rem] h-40 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />

            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
        <div className="flex w-1/2 items-center justify-center min-h-screen px-4 py-12 overflow-hidden sm:px-6 lg:px-20 xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-600 text-transform: uppercase">
              llene el formulario
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6" noValidate onSubmit={handleSubmit}>
                  <div>
                    
                    <FloatingLabel
                      variant="standard"
                      label="Ingresa tu sueldo base"
                      type="number"
                      min={1}
                      className="custom-floating-label custom-input"
                      ref={sueldoRef}
                    />
                  </div>

                  <div className="space-y-1">
                    <FormControl variant="standard" className="w-full">
                      <InputLabel id="demo-simple-select-standard-label">
                        Frecuencia de pago
                      </InputLabel>
                      <Select
                        name="frecuencia"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Frecuencia"
                       
                      >
                        {frecuencias.map((frecuencia) => (
                          <MenuItem key={frecuencia.id} value={frecuencia.id}>
                            {frecuencia.nombre}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <div className="space-y-1">
                    <FormControl variant="standard" className="w-full">
                      <InputLabel id="demo-simple-select-standard-label">
                        Moneda de pago
                      </InputLabel>
                      <Select
                        name="moneda"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select-standard"
                        value={mon}
                        onChange={handleChange}
                        label="Moneda"
                      >
                        {monedas.map((moneda) => (
                          <MenuItem key={moneda.id} value={moneda.id}>
                            {moneda.nombre} ({moneda.codigo}){" "}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="bonificacion"
                        name="bonificacion"
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        placeholder="Your password"
                        className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                      />
                      <label className="block ml-2 text-sm text-gray-600">
                        {" "}
                        ¿Tiene alguna bonificación?{" "}
                      </label>
                    </div>
                  </div>

                  {isChecked && (
                    <div>
                      <FloatingLabel
                        variant="standard"
                        label="Ingresa su bonificación"
                        type="number"
                        ref={bonificacionRef}
                        min={1}
                      />
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Configuracion;
