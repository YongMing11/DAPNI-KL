import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import signImg from "../../assets/sign.png";

const ValidateWillPage = () => {
  const handleValidate = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          marginY: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 600,
            height: 300,
          }}
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Typography
                align="center"
                variant="h3"
                component="h2"
                sx={{
                  textDecoration:
                    "linear-gradient(to right, #E6E6FA, #cbcbdf) !important",
                  background: "-webkit-linear-gradient(#614385 , #516395)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                Validate Will
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={signImg} alt="" height="200px" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <p>Deceased ID: 980101801980</p>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleValidate()}
              >
                Validate
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ValidateWillPage;
