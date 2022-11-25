import { Create, SimpleForm, ReferenceInput, TextInput } from "react-admin";

const PostCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);

export default PostCreate;
