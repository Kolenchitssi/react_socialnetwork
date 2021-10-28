import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";

import AddPost from "./AddPost";

import Posts from "./Posts";

const Home: FC = () => {
  return (
    <Box>
      <AddPost />
      <Posts />
    </Box>
  );
};

export default Home;
