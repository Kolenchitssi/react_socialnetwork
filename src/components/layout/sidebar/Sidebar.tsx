import Menu from "./menu/Menu";
import React, { FC } from "react";
import UserItems from "./UserItems";

const Sidebar: FC = () => {
  return (
    <div>
      <UserItems />
      <Menu />
    </div>
  );
};

export default Sidebar;
