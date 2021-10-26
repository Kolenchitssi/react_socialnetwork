import { Grid } from "@mui/material";
import React, { FC } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Grid container spacing={2} marginX={2} marginTop={2}>
        <Grid item xs={6} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={6} md={10}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
