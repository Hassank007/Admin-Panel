"use client";
import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";

const Admin = () => {
  const [formData, setFormData] = useState({
    AdminID: "",
    Name: "",
    Email: "",
    Password: "",
    DOR: "",
    Status: "",
    Department: "",
  });

  // Default dummy data for the table
  const defaultTableData = [
    {
      AdminID: "1",
      Name: "John Doe",
      Email: "john@example.com",
      Password: "password123",
      DOR: "2024-04-01",
      Status: "Active",
      Department: "HR",
    },
    {
      AdminID: "2",
      Name: "Jane Smith",
      Email: "jane@example.com",
      Password: "secret",
      DOR: "2024-04-02",
      Status: "Inactive",
      Department: "Finance",
    },
    {
      AdminID: "3",
      Name: "Bob Johnson",
      Email: "bob@example.com",
      Password: "bobpassword",
      DOR: "2024-04-03",
      Status: "Active",
      Department: "IT",
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
      AdminID: "",
      Name: "",
      Email: "",
      Password: "",
      DOR: "",
      Status: "",
      Department: "",
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
                  Add Admin
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="AdminID" className="sr-only">
                    AdminID
                  </label>
                  <input
                    type="text"
                    name="AdminID"
                    id="AdminID"
                    value={formData.AdminID}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="AdminID"
                  />
                </div>
                <div>
                  <label htmlFor="Name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="Email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    value={formData.Email}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="Password" className="sr-only">
                    Password
                  </label>
                  <input
                    type="password"
                    name="Password"
                    id="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="DOR" className="sr-only">
                    Date of Registration
                  </label>
                  <input
                    type="date"
                    name="DOR"
                    id="DOR"
                    value={formData.DOR}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="Date of Registration"
                  />
                </div>
                <div>
                  <label htmlFor="Status" className="sr-only">
                    Status
                  </label>
                  <input
                    type="text"
                    name="Status"
                    id="Status"
                    value={formData.Status}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="Status"
                  />
                </div>
                <div>
                  <label htmlFor="Department" className="sr-only">
                    Department
                  </label>
                  <input
                    type="text"
                    name="Department"
                    id="Department"
                    value={formData.Department}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="Department"
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
                        Admin ID
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
                        Department
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tableData.map((admin, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.AdminID}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.Name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.Email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.Password}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.DOR}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.Status}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {admin.Department}
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

export default Admin;
