import * as React from "react";
import { Box, Card, CardActions, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import { Theme } from "@mui/material/styles";
import { useTranslate } from "react-admin";

import publishArticleImage from "./work_together.svg";

const Welcome: React.FC = () => {
  const translate = useTranslate();

  return (
    <Card
      sx={{
        background: (theme: Theme) =>
          theme.palette.mode === "dark"
            ? "#535353"
            : `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,

        color: "#fff",
        padding: "20px",
        marginTop: 2,
        marginBottom: "1em",
      }}
    >
      <Box display="flex">
        <Box flex="1">
          <Typography variant="h5" component="h2" gutterBottom>
            Welcome to the react-admin admin dashboard demo
          </Typography>
          <Box maxWidth="40em">
            <Typography variant="body1" component="p" gutterBottom>
              This is the admin of an imaginary . Feel free to explore and
              modify the data - it's local to your computer, and will reset each
              time you reload.
            </Typography>
          </Box>
          <CardActions
            sx={{
              padding: { xs: 0, xl: null },
              flexWrap: { xs: "wrap", xl: null },
              "& a": {
                marginTop: { xs: "1em", xl: null },
                marginLeft: { xs: "0!important", xl: null },
                marginRight: { xs: "1em", xl: null },
              },
            }}
          >
            <Button
              variant="contained"
              href="https://marmelab.com/react-admin"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
            <Button
              variant="contained"
              href="https://github.com/marmelab/react-admin/tree/master/examples/demo"
              startIcon={<CodeIcon />}
            >
              Source Code
            </Button>
          </CardActions>
        </Box>
        <Box
          display={{ xs: "none", sm: "none", md: "block" }}
          sx={{
            background: `url(${publishArticleImage}) top right / cover`,
            marginLeft: "auto",
          }}
          width="16em"
          height="9em"
          overflow="hidden"
        />
      </Box>
    </Card>
  );
};

export default Welcome;
