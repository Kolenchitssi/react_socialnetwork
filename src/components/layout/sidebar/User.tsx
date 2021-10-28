import { signOut } from "@firebase/auth";
import { ExitToApp, Logout } from "@mui/icons-material";
import { Avatar, Button, Card, Chip, Icon, ListItemIcon } from "@mui/material";
import { display, flexbox } from "@mui/system";
import React, { FC } from "react";
import useAuth from "../../providers/useAuth";

const User: FC = () => {
  const { user, ga } = useAuth();
  return (
    <Card
      variant="elevation"
      sx={{
        padding: 2,
        backgroundColor: "#f1f7fa",
        borderRadius: 3,
        border: "none",
        position: "relative",
        marginBottom: 4,
      }}
    >
      <Chip
        avatar={<Avatar alt="" src={user?.avatar} variant="circular" />}
        label={user?.name || "Без имени"}
        variant="outlined"
        sx={{ marginBottom: "10px", display: "flex" }}
      ></Chip>
      <div style={{ display: "flex" }}>
        <Button
          variant="text"
          color="primary"
          size="small"
          sx={{ marginLeft: "auto", marginRight: "auto" }}
          onClick={() => signOut(ga)}
        >
          Выйти <Logout />
        </Button>
      </div>
    </Card>
  );
};

export default User;
