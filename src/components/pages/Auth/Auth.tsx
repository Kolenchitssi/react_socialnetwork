import { Alert, Button, ButtonGroup, Grid, TextField } from "@mui/material";
import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import { IUserData } from "./types";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAuth from "../../providers/useAuth";
import { useHistory } from "react-router";

const Auth: FC = () => {
  const { ga, user } = useAuth(); //ga-getAuth
  const [isRegForm, setIsRegForm] = useState(false);

  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);
  const [error, setError] = useState("");

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const auth = getAuth();
    if (isRegForm) {
      try {
        const user = await createUserWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
        console.log(user);
      } catch (error: any) {
        setError(error.message);
      }
    } else {
      try {
        const user = await signInWithEmailAndPassword(
          ga,
          userData.email,
          userData.password
        );
        console.log(user);
      } catch (error: any) {
        setError(error.message);
      }
    }

    setUserData({
      email: "",
      password: "",
    });
  };

  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  return (
    <>
      {error && (
        <Alert severity="error" style={{ marginBottom: 20 }}>
          {error}
        </Alert>
      )}
      <Grid display="flex" justifyContent="center" alignItems="center">
        <form onSubmit={handleLogin}>
          <TextField
            type="email"
            id="emailId"
            label="Email"
            variant="outlined"
            required
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            sx={{
              display: "block",
              marginBottom: "12px ",
            }}
          />
          <TextField
            type="password"
            id="passwordId"
            label="Password"
            variant="outlined"
            value={userData.password}
            required
            sx={{ display: "block", marginBottom: "12px " }}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />

          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button type="submit" onClick={() => setIsRegForm(false)}>
              Auth
            </Button>
            <Button type="submit" onClick={() => setIsRegForm(true)}>
              Register
            </Button>
          </ButtonGroup>
        </form>
      </Grid>
    </>
  );
};

export default Auth;
