import React, { FC } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { menu } from "./dataMenu";

const Menu: FC = () => {
  const history = useHistory();
  return (
    <Card
      variant="elevation"
      sx={{
        padding: 2,
        backgroundColor: "#f1f7fa",
        borderRadius: 3,
        border: "none",
        position: "relative",
        marginBottom: 10,
      }}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.link + index} disablePadding>
            <ListItemButton onClick={() => history.push(item.link)}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default Menu;
