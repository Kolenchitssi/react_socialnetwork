import Menu from "./menu/Menu";
import React, { FC } from "react";
import UserItems from "./UserItems";
import User from "./User";

const Sidebar: FC = () => {
  return (
    <div>
      <User />
      <UserItems />
      <Menu />
    </div>
  );
};

export default Sidebar;
