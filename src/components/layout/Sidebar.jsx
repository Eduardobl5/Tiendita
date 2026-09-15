import {NavLink} from 'react-router-dom' 



function Sidebar() {

    const links = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Clientes", path: "/clientes" },
        { name: "Productos", path: "/productos" },
        { name: "Reportes", path: "/reportes" },
        { name: "Configuracion", path: "/configuracion" },
    ];
  return (
    <div className="flex flex-col gap-2 p-2 bg-gray-200 rounded-lg shadow-md w-48 min-h-full">   
        {links.map((link) => (
            <NavLink key={link.path} to={link.path} 
                className={({ isActive }) =>
                `block p-2 rounded-md ${isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'}`
            }>
                {link.name}
            </NavLink>
         ))}


    </div>

    

  )
}

export default Sidebar

