import React, { useState } from "react";
import Register from "./register";
import Login from "./login";

const Navbar = () => {
  const [view, setView] = useState("register"); // Estado para cambiar entre formularios

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <button
                    onClick={() => setView("register")}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      view === "register"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Registro
                  </button>
                  <button
                    onClick={() => setView("login")}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      view === "login"
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="p-6">
        {view === "register" ? <Register /> : <Login />}
      </div>
    </div>
  );
};

export default Navbar;
