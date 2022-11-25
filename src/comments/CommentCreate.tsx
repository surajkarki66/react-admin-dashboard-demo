import * as React from "react";

import {
  Create,
  DateInput,
  TextInput,
  SimpleForm,
  required,
  minLength,
  ReferenceInput,
} from "react-admin";

const now = new Date();
const defaultSort = { field: "title", order: "ASC" };

const CommentCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput
        source="postId"
        reference="posts"
        validate={required()}
        sort={defaultSort}
        perPage={10000}
      />

      <TextInput source="author.name" validate={minLength(10)} />
      <DateInput source="created_at" defaultValue={now} />
      <TextInput fullWidth source="body" multiline />
    </SimpleForm>
  </Create>
);

export default CommentCreate;
