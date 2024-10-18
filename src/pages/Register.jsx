import React, { useState } from 'react';

export default function Register() {
  // Inisialisasi state untuk form dan status submit
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: '',
    class: '',
    address: '',
    parentName: '',
    parentJob: '',
    parentPhone: '',
    courseDay: [],
    courseTime: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani perubahan pada checkbox
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let newDays = [...formData.courseDay];
    if (checked) {
      newDays.push(value);
    } else {
      newDays = newDays.filter(day => day !== value);
    }
    setFormData({
      ...formData,
      courseDay: newDays,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Simulate form submission
    alert('Kamu sudah berhasil mendaftar!');
    setIsSubmitted(true);  // Set status pendaftaran berhasil
  };

  if (isSubmitted) {
    return (
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Pendaftaran Berhasil!</h1>
        <p className="text-lg">Terima kasih telah mendaftar. Kami akan menghubungi Anda segera.</p>
      </div>
    );
  }


  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Bimbingan Belajar Merah Putih</h1>
        </div>
      </header>

      {/* Konten Utama */}
      <div className="flex-grow flex justify-center items-center bg-gray-100 py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Formulir Pendaftaran</h2>

          {/* Notifikasi Sukses */}
          {isSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
              <strong className="font-bold">Sukses!</strong>
              <span className="block sm:inline"> Formulir berhasil dikirim.</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Input fields seperti nama, tanggal lahir, dll */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              />
            </div>

            <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            >
              <option value="">Pilih</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">Kelas</label>
            <input
              type="text"
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Nama Orang Tua</label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="parentJob" className="block text-sm font-medium text-gray-700">Pekerjaan Orang Tua</label>
            <input
              type="text"
              id="parentJob"
              name="parentJob"
              value={formData.parentJob}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700">No. Telepon Orang Tua</label>
            <input
              type="tel"
              id="parentPhone"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Hari Kursus</label>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="seninKamis"
                  value="Senin & Kamis"
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="seninKamis" className="ml-2 text-sm font-medium text-gray-700">Senin & Kamis</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="selasaJumat"
                  value="Selasa & Jumat"
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="selasaJumat" className="ml-2 text-sm font-medium text-gray-700">Selasa & Jumat</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rabuSabtu"
                  value="Rabu & Sabtu"
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="rabuSabtu" className="ml-2 text-sm font-medium text-gray-700">Rabu & Sabtu</label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Waktu Kursus</label>
            <select
              name="courseTime"
              value={formData.courseTime}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            >
              <option value="">Pilih</option>
              <option value="14:00 - 15:30">14:00 - 15:30</option>
              <option value="16:00 - 17:30">16:00 - 17:30</option>
              <option value="19:00 - 20:30">19:00 - 20:30</option>
            </select>
          </div>

            {/* Mengetahui Wali dan Calon Siswa */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Mengetahui,</label>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="wali" className="block text-sm font-medium text-gray-700">Orang Tua/Wali</label>
                  <input
                    type="text"
                    id="wali"
                    name="wali"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="calonSiswa" className="block text-sm font-medium text-gray-700">Calon Siswa</label>
                  <input
                    type="text"
                    id="calonSiswa"
                    name="calonSiswa"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200 mt-6"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">Jl. Duta Daan 117, Banjar, Jawa Barat 47433</p>
          <p className="text-sm">No HP: 0123456789</p>
          <p className="text-sm">Email: halo@bimbinganbelajar.co.id</p>
        </div>
      </footer>
    </div>
  );
}


