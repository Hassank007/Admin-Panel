"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Doctor = () => {
  const [formData, setFormData] = useState({
    doctorId: "",
    name: "",
    email: "",
    password: "",
    dor: "",
    status: "",
    designation: "",
  });

  // Default dummy data for the table
  const defaultTableData = [
    {
      doctorId: "1",
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      dor: "2024-04-01",
      status: "Active",
      designation: "Pediatrician",
    },
    {
      doctorId: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      password: "secret",
      dor: "2024-04-02",
      status: "Inactive",
      designation: "Cardiologist",
    },
    {
      doctorId: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      password: "bobpassword",
      dor: "2024-04-03",
      status: "Active",
      designation: "Orthopedic Surgeon",
    },
  ];

  const [tableData, setTableData] = useState(defaultTableData);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form data to the table data
    setTableData([...tableData, formData]);
    // Clear the form fields
    setFormData({
      doctorId: "",
      name: "",
      email: "",
      password: "",
      dor: "",
      status: "",
      designation: "",
    });
  };

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row ">
     <Navbar />
     <div className="flex-1">
        <div className="px-4 py-8 sm:px-6 lg:px-8">
      
        <div className="max-w-md mx-auto space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add Doctor
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="doctorId" className="sr-only">
                Doctor ID
              </label>
              <input
                type="text"
                name="doctorId"
                id="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Doctor ID"
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="dor" className="sr-only">
                Date of Registration
              </label>
              <input
                type="date"
                name="dor"
                id="dor"
                value={formData.dor}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                placeholder="Date of Registration"
              />
            </div>
            <div>
              <label htmlFor="status" className="sr-only">
                Status
              </label>
              <input
                type="text"
                name="status"
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                placeholder="Status"
              />
            </div>
            <div>
              <label htmlFor="designation" className="sr-only">
                Designation
              </label>
              <input
                type="text"
                name="designation"
                id="designation"
                value={formData.designation}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                placeholder="Designation"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Display table with submitted form data */}
          <div className="mt-8 md:mt-0 overflow-x-auto md:overflow-x-visible flex md:justify-center">
  <table className="min-w-full md:max-w-screen-lg divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Doctor ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Password
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    DOR
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Designation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((doctor, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.doctorId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.password}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.dor}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {doctor.designation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      
      </div>
    </>
  );
};

export default Doctor;
