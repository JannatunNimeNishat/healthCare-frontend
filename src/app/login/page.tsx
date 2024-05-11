"use client";

import assets from "@/assets";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { storeUserInfo } from "@/services/actions/auth.sevices";
import { userLogin } from "@/services/actions/userLogin";
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
import { useRouter } from "next/navigation";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
  
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

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
            <PHForm onSubmit={handleLogin}>
              <Grid container spacing={3} my={1}>
                {/* 2nd row1 */}
                <Grid item md={6}>
                  <PHInput
                    name="email"
                    type="email"
                    label="Email"
                    fullWidth={true}
                  />
                </Grid>
                {/* 2nd row2 */}
                <Grid item md={6}>
                  <PHInput
                    name="password"
                    type="password"
                    label="Password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              {/* forget password */}
              <Typography
                mb={1}
                textAlign={"end"}
                component="p"
                fontWeight={300}
              >
                Forgot Password ?
              </Typography>

              {/* buttons */}
              <Button
                type="submit"
                sx={{ margin: "10px 10px" }}
                fullWidth={true}
              >
                Login
              </Button>
              <Typography component="p" fontWeight={300}>
                Don&apos;t have an account?
                <Link href={"/register"}> Create an account</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
