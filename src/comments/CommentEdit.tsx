import { Edit, SimpleForm, ReferenceInput, TextInput } from "react-admin";

import CommentTitle from "./CommentTitle";

const CommentEdit: React.FC = (props) => (
  <Edit {...props} title={<CommentTitle />}>
    <SimpleForm>
      <ReferenceInput source="postId" reference="posts" />
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export default CommentEdit;
