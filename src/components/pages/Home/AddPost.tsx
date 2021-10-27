import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, KeyboardEvent, useState } from "react";
import { IPost, TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUser";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC<IAddPost> = ({ setPosts }) => {
  const [content, setContent] = useState("");
  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setPosts((prev) => [
        {
          author: users[0],
          content,
          createdAt: new Date().toString(),
        },
        ...prev,
      ]);
      setContent("");
    }
    if (e.key === "Escape") {
      setContent("");
    }
  };
  return (
    <Box sx={{ border: "1px solid #ccc", borderRadius: "10px" }}>
      <TextField
        label="Рассказать что у вас нового"
        variant="outlined"
        placeholder="Введите текст"
        margin="none"
        sx={{ width: "100%" }}
        inputProps={{ sx: { borderRadius: "5px", bgcolor: "#f9f9f9" } }}
        onKeyDown={addPostHandler}
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;
