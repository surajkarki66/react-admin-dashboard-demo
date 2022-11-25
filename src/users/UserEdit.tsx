import { EditBase, SimpleForm, TextInput, EditProps } from "react-admin";
import { Box, Stack, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UserEditToolbar from "./UserEditToolbar";
import { IUser } from "../types";

interface Props extends EditProps<IUser> {
  onCancel: () => void;
}

const UserEdit: React.FC<Props> = ({ onCancel, ...props }) => (
  <EditBase {...props}>
    <Box pt={5} width={{ xs: "100vW", sm: 400 }} mt={{ xs: 2, sm: 1 }}>
      <Stack direction="row" p={2}>
        <Typography variant="h6" flex="1">
          User Details
        </Typography>
        <IconButton onClick={onCancel} size="small">
          <CloseIcon />
        </IconButton>
      </Stack>
      <SimpleForm toolbar={<UserEditToolbar />}>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" />
        <TextInput source="phone" />
        <TextInput source="website" />
      </SimpleForm>
    </Box>
  </EditBase>
);

export default UserEdit;
