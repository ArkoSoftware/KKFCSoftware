import { addDoc, collection } from "firebase/firestore/lite";
import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import { Navigate, useNavigate } from "react-router-dom";

const company = [
  ["KKFC NEW BANESHWOR", "New Baneshwor"],
  ["KKFC NEW BANESHWOR2", "New Baneshwor"],
  ["KKFC NEW BANESHWOR3", "New Baneshwor"],
];
function JoinCompany() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [chosen, setChosen] = useState("");
  const join = async () => {
    const col1 = collection(db, "verifiedUser");
    const snap = await addDoc(col1, {
      email: auth.currentUser.email,
      branch: chosen,
    });
    localStorage.setItem("companyId", chosen);
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="bg-white p-8 rounded shadow-lg w-full sm:w-2/3 md:w-1/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Join a Company</h1>
        <ul className="divide-y divide-gray-300">
          {company.map((docs) => (
            <li className="py-4 flex justify-between items-center bg-gray-100 px-8 my-1">
              <div>
                <h2 className="font-medium">{docs[0]}</h2>
                <p className="text-gray-500 text-sm">Address: {docs[1]}</p>
              </div>
              {chosen != docs[0] ? (
                <button
                  onClick={() => {
                    setChosen(docs[0]);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Select
                </button>
              ) : (
                <button className="bg-gray-500 text-white px-4 py-2 rounded ">
                  Selected
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="pin">
            Enter your 7-digit PIN
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pin"
            type="text"
            maxLength="7"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
          <button
            onClick={() => join()}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default JoinCompany;
