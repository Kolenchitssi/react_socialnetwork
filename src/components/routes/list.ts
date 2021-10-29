import Auth from "../pages/Auth/Auth";
import Friends from "../pages/Friends/Friends";
import Home from "../pages/Home/Home";
import Conversation from "../pages/Messages/Conversation";
import Messages from "../pages/Messages/Messages";
import Profile from "../pages/Profile/Profile";

export const routes = [
  { path: "/", exact: true, component: Home, auth: true },
  { path: "/profile", exact: false, component: Profile, auth: true },
  { path: "/messages", exact: true, component: Messages, auth: true },
  { path: "/message/:id", exact: false, component: Conversation, auth: true },
  { path: "/friends/:id", exact: false, component: Friends, auth: true },
  { path: "/auth", exact: true, component: Auth, auth: false },
];
