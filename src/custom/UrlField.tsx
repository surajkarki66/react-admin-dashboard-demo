import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useRecordContext } from "react-admin";

import { IPost } from "../types";

type Prop = {
  source: string;
};
const UrlField: React.FC<Prop> = ({ source }) => {
  const record = useRecordContext<IPost>();
  return record ? (
    <Link href={record[source]} sx={{ textDecoration: "none" }}>
      {record[source]}
      <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  ) : null;
};

export default UrlField;
