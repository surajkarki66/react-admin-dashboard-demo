import { useRecordContext } from "react-admin";

import { IUser } from "../types";

const UserTitle: React.FC = () => {
  const record = useRecordContext<IUser>();
  return <span>User {record ? `"${record.name}"` : ""}</span>;
};

export default UserTitle;
