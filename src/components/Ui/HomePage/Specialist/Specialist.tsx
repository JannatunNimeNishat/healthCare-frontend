import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30, // 30 sec por por data punorai neya asbe
    },
  });
  const { data: specialist } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            textAlign: "start",
            zIndex: 1,
          }}
        >
          <Typography variant={"h4"} fontWeight={600}>
            Explore Treatments Across Specialties
          </Typography>
          <Typography component={"p"} fontWeight={300} fontSize={18}>
            Experienced Doctors Across All Specialties
          </Typography>
        </Box>
        {/* cards */}
        <Stack direction={"row"} gap={4} mt={5}>
          {specialist.slice(0,6).map((specialty: any) => (
            <Box
              key={specialty.id}
              sx={{
                flex: 1,
                width: "150px",
                backgroundColor: "rgba(245,245,245,1)",
                border: "1px solid rgba(250,250,250,1)",
                borderRadius: "10px",
                textAlign: "center",
                padding: "40px 10px",
                "& img": {
                  width: "50px",
                  height: "50px",
                  margin: "0 auto",
                },
                "&:hover": {
                  border: "1px solid blue",
                  padding: "40px 10px",
                  borderRadius: "10px",
                },
              }}
            >
              <Image
                width={100}
                height={100}
                src={specialty.icon}
                alt="specialty icon"
              />
              <Box>
                <Typography
                  component={"p"}
                  fontWeight={600}
                  fontSize={18}
                  mt={2}
                >
                  {specialty.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
        <Button variant="outlined" 
        sx={{
            marginTop:"20px"
        }}
        >View all</Button>
      </Box>
    </Container>
  );
};

export default Specialist;
