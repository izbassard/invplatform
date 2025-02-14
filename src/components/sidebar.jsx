import React from "react";
import { Home, Grid, Settings, Shield, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Sidebar = () => {
  const navigate = useNavigate(); // Get the navigate function

  const handleLogout = () => {
    navigate("/"); // Navigate to the main page
  };

  return (
    <div className="w-64 bg-black text-white h-screen flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex flex-col gap-4 p-4">
        {/* Logo and Heading */}
        <div>
          <h1 className="text-xl font-bold">Aspan Bridge</h1>
          <p className="text-gray-400 text-sm">Connecting Investors and Opportunities</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-3 text-gray-400 hover:text-white">
            <Home className="w-5 h-5" />
            <span>Регистрация</span>
          </button>
          <button className="flex items-center gap-3 bg-gray-700 text-white p-2 rounded-lg">
            <Grid className="w-5 h-5" />
            <span>Каталог</span>
            <span className="ml-auto text-teal-400">|</span>
          </button>
          <button className="flex items-center gap-3 text-gray-400 hover:text-white">
            <Settings className="w-5 h-5" />
            <span>Настройки</span>
          </button>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col gap-4 p-4">
        <button className="flex items-center gap-3 text-gray-400 hover:text-white">
          <Shield className="w-5 h-5" />
          <span>Поддержка</span>
        </button>
        <button
          className="flex items-center gap-3 text-red-500 hover:text-red-600"
          onClick={handleLogout} // Add onClick handler
        >
          <LogOut className="w-5 h-5" />
          <span>Выйти</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;