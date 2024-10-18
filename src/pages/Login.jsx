import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Bagian Kiri */}
      <div className="w-1/2 bg-cover bg-center relative" style={{ backgroundImage: `url('../src/assets/interior-cafe.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center h-full text-white p-10">
          <img src="../src/assets/cropped-cropped-Prosus-INTEN-Square-2.png" alt="Logo" className="w-32 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Welcome to Polinema Cafe</h1>
          <p>
            "POLINEMA CAFESHOP" Belajar bersama guru terbaik, berpengalaman, dan lulusan PTN. 
            Semua materi yang diujikan di UTBK SNBT mulai dari konsep dasar, materi, hingga latihan soal. 
            Kamu siap menghadapi semua seleksi masuk PTN.
          </p>
        </div>
      </div>

      {/* Bagian Kanan */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="bg-white p-10 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Masuk ke akun anda !</h2>
          <p className="text-center text-gray-600 mb-6">
            Belum punya akun? <a href="#" className="text-green-600 hover:underline">Daftar</a>
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              <a href="#" className="text-black-600 text-sm float-right mt-2 hover:underline">Lupa Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Masuk
            </button>
          </form>
          <div className="text-center text-gray-500 mt-6">
            <a href="#">Kontak</a> | <a href="#">Tentang Kami</a>
          </div>
        </div>
      </div>
    </div>
  );
}
