import * as React from "react";
import { ReferenceField, Show, SimpleShowLayout, TextField } from "react-admin"; // eslint-disable-line import/no-unresolved

const CommentShow: React.FC = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="postId" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="email" />
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
);

export default CommentShow;
