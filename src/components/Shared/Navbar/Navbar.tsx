"use client";
import { getUserInfo, isLoggedIn } from "@/services/actions/auth.sevices";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  const userInfo = getUserInfo();
 
  return (
    <Container>
      <Stack
        py={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography component={Link} href="/" variant="h4" fontWeight={600}>
          P
          <Box component={"span"} color={"primary.main"}>
            H
          </Box>{" "}
          Health Care
        </Typography>
        {/* menu options */}
        <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography>Health Plans</Typography>
          <Typography>Medicine</Typography>
          <Typography>Diagnostics</Typography>
          <Typography>NGOs</Typography>
        </Stack>
        {/* button */}
        {userInfo?.userId ? (
          <Button color="error">Logout</Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
