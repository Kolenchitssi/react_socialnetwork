import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import {
  Alert,
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Fab,
} from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import React, { FC, MouseEvent, useEffect, useState } from "react";
import { IMessage } from "../../../types";
import useAuth from "../../providers/useAuth";
import Card from "../../Ui/Card";
import css from "./Messages.module.scss";
import { borderRadius } from "@mui/system";

const Messages: FC = () => {
  const { user, db } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  //! Чтение и отображение постов из БД
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (doc) => {
      const arrMessage: IMessage[] = [];
      doc.forEach((d: any) => {
        arrMessage.push(d.data);
      });
      setMessages(arrMessage);
    });
    return () => {
      unsub();
    };
  }, []);

  //запись сообщения в Базу Данных
  const addMessageHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    if (true) {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          user: user,
          message, //аналогично messages:messages,
          createdAt: String(new Date()),
        });
      } catch (e: any) {
        setError(e);
      }
      setMessage("");
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Card>
        {/* <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className="header-message">
              Chat
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={css.chatSection}>
          <Grid item xs={3} className={css.borderRight500}>
            <List>
              <ListItem button key="RemySharp">
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="John Wick"></ListItemText>
              </ListItem>
            </List>
            <Divider />
            <Grid item xs={12} style={{ padding: "10px" }}>
              <TextField
                id="outlined-basic-email"
                label="Search"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Divider />
            <List>
              <ListItem button key="RemySharp">
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
                <ListItemText secondary="online"></ListItemText>
              </ListItem>
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Alice">Alice</ListItemText>
              </ListItem>
              <ListItem button key="CindyBaker">
                <ListItemIcon>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
              </ListItem>
            </List>
          </Grid> */}

        <Grid item xs={12}>
          <List className={css.messageArea} sx={{ overflowY: "auto" }}>
            {messages.map((msg, index) => {
              let classItem;
              if (msg.user._id === user?._id) {
                classItem = css.myMessage;
              } else {
                classItem = css.alienMessage;
              }
              return (
                <ListItem key={index} className={classItem}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Avatar
                        className={classItem + " " + css.avatar}
                        src={msg.user.avatar}
                        sx={{ width: "30", height: "30" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText primary={msg.message}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText
                        secondary={`${msg.user.name} : ${msg.createdAt || ""}`}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={10}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </Grid>
            <Grid xs={2} sx={{ paddingLeft: "20px" }}>
              <Fab
                color="primary"
                aria-label="add"
                onClick={addMessageHandler}
                sx={{ borderRadius: "30%" }}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Card>
    </>
  );
};

export default Messages;
