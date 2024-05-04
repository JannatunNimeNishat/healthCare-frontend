import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Container sx={{ padding: "50px" }}>
      <Stack
        sx={{
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
            textAlign:"center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
                <Image src={assets.svgs.logo} width={50} height={50} alt="logo"/>
            </Box>
            <Box>
                <Typography variant="h6" fontWeight={600}>Patient Register</Typography>
            </Box>
          </Stack>
          <Box>
          <form>
          <Grid container spacing={3} my={1}>
            {/* 1st row */}
            <Grid item md={12}>
            <TextField  
            label="Name"
             variant="outlined"
             size="small"
             fullWidth={true}
             />
            </Grid>
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
            {/* 3rd row1 */}
            <Grid item md={6}>
            <TextField  
            type="tel"
            label="Contact Number"
             variant="outlined"
             size="small"
             fullWidth={true}
             />
            </Grid>
            {/* 3rd row2 */}
            <Grid item md={6}>
            <TextField  
            type="text"
            label="Address"
             variant="outlined"
             size="small"
             fullWidth={true}
             />
            </Grid>
          </Grid>
          {/* buttons */}
          <Button sx={{margin:"10px 10px"}} fullWidth={true}>Register</Button>
          <Typography component="p" fontWeight={300}>Do you already have an account? 
          <Link href={'/login'}> Login</Link>
          </Typography>
          </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
