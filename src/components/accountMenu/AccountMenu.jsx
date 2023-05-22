import React from "react";
import { Menu, Button, rem, Loader } from "@mantine/core";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutAccountMutation } from "../../features/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../features/services/authSlice";

const AccountMenu = () => {
  const user = JSON.parse(Cookies.get("user"));
  const token = Cookies.get("token");
  console.log(token);

  const [logoutAccount, { isLoading }] = useLogoutAccountMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async (e) => {
    try {
      e.preventDefault();
      const { data } = await logoutAccount(token);
      console.log(data);
      dispatch(logoutUser());
      data?.success && nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Menu width={170} shadow="md">
      <Menu.Target>
        <Button variant="outline" className="text-primary w-30">
          {isLoading ? (
            <Loader color="gray" size="sm" className="mx-auto" />
          ) : (
            user?.name
          )}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Link to={"change_password"}>
          <Menu.Item className=" text-detail hover:bg-detail hover:text-primary duration-200">
            Change Password
          </Menu.Item>
        </Link>

        <Menu.Item
          onClick={logoutHandler}
          className=" text-tertiary hover:bg-tertiary hover:text-primary duration-200"
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default AccountMenu;
