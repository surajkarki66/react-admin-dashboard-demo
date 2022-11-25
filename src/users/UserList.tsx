import { useMediaQuery, Box, Drawer } from "@mui/material";
import {
  List,
  SimpleList,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  EditButton,
} from "react-admin";
import { Theme } from "@mui/material/styles";
import { matchPath, useLocation, useNavigate } from "react-router-dom";

import UrlField from "../custom/UrlField";
import UserEdit from "./UserEdit";
import { useCallback } from "react";

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <TextInput source="username" label="Username" />,
  <TextInput source="email" label="Email" />,
  <TextInput source="address.street" label="Street" />,
  <TextInput source="phone" label="Phone" />,
];

const UserList: React.FC = (props) => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();
  const match = matchPath("/users/:id", location.pathname);
  const handleClose = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  return (
    <Box display="flex">
      <List {...props} filters={postFilters}>
        {isSmall ? (
          <SimpleList
            primaryText={(record) => record.name}
            secondaryText={(record) => record.username}
            tertiaryText={(record) => record.email}
          />
        ) : (
          <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <UrlField source="website" />
            <EditButton />
          </Datagrid>
        )}
      </List>
      <Drawer
        variant="persistent"
        open={!!match}
        anchor="right"
        onClose={handleClose}
        sx={{ zIndex: 100 }}
      >
        {/* To avoid any errors if the route does not match, we don't render at all the component in this case */}
        {!!match && (
          <UserEdit id={(match as any).params.id} onCancel={handleClose} />
        )}
      </Drawer>
    </Box>
  );
};

export default UserList;
