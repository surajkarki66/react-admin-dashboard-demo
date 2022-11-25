import React, { CSSProperties } from "react";
import { useMediaQuery, Theme } from "@mui/material";

import Welcome from "./Welcome";
import NewPosts from "./NewPosts";
import LatestComments from "./LatestComments";
import NewUsers from "./NewUsers";
import NewOrders from "./NewOrders";
import AreaChart from "./AreaChart";
import MyPieChart from "./MyBarChart";

const styles = {
  flex: { display: "flex" },
  flexColumn: { display: "flex", flexDirection: "column" },
  leftCol: { flex: 1, marginRight: "0.5em" },
  rightCol: { flex: 1, marginLeft: "0.5em" },
  singleCol: { marginTop: "1em", marginBottom: "1em" },
};

const Spacer = () => <span style={{ width: "1em" }} />;
const VerticalSpacer = () => <span style={{ height: "1em" }} />;

const Dashboard: React.FC = () => {
  const isXSmall = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  return isXSmall ? (
    <div>
      <div style={styles.flexColumn as CSSProperties}>
        <Welcome />
        <NewPosts value={50} />
        <VerticalSpacer />
        <NewOrders value={10} />
        <VerticalSpacer />
        <MyPieChart />
      </div>
    </div>
  ) : isSmall ? (
    <div style={styles.flexColumn as CSSProperties}>
      <div style={styles.singleCol}>
        <Welcome />
      </div>
      <div style={styles.flex}>
        <NewPosts value={50} />
        <Spacer />
        <NewOrders value={10} />
      </div>
      <div style={styles.singleCol}>
        <AreaChart />
      </div>
      <div style={styles.singleCol}>
        <MyPieChart />
      </div>
    </div>
  ) : (
    <>
      <Welcome />
      <div style={styles.flex}>
        <div style={styles.leftCol}>
          <div style={styles.flex}>
            <NewPosts value={50} />
            <Spacer />
            <NewOrders value={10} />
          </div>
          <div style={styles.singleCol}>
            <AreaChart />
          </div>
          <div style={styles.singleCol}>
            <MyPieChart />
          </div>
        </div>
        <div style={styles.rightCol}>
          <div style={styles.flex}>
            <LatestComments />
            <Spacer />
            <NewUsers />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
