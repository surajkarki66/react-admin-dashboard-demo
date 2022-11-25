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
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";
import { useGetList } from "react-admin";

import CardWithIcon from "./CardWithIcon";
import { IComment } from "../types";

const LatestComments: React.FC = () => {
  const { isLoading, data } = useGetList<IComment>("comments", {
    filter: {},
    sort: { field: "name", order: "ASC" },
    pagination: { page: 1, perPage: 10 },
  });
  return (
    <CardWithIcon
      to="/comments"
      icon={CommentIcon}
      title="New Comments"
      subtitle="20"
    >
      <List sx={{ display: isLoading ? "none" : "block" }}>
        {data
          ? data.map((record: IComment) => (
              <ListItem
                button
                to={`/comments/${record.id}`}
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
        to="/comments"
        size="small"
        color="primary"
      >
        <Box p={1} sx={{ color: "primary.main" }}>
          All Comments
        </Box>
      </Button>
    </CardWithIcon>
  );
};

export default LatestComments;
