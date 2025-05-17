import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import logo from "./assets/logo.png";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
      onClick={onClick}
      className={`p-6 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"} transition-all duration-500 ease-in-out`}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

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
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCardClick = (title) => {
    alert(`Anda mengklik ${title}`);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen transition-colors duration-500`}>

      <div className="bg-gray-200 text-right py-2 text-sm">📍 Lokasi Store : Pakis Krajan, Kec. Tayu, Kab. Pati, Jawa Tengah - Indonesia</div>

      <header className="flex justify-between items-center p-7 shadow-md bg-purple-600">
        <div className="text-white text-lg font-bold">
          <img src={logo} alt="Logo" className="h-10 w-auto" />

        </div>
        <nav className="flex gap-4 items-center">
          <Button variant="bg-transparent">Home</Button>
          <input
            type="text"
            placeholder="Cari produk..."
            className="px-3 py-2 rounded-md text-black"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="bg-transparent">Contact</Button>
          {/* Tombol Login */}
          <Button
            variant="bg-purple-500"
            onClick={() => console.log("Login clicked")}
          >
            Login
          </Button>

          {/* Tombol Signup */}
          <Button
            variant="bg-purple-700"
            onClick={() => console.log("Signup clicked")}
          >
            Signup
          </Button>
          <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </nav>
      </header>

      <main className="flex flex-col items-center p-8" style={contentStyle}>
        <h1 className="text-4xl font-bold mb-4">Wellcome To KREBBY STUDIO!</h1>
        <p className="text-lg mb-8">Kami bisa bantu mewujudkan keinginan kamu dengan cara yang menajubkan! Lihat produk kami.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  title={product.title}
                  description={product.description}
                  imageUrl={product.imageUrl}
                  isDarkMode={isDarkMode}
                  onClick={() => handleCardClick(product.title)}
                />
              </motion.div>
            ))
          ) : (
            <p className="col-span-full text-center text-red-500 font-medium"></p>
          )}
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-96 rounded-lg overflow-hidden cursor-pointer"
        >
          <SwiperSlide>
            <img
              src="https://images.ctfassets.net/lwo24inw2jdv/4ZYgpdtipoVFmCAyaTcvde/c969bc2037b37ad9b33ee293f76b1aa8/photo_2021-11-03_15.34.12.jpeg"
              alt="Promo 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://siapcetakin.com/wp-content/uploads/2025/02/bannerr-promo.jpg"
              alt="Promo 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.primagraphia.co.id/images/slider/WEB%20BANNER_20250417104303_225.jpg"
              alt="Promo 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.cetakmurah.co.id/liteprint/application/liteprint/victorywtp/assets/slideshow/e32f11ec0ba2d0170e3d799b8a9f5149.jpg"
              alt="Promo 4"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>

{/* Shop By Categories */}

      <section className="w-full max-w-7xl mx-auto px-4 mt-16 mb-10">
        <h2 className="text-4xl font-bold text-center mb-10">Shop by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          <a href="/kategori/baju" className="block rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-700 dark:text-white text-gray-900">
            <img src="https://down-id.img.susercontent.com/file/sg-11134201-23010-lw9vuqfj5pmv1f" alt="Baju" className="w-full h-52 object-cover" />
            <div className="p-4 text-center text-xl font-semibold">Baju</div>
          </a>

          <a href="/kategori/stiker" className="block rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-700 dark:text-white text-gray-900">
            <img src="https://d3pyarv4eotqu4.cloudfront.net/onlineprin/images/product_icon/cutting-stiker-kisscut.jpg" alt="Stiker" className="w-full h-52 object-cover" />
            <div className="p-4 text-center text-xl font-semibold">Stiker</div>
          </a>

          <a href="/kategori/desain" className="block rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-700 dark:text-white text-gray-900">
            <img src="https://www.sribu.com/_next/image?url=https%3A%2F%2Fprod-sribu.sniag.upcloudobjects.com%2Fgigs%2F5934c5c0-f1a9-46cd-8b4d-d1b45cd07354.webp&w=3840&q=75" alt="Desain" className="w-full h-52 object-cover" />
            <div className="p-4 text-center text-xl font-semibold">Desain</div>
          </a>

          <a href="/kategori/banner" className="block rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-700 dark:text-white text-gray-900">
            <img src="https://images.tokopedia.net/img/cache/700/product-1/2019/5/8/1069960/1069960_dab67371-b54c-4a59-b876-a40d5df6d06b_1000_1000" alt="Banner" className="w-full h-52 object-cover" />
            <div className="p-4 text-center text-xl font-semibold">Banner</div>
          </a>

        </div>
      </section>



{/* End Shop By Categories */}

        <h2 className="text-2xl font-semibold mt-16 mb-4">Apa Kata Mereka?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: "Dina", review: "Pelayanan cepat dan hasil desain sangat memuaskan!" },
            { name: "Agus", review: "Saya suka tampilan dan navigasi websitenya. Gampang dipakai." },
            { name: "Lina", review: "Produk sesuai deskripsi dan kualitas sangat baik." },
          ].map((item, i) => (
            <div key={i} className={`rounded-lg p-4 shadow ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}>
              <p className="italic mb-2">"{item.review}"</p>
              <p className="text-right font-semibold">- {item.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-2">Tertarik Bekerja Sama?</h2>
          <p className="mb-4 text-lg">Hubungi tim kami sekarang untuk mulai mewujudkan proyek impianmu!</p>
          <Button onClick={() => alert("Kontak Kami diklik!")}>Hubungi Kami</Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-12">
        &copy; {new Date().getFullYear()} Krebby Studio. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
