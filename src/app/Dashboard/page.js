"use client";
import { useState } from "react";
import React from "react";
import Navbar from "../components/Navbar";

const Admin = () => {
 

  return (
    <>
      <div className="flex flex-col md:flex-row md:h-[50rem] h-[60rem]">
        <Navbar />
        <div className="flex ">
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full mx-auto space-y-8">
              
            <div className="container mx-auto">
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold">Total Revenue: $XXXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold">Total Impressions: XXXX</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <p className="font-semibold">Total Clicks: XXXX</p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-bold mb-4">Ad Campaigns</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <li className="bg-white p-4 rounded shadow">Campaign 1</li>
            <li className="bg-white p-4 rounded shadow">Campaign 2</li>
            <li className="bg-white p-4 rounded shadow">Campaign 3</li>
          </ul>
        </div>

        {/* Add more sections for Ad Groups, Ads, Audience Targeting, Budget & Billing, Reports & Analytics */}
      </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
