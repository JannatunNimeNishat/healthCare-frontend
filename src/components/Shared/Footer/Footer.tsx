import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebookIcon from "@/assets/landing_page/facebook.png";
const Footer = () => {
  return (
    <Box bgcolor={"rgb(17, 26, 34)"} py={5}>
      <Container color={"#fff"}>
        <Stack
          color={"#fff"}
          direction={"row"}
          gap={4}
          justifyContent={"center"}
        >
          <Typography color={"#fff"} component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color={"#fff"}>Health Plans</Typography>
          <Typography color={"#fff"}>Medicine</Typography>
          <Typography color={"#fff"}>Diagnostics</Typography>
          <Typography color={"#fff"}>NGOs</Typography>
        </Stack>
        <Stack
          color={"#fff"}
          direction={"row"}
          gap={2}
          py={3}
          justifyContent={"center"}
        >
          <Image src={facebookIcon} width={30} height={30} alt="facebokk" />
          <Image src={facebookIcon} width={30} height={30} alt="facebokk" />
          <Image src={facebookIcon} width={30} height={30} alt="facebokk" />
          <Image src={facebookIcon} width={30} height={30} alt="facebokk" />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignContent={"center"}
          gap={2}
          py={3}
        >
          <Typography component="p" color={"white"}>
            &copy;2024 Ph HealthCare. All Rights Reserved.{" "}
          </Typography>
          <Typography
            color={"white"}
            component={Link}
            href="/"
            variant="h4"
            fontWeight={600}
          >
            P
            <Box component={"span"} color={"primary.main"}>
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color={"white"}>
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
