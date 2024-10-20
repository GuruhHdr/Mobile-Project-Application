import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; 

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

const Card = ({ title, description, imageUrl, isDarkMode, onClick }) => {
  return (
    <div
      onClick={onClick} // Handle click event
      className={`p-6 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"} transition-all duration-500 ease-in-out`}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
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

  // Fungsi ketika Card diklik
  const handleCardClick = (title) => {
    alert(`Anda mengklik ${title}`);
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card
              title="Produk 1"
              description="Deskripsi produk 1 yang menarik."
              imageUrl="https://via.placeholder.com/300"
              isDarkMode={isDarkMode}
              onClick={() => handleCardClick("Produk 1")}
            />
            <Card
              title="Produk 2"
              description="Deskripsi produk 2 yang menarik."
              imageUrl="https://via.placeholder.com/300"
              isDarkMode={isDarkMode}
              onClick={() => handleCardClick("Produk 2")}
            />
            <Card
              title="Produk 3"
              description="Deskripsi produk 3 yang menarik."
              imageUrl="https://via.placeholder.com/300"
              isDarkMode={isDarkMode}
              onClick={() => handleCardClick("Produk 3")}
            />
            <Card
              title="Produk 4"
              description="Deskripsi produk 4 yang menarik."
              imageUrl="https://via.placeholder.com/300"
              isDarkMode={isDarkMode}
              onClick={() => handleCardClick("Produk 4")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;