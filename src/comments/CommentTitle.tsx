import { useRecordContext } from "react-admin";
import { IComment } from "../types";

const CommentTitle: React.FC = () => {
  const record = useRecordContext<IComment>();
  return <span>Comment {record ? `"${record.id}"` : ""}</span>;
};

export default CommentTitle;
