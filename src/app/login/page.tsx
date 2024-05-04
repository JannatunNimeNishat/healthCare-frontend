import assets from "@/assets";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          {/* logo */}
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          {/* form */}
          <Box>
            <form>
              <Grid container spacing={3} my={1}>
               
                {/* 2nd row1 */}
                <Grid item md={6}>
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                {/* 2nd row2 */}
                <Grid item md={6}>
                  <TextField
                    type="password"
                    label="Password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                  />
                </Grid>
                
              </Grid>
              {/* forget password */}
              <Typography mb={1} textAlign={"end"} component="p" fontWeight={300}>
               Forgot Password ?
              </Typography>

              {/* buttons */}
              <Button sx={{ margin: "10px 10px" }} fullWidth={true}>
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?
                <Link href={"/register"}> Create an account</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
