import React, { useState } from "react";

export default function App() {
  const [age, setAge] = useState(null);
  console.log(age)

  function handleChange(e) {
    const dates = e.target.value;
    const value = dates.split("-");
    console.log(value)
    const FinaleDate = date.getFullYear() - (+value[0]) - 1;
    const FinalMonth = 12 - (+value[1]) + 1;
    setAge({ FinaleDate, FinalMonth });
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Age Calculator</h1>
        <p className="text-gray-600 mb-6">Enter your birthdate to calculate your age.</p>
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onChange={handleChange}
        />
        {(age?.FinaleDate)>=1 && (
          <div className="mt-6 p-4 bg-indigo-100 rounded-lg">
            <p className="text-lg font-medium text-indigo-700">
              Based on your given data, your age is <span className="font-bold">{age.FinaleDate}</span> years and you are <span className="font-bold">{age.FinalMonth}</span> months old.
            </p>
          </div>
        )}
        {
          age!=null && age.FinaleDate<1 && (<div className="mt-6 p-4 bg-indigo-100 rounded-lg">
            <p className="text-lg font-medium text-indigo-700">
              Incorrect Age as your age is less than 1 year
            </p>
          </div>)
        }
      </div>
    </div>
  );
}
