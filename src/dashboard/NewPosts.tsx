import * as React from "react";
import PostAddIcon from "@mui/icons-material/PostAdd";

import CardWithIcon from "./CardWithIcon";

interface Props {
  value?: number;
}

const NewPosts: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <CardWithIcon
      to="/#"
      icon={PostAddIcon}
      title="New Posts"
      subtitle={value}
    />
  );
};

export default NewPosts;
