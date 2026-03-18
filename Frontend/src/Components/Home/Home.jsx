import React from "react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-4 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Zoho CRM</h2>
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Reports</li>
          <li className="font-semibold text-purple-300">Analytics</li>
          <li className="hover:text-gray-300 cursor-pointer">Leads</li>
          <li className="hover:text-gray-300 cursor-pointer">Contacts</li>
          <li className="hover:text-gray-300 cursor-pointer">Accounts</li>
          <li className="hover:text-gray-300 cursor-pointer">Deals</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Analytics</h1>
          <div className="flex gap-2">
            <button className="bg-gray-200 px-3 py-1 rounded">Add Component</button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">Create Dashboard</button>
          </div>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white h-24 rounded-xl shadow flex items-center justify-center">
              <span className="text-gray-400">Widget</span>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Lead Target */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold mb-4">Lead Generation Target</h2>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-full border-8 border-gray-200 flex items-center justify-center">
                <span className="text-xl">1000</span>
              </div>
              <p className="mt-2 text-gray-500">Remaining: 1000</p>
            </div>
          </div>

          {/* Revenue Target */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold mb-4">Revenue Target - This Year</h2>
            <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full" style={{ width: "70%" }}></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">Target: Rs. 10,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
