import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import idImg from "../../assets/id.png";

const ActivateWillPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const API_URL = "http://localhost:8000";
  const onSubmit = async (data) => {
    console.log(data);
    // Contruct request options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ownerIcNumber: data.ownerIcNumber,
      }),
    };
    const response = await fetch(
      `${API_URL}/activate-will`,
      requestOptions
    ).then((res) => {
      return res.json();
    });
    console.log(response);
    if (response.isActive) {
    }
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
            // backgroundColor: "primary.dark",
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
                Activate Will
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={idImg} alt="" height="200px" />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={!!errors.ownerIcNumber}
                helperText="This field is required"
                fullWidth
                label="Identity Number"
                variant="outlined"
                {...register("ownerIcNumber", { required: true })}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmit(onSubmit)}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ActivateWillPage;
