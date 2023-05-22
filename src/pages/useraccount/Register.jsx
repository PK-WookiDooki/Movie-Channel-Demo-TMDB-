import { PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRegisterAccountMutation } from "../../features/api/authApi";
import { Loader } from "@mantine/core";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [registerAccount, { isLoading }] = useRegisterAccountMutation();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data, error } = await registerAccount(user);
      console.log(data);
      console.log(error);
      setErrors(error?.data?.errors);
      data?.success && nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 my-5 shadow border border-secondary rounded-sm w-96 mx-auto">
        <form onSubmit={handleSubmit} action="">
          <h2 className="text-xl font-bold text-center mb-5">
            Register Account
          </h2>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <TextInput
              id="name"
              name="name"
              className="mt-1"
              onChange={handleChange}
              value={user.name}
            />
            <p className="text-sm text-tertiary">{errors?.name}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <TextInput
              id="email"
              name="email"
              className="mt-1"
              onChange={handleChange}
              value={user.email}
            />
            <p className="text-sm text-tertiary">{errors?.email}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <PasswordInput
              id="password"
              name="password"
              className="mt-1"
              onChange={handleChange}
              value={user.password}
            />
            {errors?.password
              ? errors?.password.map((err, index) => {
                  return (
                    <p key={index} className="text-sm text-tertiary">
                      {err}
                    </p>
                  );
                })
              : ""}
          </div>
          <div className="mb-3">
            <label htmlFor="password_confirmation">Confirm Password</label>
            <PasswordInput
              id="password_confirmation"
              name="password_confirmation"
              className="mt-1"
              onChange={handleChange}
              value={user.password_confirmation}
            />
          </div>
          <div className="text-center mt-5 flex flex-col gap-3 items-center">
            <p>
              Already have an account?{" "}
              <Link to={"/login"} className="text-detail">
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="w-full rounded-sm bg-button text-primary h-9 hover:bg-opacity-90 duration-200 "
              disabled={isLoading && true}
            >
              {isLoading ? (
                <Loader color="gray" size="sm" className="mx-auto" />
              ) : (
                "Register Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
