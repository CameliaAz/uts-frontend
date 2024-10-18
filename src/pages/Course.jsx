import React, { useState } from 'react';

export default function Course() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    course: '',
    gender: '',
    phone: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    // Validasi input
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (formData.phone.length < 10) {
      setError('Phone number must be at least 10 digits.');
      return;
    }

    // Proses pendaftaran berhasil
    setSuccess(true);
    console.log('Form submitted:', formData);
  };

  const handleCloseModal = () => {
    setSuccess(false); // Tutup modal
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-indigo-600 py-6 text-white text-center">
          <h1 className="text-3xl font-bold">Course - Belajar Mudah dan Cepat</h1>
        </header>

        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-full">
          {error && <p className="text-red-500">{error}</p>}
          
          {/* Modal Popup */}
          {success && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-8 rounded-md shadow-lg max-w-sm w-full">
                <h3 className="text-xl text-center font-bold mb-4">Sukses!</h3>
                <p className="text-center">Formulir berhasil dikirim.</p>
                <div className="flex justify-center mt-4">
                <button
                  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                  onClick={handleCloseModal}
                >
                  Tutup
                </button>
              </div>
            </div>
        </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Firstname */}
            <div className="mb-4">
              <label className="block text-gray-700">Firstname:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                required
              />
            </div>

            {/* Middlename */}
            <div className="mb-4">
              <label className="block text-gray-700">Middlename:</label>
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
              />
            </div>

            {/* Lastname */}
            <div className="mb-4">
              <label className="block text-gray-700">Lastname:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                required
              />
            </div>

            {/* Course */}
            <div className="mb-4">
              <label className="block text-gray-700">Course:</label>
              <select 
                name="course" 
                value={formData.course}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-500 focus:ring-red-500"
                required
              >
                <option value="">Course</option>
                <option value="14:00 - 15:30">Dasar Pemrograman</option>
                <option value="16:00 - 17:30">Critical Thinking</option>
                <option value="19:00 - 20:30">UI/UX </option>
              </select>
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label className="block text-gray-700">Gender:</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="mr-2"
                /> Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="ml-4 mr-2"
                /> Female
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                  className="ml-4 mr-2"
                /> Other
              </div>
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="block text-gray-700">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                required
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label className="block text-gray-700">Address:</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                required
              />
            </div>

            {/* Re-type Password */}
            <div className="mb-4">
              <label className="block text-gray-700">Re-type Password:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md p-2"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mb-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Belajar Mudah Dan Cepat. All rights reserved.</p>
          <p>Email: support@d2course.com | Phone: 0123-456789</p>
        </div>
      </footer>
    </div>
  );
}
