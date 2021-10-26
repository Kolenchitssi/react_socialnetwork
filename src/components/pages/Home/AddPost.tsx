import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";
import { IPost, TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUser";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState("");
  const addPostHandler = () => {
    setPosts((prev) => [
      ...prev,
      {
        author: users[0],
        content,
        createdAt: new Date().toString(),
      },
    ]);
  };
  return (
    <Box sx={{ border: "2px solid #ccc", borderRadius: "10px" }}>
      <TextField
        label="Рассказать что у вас нового"
        variant="outlined"
        placeholder="Введите текст"
        margin="normal"
        sx={{ width: "100%" }}
        inputProps={{ sx: { borderRadius: "25px", bgcolor: "#f9f9f9" } }}
        onKeyPress={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
