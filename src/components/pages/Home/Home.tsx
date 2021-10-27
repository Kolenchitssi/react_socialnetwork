import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";
import { IPost } from "../../../types";
import AddPost from "./AddPost";
import { initialPosts } from "./initialPosts";
import Posts from "./Posts";

const Home: FC = () => {
  const [posts, setPosts] = useState<IPost[]>(initialPosts);
  return (
    <Box>
      <AddPost setPosts={setPosts} />
      <Posts posts={posts} />
    </Box>
  );
};

export default Home;
