import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTranslate } from "react-admin";

import CardWithIcon from "./CardWithIcon";

interface Props {
  value?: number;
}

const NewOrders: React.FC<Props> = (props) => {
  const { value } = props;
  const translate = useTranslate();
  return (
    <CardWithIcon
      to="/#"
      icon={ShoppingCartIcon}
      title="Latest Orders"
      subtitle={value}
    />
  );
};

export default NewOrders;
