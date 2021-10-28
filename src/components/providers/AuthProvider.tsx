import { Auth, getAuth, onAuthStateChanged } from "@firebase/auth";
import { createContext, FC, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router";
import { IUser, TypeSetState } from "../../types";
import { users } from "../layout/sidebar/dataUser";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const ga = getAuth();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser({
          _id: authUser.uid,
          avatar: users[0].avatar,
          name: authUser?.displayName || "",
        });
      } else {
        setUser(null);
      }
    });
    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(() => ({ user, setUser, ga }), [user, ga]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
