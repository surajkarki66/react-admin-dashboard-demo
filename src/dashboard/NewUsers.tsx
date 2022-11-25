import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import CustomerIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";
import { useGetList } from "react-admin";

import CardWithIcon from "./CardWithIcon";
import { IUser } from "../types";

const NewUsers: React.FC = () => {
  const { isLoading, data } = useGetList<IUser>("users", {
    filter: {},
    sort: { field: "name", order: "ASC" },
    pagination: { page: 1, perPage: 10 },
  });
  return (
    <CardWithIcon
      to="/users"
      icon={CustomerIcon}
      title="New Users"
      subtitle="20"
    >
      <List sx={{ display: isLoading ? "none" : "block" }}>
        {data
          ? data.map((record: IUser) => (
              <ListItem
                button
                to={`/users/${record.id}`}
                component={Link}
                key={record.id}
              >
                <ListItemAvatar>
                  <Avatar src={`${record.avatar}?size=32x32`} />
                </ListItemAvatar>
                <ListItemText primary={`${record.name}`} />
              </ListItem>
            ))
          : null}
      </List>
      <Box flexGrow={1}>&nbsp;</Box>
      <Button
        sx={{ borderRadius: 0 }}
        component={Link}
        to="/users"
        size="small"
        color="primary"
      >
        <Box p={1} sx={{ color: "primary.main" }}>
          All Users
        </Box>
      </Button>
    </CardWithIcon>
  );
};

export default NewUsers;
