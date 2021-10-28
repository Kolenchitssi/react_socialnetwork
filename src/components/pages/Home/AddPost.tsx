import { Alert, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, KeyboardEvent, useState } from "react";
import { IPost, TypeSetState } from "../../../types";
import { users } from "../../layout/sidebar/dataUser";
import useAuth from "../../providers/useAuth";
import { collection, addDoc } from "firebase/firestore";

interface IAddPost {
  setPosts: TypeSetState<IPost[]>;
}

const AddPost: FC = () => {
  const [content, setContent] = useState("");
  const { user, db } = useAuth();
  const [error, setError] = useState("");

  const addPostHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && user) {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          //запись поста в Базу Данных
          author: user,
          content,
          createdAt: String(new Date()),
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e: any) {
        setError(e);
      }

      // setPosts((prev) => [
      //   {
      //     author: user,
      //     content,
      //     createdAt: new Date().toString(),
      //   },
      //   ...prev,
      // ]);
      setContent("");
    }
    if (e.key === "Escape") {
      setContent("");
    }
  };
  return (
    <>
      {" "}
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
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
    </>
  );
};

export default AddPost;
