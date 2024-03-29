"use client";
import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";

const Claim = () => {
  const [formData, setFormData] = useState({
    ClaimID: "",
    UserID: "",
    UserName: "",
    DoctorID: "",
    DoctorName: "",
    DoctorStatus: "",
    ReferenceWorkFlow: "",
    SeniorDoctorName: "",
    OpsExecutiveName: "",
    OpsStatus: "",
    FinanceStatus: "",
    FinanceExecutiveName: "",
    AppealLimit: "",
    DoctorRejectNote: "",
    RejectionCriteria: "",
    DOR: "",
    ClaimAmount: "",
    ApprovedAmount: "",
  });

  // Default dummy data for the table
  const defaultTableData = [
    {
      ClaimID: "1",
      UserID: "123",
      UserName: "John Doe",
      DoctorID: "DOC001",
      DoctorName: "Dr. Smith",
      DoctorStatus: "Active",
      ReferenceWorkFlow: "Ref 001",
      SeniorDoctorName: "Dr. Brown",
      OpsExecutiveName: "Jane Smith",
      OpsStatus: "Pending",
      FinanceStatus: "Pending",
      FinanceExecutiveName: "Bob Johnson",
      AppealLimit: "$500",
      DoctorRejectNote: "Insufficient evidence",
      RejectionCriteria: "Incomplete documents",
      DOR: "2024-04-01",
      ClaimAmount: "$1000",
      ApprovedAmount: "$800",
    },
    {
      ClaimID: "2",
      UserID: "456",
      UserName: "Alice Johnson",
      DoctorID: "DOC002",
      DoctorName: "Dr. Taylor",
      DoctorStatus: "Active",
      ReferenceWorkFlow: "Ref 002",
      SeniorDoctorName: "Dr. White",
      OpsExecutiveName: "Ella Brown",
      OpsStatus: "Approved",
      FinanceStatus: "Approved",
      FinanceExecutiveName: "James Smith",
      AppealLimit: "$0",
      DoctorRejectNote: "",
      RejectionCriteria: "",
      DOR: "2024-04-02",
      ClaimAmount: "$1500",
      ApprovedAmount: "$1500",
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
      ClaimID: "",
      UserID: "",
      UserName: "",
      DoctorID: "",
      DoctorName: "",
      DoctorStatus: "",
      ReferenceWorkFlow: "",
      SeniorDoctorName: "",
      OpsExecutiveName: "",
      OpsStatus: "",
      FinanceStatus: "",
      FinanceExecutiveName: "",
      AppealLimit: "",
      DoctorRejectNote: "",
      RejectionCriteria: "",
      DOR: "",
      ClaimAmount: "",
      ApprovedAmount: "",
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
          <div className="px-4 py-8 sm:px-6 lg:px-0">
            <div className="max-w-md mx-auto space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Add Claim
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label htmlFor="ClaimID" className="sr-only">
                    ClaimID
                  </label>
                  <input
                    type="text"
                    name="ClaimID"
                    id="ClaimID"
                    value={formData.ClaimID}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="ClaimID"
                  />
                </div>
                <div>
                  <label htmlFor="UserID" className="sr-only">
                    UserID
                  </label>
                  <input
                    type="text"
                    name="UserID"
                    id="UserID"
                    value={formData.UserID}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="UserID"
                  />
                </div>
                <div>
                  <label htmlFor="UserName" className="sr-only">
                    UserName
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    id="UserName"
                    value={formData.UserName}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="UserName"
                  />
                </div>
                <div>
                  <label htmlFor="DoctorID" className="sr-only">
                    DoctorID
                  </label>
                  <input
                    type="text"
                    name="DoctorID"
                    id="DoctorID"
                    value={formData.DoctorID}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="DoctorID"
                  />
                </div>
                <div>
                  <label htmlFor="DoctorName" className="sr-only">
                    DoctorName
                  </label>
                  <input
                    type="text"
                    name="DoctorName"
                    id="DoctorName"
                    value={formData.DoctorName}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="DoctorName"
                  />
                </div>
                <div>
                  <label htmlFor="DoctorStatus" className="sr-only">
                    DoctorStatus
                  </label>
                  <input
                    type="text"
                    name="DoctorStatus"
                    id="DoctorStatus"
                    value={formData.DoctorStatus}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="DoctorStatus"
                  />
                </div>
                <div>
                  <label htmlFor="ReferenceWorkFlow" className="sr-only">
                    ReferenceWorkFlow
                  </label>
                  <input
                    type="text"
                    name="ReferenceWorkFlow"
                    id="ReferenceWorkFlow"
                    value={formData.ReferenceWorkFlow}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="ReferenceWorkFlow"
                  />
                </div>
                <div>
                  <label htmlFor="SeniorDoctorName" className="sr-only">
                    SeniorDoctorName
                  </label>
                  <input
                    type="text"
                    name="SeniorDoctorName"
                    id="SeniorDoctorName"
                    value={formData.SeniorDoctorName}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="SeniorDoctorName"
                  />
                </div>
                <div>
                  <label htmlFor="OpsExecutiveName" className="sr-only">
                    OpsExecutiveName
                  </label>
                  <input
                    type="text"
                    name="OpsExecutiveName"
                    id="OpsExecutiveName"
                    value={formData.OpsExecutiveName}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="OpsExecutiveName"
                  />
                </div>
                <div>
                  <label htmlFor="OpsStatus" className="sr-only">
                    OpsStatus
                  </label>
                  <input
                    type="text"
                    name="OpsStatus"
                    id="OpsStatus"
                    value={formData.OpsStatus}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="OpsStatus"
                  />
                </div>
                <div>
                  <label htmlFor="FinanceStatus" className="sr-only">
                    FinanceStatus
                  </label>
                  <input
                    type="text"
                    name="FinanceStatus"
                    id="FinanceStatus"
                    value={formData.FinanceStatus}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="FinanceStatus"
                  />
                </div>
                <div>
                  <label htmlFor="FinanceExecutiveName" className="sr-only">
                    FinanceExecutiveName
                  </label>
                  <input
                    type="text"
                    name="FinanceExecutiveName"
                    id="FinanceExecutiveName"
                    value={formData.FinanceExecutiveName}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="FinanceExecutiveName"
                  />
                </div>
                <div>
                  <label htmlFor="AppealLimit" className="sr-only">
                    AppealLimit
                  </label>
                  <input
                    type="text"
                    name="AppealLimit"
                    id="AppealLimit"
                    value={formData.AppealLimit}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="AppealLimit"
                  />
                </div>
                <div>
                  <label htmlFor="DoctorRejectNote" className="sr-only">
                    DoctorRejectNote
                  </label>
                  <input
                    type="text"
                    name="DoctorRejectNote"
                    id="DoctorRejectNote"
                    value={formData.DoctorRejectNote}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="DoctorRejectNote"
                  />
                </div>
                <div>
                  <label htmlFor="RejectionCriteria" className="sr-only">
                    RejectionCriteria
                  </label>
                  <input
                    type="text"
                    name="RejectionCriteria"
                    id="RejectionCriteria"
                    value={formData.RejectionCriteria}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="RejectionCriteria"
                  />
                </div>
                <div>
                  <label htmlFor="DOR" className="sr-only">
                    DOR
                  </label>
                  <input
                    type="date"
                    name="DOR"
                    id="DOR"
                    value={formData.DOR}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="DOR"
                  />
                </div>
                <div>
                  <label htmlFor="ClaimAmount" className="sr-only">
                    ClaimAmount
                  </label>
                  <input
                    type="text"
                    name="ClaimAmount"
                    id="ClaimAmount"
                    value={formData.ClaimAmount}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="ClaimAmount"
                  />
                </div>
                <div>
                  <label htmlFor="ApprovedAmount" className="sr-only">
                    ApprovedAmount
                  </label>
                  <input
                    type="text"
                    name="ApprovedAmount"
                    id="ApprovedAmount"
                    value={formData.ApprovedAmount}
                    onChange={handleChange}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm mt-1"
                    placeholder="ApprovedAmount"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
           
              
            </div>
            <div className="overflow-x-auto mt-8 md:w-[69rem] ">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(defaultTableData[0]).map((key, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tableData.map((data, index) => (
              <tr key={index}>
                {Object.values(data).map((value, index) => (
                  <td
                    key={index}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            
          </div>
          
        </div>
       
      </div>
        {/* Display table with submitted form data */}
        
    </>
  );
};
export default Claim