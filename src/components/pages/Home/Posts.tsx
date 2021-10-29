import { Avatar, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../types";
import useAuth from "../../providers/useAuth";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { initialPosts } from "./initialPosts";
import Card from "../../Ui/Card";

interface IPosts {
  posts: IPost[];
}

const Posts: FC = () => {
  const { db } = useAuth();
  const [error, setError] = useState("");
  const [posts, setPosts] = useState<IPost[]>(initialPosts);

  //! Чтение и отображение постов из БД
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "posts"), (doc) => {
      const arrPosts: IPost[] = initialPosts;
      doc.forEach((d: any) => {
        arrPosts.unshift(d.data());
      });
      setPosts(arrPosts);
    });
    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      {" "}
      {posts.map((post, index) => (
        <Card key={post.createdAt + index}>
          <Link
            key={post.author._id}
            to={`/profile/${post.author._id}`}
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#111",
            }}
          >
            <Box
              sx={{
                position: "relative",
                marginRight: 2,

                overflow: "hidden",
                width: 48,
                height: 48,
              }}
            >
              <Avatar
                src={post.author.avatar}
                alt="avatar"
                sx={{ width: "48", height: "48", borderRadius: "50%" }}
              />
            </Box>
            <div>
              <div style={{ fontSize: 14 }}> {post.author.name}</div>

              <div style={{ fontSize: 10, opacity: "0.6" }}>
                {post.createdAt}
              </div>
            </div>
          </Link>
          <p>{post.content}</p>
          {post.images?.length && (
            <ImageList variant="quilted" cols={3} gap={8}>
              {post.images.map((image) => (
                <ImageListItem key={image}>
                  <img src={image} alt={""} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          )}
        </Card>
      ))}
    </>
  );
};

export default Posts;
