import { style } from "@mui/system";
import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "./react-logo-sx.jpg";
import { Search } from "@mui/icons-material";
import css from "./Header.module.scss";

const Header: FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <header className={css.header}>
      <NavLink to="/">
        <div className={css.logoWrapper}>
          <div>
            <img src={logoImg} alt="logo" />
          </div>
          <h1>ReactSocialNetwork</h1>
        </div>
      </NavLink>
      <div className={css.wrapper}>
        {!isSearchActive && <Search />}
        <input
          type="text"
          placeholder="Поиск"
          // onClick={() => setIsSearchActive(true)}
        />
      </div>
    </header>
  );
};

export default Header;
