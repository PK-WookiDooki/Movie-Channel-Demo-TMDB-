import { PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "@mantine/core";
import { useLoginAccountMutation } from "../../features/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/services/authSlice";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const [loginAccount, { isLoading }] = useLoginAccountMutation();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await loginAccount(user);
      const token = data?.token;
      console.log(data);
      dispatch(addUser({ token, user: data?.user }));
      data?.success && nav("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-5 my-5 shadow border border-secondary rounded-sm w-96 mx-auto">
        <form onSubmit={handleSubmit} action="" method="POST">
          <h2 className="text-xl font-bold text-center mb-5">Login Account</h2>
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
            <p className="text-sm text-tertiary">{errors?.password}</p>
          </div>
          <div className="text-center mt-5 flex flex-col items-center gap-3">
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="text-button">
                Register
              </Link>
            </p>
            <button
              type="submit"
              className="w-32 rounded-sm bg-button text-primary h-9 hover:bg-opacity-90 duration-200"
              disabled={isLoading && true}
            >
              {isLoading ? (
                <Loader color="gray" size="sm" className="mx-auto" />
              ) : (
                "Login Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
