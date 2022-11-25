import * as React from "react";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import {
  DashboardMenuItem,
  MenuProps,
  useSidebarState,
  MenuItemLink,
} from "react-admin";

import users from "../users";
import posts from "../posts";
import comments from "../comments";
import SubMenu from "./SubMenu";

type MenuName = "menuPosts";

const Menu: React.FC = (props: MenuProps) => {
  const [state, setState] = React.useState({
    menuPosts: true,
  });
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState((state) => ({ ...state, [menu]: !state[menu] }));
  };
  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: (theme: Theme) =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <DashboardMenuItem />
      {/* Put custom menu here */}
      <SubMenu
        handleToggle={() => handleToggle("menuPosts")}
        isOpen={state.menuPosts}
        name="Posts"
        icon={<posts.icon />}
        dense={props.dense}
      >
        <MenuItemLink
          to="/posts"
          state={{ _scrollToTop: true }}
          primaryText="Posts"
          leftIcon={<posts.icon />}
          dense={props.dense}
        />
        <MenuItemLink
          to="/comments"
          state={{ _scrollToTop: true }}
          primaryText="Comments"
          leftIcon={<comments.icon />}
          dense={props.dense}
        />
      </SubMenu>
      <MenuItemLink
        to="/users"
        state={{ _scrollToTop: true }}
        primaryText="Users"
        leftIcon={<users.icon />}
        dense={props.dense}
      />
    </Box>
  );
};

export default Menu;
