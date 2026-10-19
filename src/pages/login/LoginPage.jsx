import React, { useState } from "react";
import { useLogin } from "../../hooks/use-login";
import CustomInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import { setToken } from "../../utils/token-storage";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",

    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    login(form, {
      onSuccess: (data) => {
        console.log("Login response:", data);

        setToken(data.token);

        navigate("/products");
      },
    });
  };

  const {
    mutate: login,
    isPending,
    isError,
    error,
  } = useLogin({
    onSuccess: (response) => {
      const token = response.token || response.data?.token;

      if (token) {
        setToken(token); 
      }

      navigate("/"); 
    },
  });

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm m-auto mt-[250px]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="p-1 border-2 border-b-black m-2"
              required
            />
          </div>
          <div>
            <CustomInput
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="p-1 border-2 border-b-black m-2"
              required
            />
          </div>

          <CustomButton type="submit" loading={isPending}>
            Login
          </CustomButton>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
