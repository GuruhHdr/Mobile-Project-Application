import React from "react";

const Button = (props) => {
  const { children = "default", variant = "bg-black", onClick, disabled = false } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-opacity-75 cursor-pointer"}`}
      type="submit"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

function App() {
  // Fungsi untuk menangani klik tombol
  const handleClick = (label) => {
    console.log(`${label} button clicked!`);
  };

  return (
    <div className="flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-3">
        <Button variant="bg-red-700" onClick={() => handleClick("Login")}>
          Login
        </Button>
        <Button variant="bg-slate-700" onClick={() => handleClick("Guruh")}>
          Guruh
        </Button>
        <Button onClick={() => handleClick("Utama")}>Utama</Button>
        <Button disabled>Disabled</Button> {/* Tombol ini dinonaktifkan */}
      </div>
    </div>
  );
}

export default App;