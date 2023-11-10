// LoginComp.jsx
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputLabel from "../common/InputLabel";
import { useNavigate } from "react-router-dom";
import logo from "../assets/ccript Logo Green.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
const baseUrl = "https://hiring-test-task.vercel.app/api";
const LoginComp = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  // ========================= ~ yup validation ~ ============================
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  // ============================= ~ Formik ~ ================================
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        try {
          const data = {
            username: values.username,
            password: values.password,
          };
          const response = await axios.post(`${baseUrl}/login`, data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log("login result", response);
          const result = response.data;
          if (result) {
            toast.success("login Successfully ", { position: "top-right" });
            console.log("login result", result);
            localStorage.setItem("token", result.token);
            navigate("/appointments");
          }
        } catch (error) {
          console.log("error in login", error);
        }
      },
    });
  const inputFields = [
    {
      label: "Enter Username",
      type: "text",
      name: "username",
      placeholder: "Enter Username",
    },
    {
      label: "Enter Password",
      type: "password",
      name: "password",
      placeholder: "Enter Password",
    },
  ];
  return (
    <div className="min-h-screen  flex-col flex items-center justify-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-35 h-35 mr-2" />
      </div>
      <div>
        <form onSubmit={handleSubmit} className="bg-white p-8 w-85">
          {inputFields.map((field) => (
            <div key={field.name} className="h-[90px]">
              <InputLabel htmlFor={field.name} label={field.label} />
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="focused border-b border-black w-full px-2 py-2 outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[field.name]}
              />

              {touched[field.name] && errors[field.name] && (
                <div className="text-red-500 text-sm">{errors[field.name]}</div>
              )}
            </div>
          ))}

          <button
            style={{ width: "315px" }}
            type="submit"
            className="bg-greenClr font-[600] mt-4 w-100 text-white px-4 py-2 rounded-lg hover:bg-greenClr"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;
