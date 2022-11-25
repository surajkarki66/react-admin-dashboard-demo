import * as React from "react";
import { AppBar, Logout, UserMenu } from "react-admin";
import { Link } from "react-router-dom";
import {
  Box,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Theme,
  Typography,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const ConfigurationMenu = React.forwardRef((props, ref) => {
  return (
    <MenuItem
      component={Link}
      // @ts-ignore
      ref={ref}
      {...props}
      to="/configuration"
    >
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText>Configuration</ListItemText>
    </MenuItem>
  );
});
const CustomUserMenu: React.FC = () => (
  <UserMenu>
    <ConfigurationMenu />
    <Logout />
  </UserMenu>
);

const CustomAppBar: React.FC = (props: any) => {
  const isLargeEnough = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.up("sm")
  );
  return (
    <AppBar
      {...props}
      color="secondary"
      elevation={1}
      userMenu={<CustomUserMenu />}
    >
      <Typography
        variant="h6"
        color="inherit"
        sx={{
          flex: 1,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
        id="react-admin-title"
      />
      {/* Add  Navigation bar content here */}
      {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
    </AppBar>
  );
};

export default CustomAppBar;
