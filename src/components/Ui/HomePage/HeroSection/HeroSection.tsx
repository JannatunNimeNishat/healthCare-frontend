import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import asserts from "@/assets";
const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        my: 16,
      }}
    >
      {/* left */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={asserts.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Comes From
        </Typography>
        <Typography
          variant="h3"
          color={"primary.main"}
          component="h1"
          fontWeight={600}
        >
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{
            my: 4,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officia
          itaque quo laborum provident commodi. Nostrum dolore tempore ad vel
          veniam minima, assumenda itaque ducimus culpa dolorum necessitatibus
          nam ipsa.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button>Make Appointment</Button>
          <Button
            variant="outlined"
            sx={{
              marginLeft: "5px",
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      {/* right */}
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box  sx={{
          position: "absolute",
            left:"200px",
            top:"-30px"
        }}>
            <Image width={100} height={100} src={asserts.svgs.arrow} alt="arrow"/>
        </Box>
        <Box sx={{
            display: "flex",
            gap:2,
        }}>
             <Box mt={4}>
            <Image width={240} height={380} src={asserts.images.doctor1} alt="doctor1"/>
        </Box>
             <Box>
            <Image width={240} height={350} src={asserts.images.doctor2} alt="doctor2"/>
        </Box>
        </Box>
        <Box sx={{
          position: "absolute",
          top: "220px",
          left: "150px",

        }}>
        <Image width={240} height={240} src={asserts.images.doctor3} alt="doctor3"/>
        </Box>
        <Box sx={{
          position: "absolute",
          bottom:"-50px",
          right:0,
          zIndex:-1
        }}>
        <Image width={180} height={180} src={asserts.images.stethoscope} alt="stethoscope"/>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
