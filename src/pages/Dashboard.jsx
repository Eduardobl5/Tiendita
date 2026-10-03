function Dashboard() {
  return (
    <div className="flex flex-col p-8 bg-blue-200 ">
      <h1 className="text-2xl font-bold text-center mb-4">Dashboard</h1>
      <p className="text-lg text-center mb-4">Resumen general de la tienda</p>

      <div className="flex flex-wrap gap-4 ">

        <div className= "flex-1 p-4  bg-white rounded-lg shadow-md hover:-translate-y-1 hover:bg-gray-300 cursor-pointer transition ">

          <p className="text-xl mb-4">Clientes Registrados:</p>
          <p className="text-2xl font-bold">125</p>

        </div>
        
        <div className= "flex-1 p-4  bg-white rounded-lg shadow-md hover:-translate-y-1 hover:bg-gray-300 cursor-pointer transition">
          <p className="text-xl mb-4">Productos:</p>
          <p className="text-2xl font-bold">48</p>
        </div>

        <div className= "flex-1 p-4  bg-white rounded-lg shadow-md hover:-translate-y-1 hover:bg-gray-300 cursor-pointer transition">
          <p className="text-xl mb-4">Ventas:</p>
          <p className="text-2xl font-bold">$12,500</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;