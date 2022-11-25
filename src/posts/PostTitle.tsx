import { useRecordContext } from "react-admin";

import { IPost } from "../types";

const PostTitle: React.FC = () => {
  const record = useRecordContext<IPost>();
  return <span>Post {record ? `"${record.id}"` : ""}</span>;
};

export default PostTitle;
