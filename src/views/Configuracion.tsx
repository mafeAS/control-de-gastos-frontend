import { FloatingLabel } from "flowbite-react";


const Configuracion = () => {
  return (
    <section className=" overflow-hidden">
    <div className="h-screen flex min- overflow-hidden">
      <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
        <img className="absolute inset-0 object-cover w-full h-full bg-black" src="/images/placeholders/original/1000x1000.webp"
          alt="" />
      </div>
      <div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-xl mx-auto lg:w-96">
          
  
          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600"> Sueldo Base </label>
                  <div className="mt-1">
                    <input id="email" name="email" type="number" required placeholder="Ingresa tu sueldo base"
                      className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                  </div>
                </div>
  
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600"> Frecuencia De Pago </label>
                  <div className="mt-1">
                    <select id="password" name="password"  required
                      className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-600"> Moneda De Pago </label>
                  <div className="mt-1">
                    <select id="password" name="password"  required
                      className="block w-full px-5 py-3 text-base text-gray-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password"
                      className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500" />
                    <label className="block ml-2 text-sm text-gray-600"> Remember me </label>
                  </div>
  
                 
                </div>
  
                <div>
                  <button type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Guardar</button>
                </div>
              </form>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Configuracion
