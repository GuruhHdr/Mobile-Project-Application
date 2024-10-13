import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Import ikon Sun dan Moon

const Button = (props) => {
  const { children = "default", variant = "bg-black", onClick, disabled = false } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-75 cursor-pointer"}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// Toggle Switch Component with Animation
const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div
      className={`flex items-center cursor-pointer p-1 w-16 h-8 rounded-full ${
        isDarkMode ? "bg-gray-600" : "bg-yellow-400"
      } transition-colors duration-500`}
      onClick={toggleDarkMode}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        } transition-transform duration-500 ease-in-out flex justify-center items-center`}
      >
        {isDarkMode ? <FaMoon className="text-gray-800" /> : <FaSun className="text-yellow-500" />}
      </div>
    </div>
  );
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fungsi untuk toggle mode gelap/terang
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Menentukan gaya konten berdasarkan mode
  const contentStyle = isDarkMode
    ? {
        backgroundColor: "#333",
        color: "#fff",
        borderColor: "#555",
        transition: "all 0.5s ease",
      }
    : {
        backgroundColor: "#fff",
        color: "#333",
        borderColor: "#ddd",
        transition: "all 0.5s ease",
      };

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen transition-colors duration-500`}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md bg-blue-600">
        <div className="text-white text-lg font-bold">My Website</div>
        <nav className="flex gap-4 items-center">
          <Button variant="bg-transparent" onClick={() => console.log("Home button clicked!")}>
            Home
          </Button>
          <Button variant="bg-transparent" onClick={() => console.log("Contact button clicked!")}>
            Contact
          </Button>
          {/* Toggle Switch */}
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)]">
        <div className="flex flex-col gap-4 items-center p-8" style={contentStyle}>
          <h1 className="text-4xl font-bold">
            {isDarkMode ? "Selamat Datang di Mode Gelap!" : "Selamat Datang di Mode Terang!"}
          </h1>
          <p className="text-lg">
            {isDarkMode
              ? "Anda sedang menggunakan mode gelap. Ini lebih nyaman untuk mata di malam hari."
              : "Anda sedang menggunakan mode terang. Cocok untuk lingkungan dengan banyak cahaya."}
          </p>
          <div className="flex gap-3">
            <Button variant={isDarkMode ? "bg-purple-600" : "bg-red-700"} onClick={() => console.log("Login button clicked!")}>
              {isDarkMode ? "Masuk (Gelap)" : "Masuk (Terang)"}
            </Button>
            <Button variant={isDarkMode ? "bg-green-600" : "bg-slate-700"} onClick={() => console.log("Guruh button clicked!")}>
              {isDarkMode ? "Guruh (Gelap)" : "Guruh (Terang)"}
            </Button>
            <Button variant={isDarkMode ? "bg-orange-600" : "bg-black"} onClick={() => console.log("Utama button clicked!")}>
              {isDarkMode ? "Utama (Gelap)" : "Utama (Terang)"}
            </Button>
            <Button disabled>Disabled</Button> {/* Tombol ini dinonaktifkan */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
