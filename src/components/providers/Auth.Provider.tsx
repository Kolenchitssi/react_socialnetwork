import { createContext, FC, useState } from "react";
import { IUser, TypeSetState } from "../../types";

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
}

const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
