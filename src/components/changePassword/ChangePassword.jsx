import { Loader, PasswordInput } from "@mantine/core";
import React, { useState } from "react";
import { useChangePasswordMutation } from "../../features/api/authApi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/services/authSlice";

const ChangePassword = () => {
  const token = Cookies.get("token");

  const [passwordChange, setPasswordChange] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState(null);

  const handleChange = (e) => {
    setPasswordChange({ ...passwordChange, [e.target.name]: e.target.value });
  };
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await changePassword({
      token,
      password: passwordChange,
    });
    console.log(data, error);
    setErrors(error?.data?.errors);
    if (data?.success) {
      alert(data?.message);
      dispatch(logoutUser());
      nav("/login");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-96 mx-auto my-10 p-5 shadow"
      >
        <h2 className="mb-5 text-lg font-medium text-center">
          Change Password
        </h2>
        <div className="mb-3">
          <label htmlFor="current_password">Current Password</label>
          <PasswordInput
            name="current_password"
            id="current_password"
            className="mt-2"
            onChange={handleChange}
          />
          <p className="text-sm text-tertiary">{errors?.current_password}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password">New Password</label>
          <PasswordInput
            name="password"
            id="password"
            className="mt-2"
            onChange={handleChange}
          />
          <p className="text-sm text-tertiary">{errors?.password}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="password_confirmation">Confirm Password</label>
          <PasswordInput
            name="password_confirmation"
            id="password_confirmation"
            className="mt-2"
            onChange={handleChange}
          />
        </div>
        <div className="mt-5">
          <button
            className={`w-full py-[5px] rounded-sm bg-button text-white`}
            disabled={isLoading && true}
          >
            {isLoading ? (
              <Loader color="gray" size="sm" className="mx-auto" />
            ) : (
              "Change Now"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
