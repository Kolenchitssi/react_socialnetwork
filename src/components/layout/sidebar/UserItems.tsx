import {
  Avatar,
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { QuestionAnswer } from "@mui/icons-material";
import { Box } from "@mui/system";
import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { users } from "./dataUser";

const UserItems: FC = () => {
  const history = useHistory();
  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: "#f1f7fa",
        borderRadius: 3,
        border: "none",
        position: "relative",
        marginBottom: 4,
      }}
    >
      {users.map((user) => (
        <Link
          key={user._id}
          to={`/profile/${user._id}`}
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
              src={user.avatar}
              alt="avatar"
              sx={{ width: "48", height: "48", borderRadius: "50%" }}
            />
            {user.isInNetwork && (
              <Box
                sx={{
                  backgroundColor: "#4fb14f",
                  border: "2px solid #f1f7fa",
                  width: 10,
                  height: 10,
                  position: "absolute",
                  borderRadius: "50%",
                  bottom: 8,
                  right: 8,
                }}
              ></Box>
            )}
          </Box>

          <span style={{ fontSize: 14 }}> {user.name}</span>
        </Link>
      ))}
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history.push("/messages")}>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default UserItems;
