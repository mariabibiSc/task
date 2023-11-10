import axios from "axios";
import React, { useEffect, useState } from "react";
import { SlRefresh } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const baseUrl = "https://hiring-test-task.vercel.app/api";

const TableComp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const getApiData = async (refreshToken) => {
    try {
      const getApiUrl = `${baseUrl}/appointments`;
      const token = localStorage.getItem("token");
      const response = await axios.get(getApiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      getApiData(refreshToken);
    }
  }, []);

  console.log("data,,", data);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const hours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm"];
  // ====================== ~ Refresh Token API Call ~ ========================
  const refreshClicked = async () => {
    const apiUrl = `${baseUrl}/refresh-token`;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(apiUrl, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const result = response.data;
      if (result) {
        console.log("login result", result);
        localStorage.setItem("refreshToken", result.token);
        navigate("/appointments");
      }
    } catch (error) {
      console.log("token not valid", error);
    }
  };
  // ================================ ~ end ~ =================================

  return (
    <div className="container mx-auto mt-8">
      <table className="table-auto table-bordered rounded-md w-full">
        <thead className="text-center">
          <tr className="text-center">
            <th className="border rounded-tl-[15px] font-bold px-5 py-5 text-center flex items-center justify-center ">
              <SlRefresh
                onClick={refreshClicked}
                className="text-greenClr cursor-pointer text-center font-bold text-xl"
              />
            </th>
            {/* Empty cell for spacing */}
            {days.map((day, index) => (
              <th
                key={index}
                className={`${
                  index === days.length - 1 ? "rounded-tr-[15px] " : ""
                } border px-4 py-2`}
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className={`border font-bold flex items-center justify-center py-6 ${
                  rowIndex === hours.length - 1 ? "rounded-bl-[15px] " : ""
                }`}
              >
                {hour}
              </td>
              {days?.map((data, colIndex) => (
                <td key={colIndex} className="border px-4 py-2"></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComp;
