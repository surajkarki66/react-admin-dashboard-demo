import { Edit, SimpleForm, ReferenceInput, TextInput } from "react-admin";

import PostTitle from "./PostTitle";

const PostEdit: React.FC = (props) => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export default PostEdit;
