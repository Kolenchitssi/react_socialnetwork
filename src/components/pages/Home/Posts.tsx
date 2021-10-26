import { Avatar, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../../types";

interface IPosts {
  posts: IPost[];
}
const Posts: FC<IPosts> = ({ posts }) => {
  return (
    <>
      {" "}
      {posts.map((post) => (
        <Box
          sx={{
            border: "2px solid #ccc",
            borderRadius: "10px",
            padding: 2,
            marginTop: 4,
          }}
          key={post.createdAt}
        >
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
        </Box>
      ))}
    </>
  );
};

export default Posts;
