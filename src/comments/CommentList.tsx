import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  useMediaQuery,
  Theme,
} from "@mui/material";
import jsonExport from "jsonexport/dist";
import {
  ListBase,
  ListToolbar,
  ListActions,
  EditButton,
  Pagination,
  ReferenceField,
  ReferenceInput,
  SearchInput,
  ShowButton,
  SimpleList,
  TextField,
  Title,
  downloadCSV,
  useListContext,
} from "react-admin"; // eslint-disable-line import/no-unresolved
import { IPost, IComment } from "../types";

const commentFilters = [<SearchInput source="q" alwaysOn />];

const exporter = (records: any, fetchRelatedRecords: any) =>
  fetchRelatedRecords(records, "postId", "posts").then((posts: IPost) => {
    const data = records.map((record: IComment) => {
      const { email, ...recordForExport } = record; // omit author
      recordForExport.author_email = email;
      recordForExport.post_title = posts[record.postId].title;
      return recordForExport;
    });
    const headers = [
      "id",
      "author_name",
      "postId",
      "post_title",
      "created_at",
      "body",
    ];

    return jsonExport(data, { headers }, (error: any, csv: any) => {
      if (error) {
        console.error(error);
      }
      downloadCSV(csv, "comments");
    });
  });

const CommentGrid: React.FC = () => {
  const { data } = useListContext();

  if (!data) return null;
  return (
    <Grid spacing={2} container>
      {data.map((record) => (
        <Grid item key={record.id} sm={12} md={6} lg={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              className="comment"
              // title={<TextField record={record} source="author.name" />}
              // subheader={<DateField record={record} source="created_at" />}
              title="Author Name"
              subheader="Thu Nov 24 2022"
              avatar={
                <Avatar>
                  <PersonIcon />
                </Avatar>
              }
            />
            <CardContent>
              <TextField
                record={record}
                source="body"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              />
            </CardContent>
            <CardContent sx={{ flexGrow: 1 }}>
              <ReferenceField record={record} source="postId" reference="posts">
                {" "}
                <TextField source="title" />
              </ReferenceField>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <EditButton record={record} />
              <ShowButton record={record} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

CommentGrid.defaultProps = {
  data: {},
  ids: [],
};

const CommentMobileList = () => (
  <SimpleList
    primaryText={(record) => record.author.name}
    secondaryText={(record) => record.body}
    tertiaryText={(record) => new Date(record.created_at).toLocaleDateString()}
    leftAvatar={() => <PersonIcon />}
  />
);

const CommentList: React.FC = (props) => (
  <ListBase {...props} perPage={6} exporter={exporter}>
    <ListView />
  </ListBase>
);

const ListView = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const { defaultTitle } = useListContext();
  return (
    <>
      <Title defaultTitle={defaultTitle} />
      <ListToolbar filters={commentFilters} actions={<ListActions />} />
      {isSmall ? <CommentMobileList /> : <CommentGrid />}
      <Pagination rowsPerPageOptions={[6, 9, 12]} />
    </>
  );
};

export default CommentList;
