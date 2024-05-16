"use client";
import { Box, Button, Stack, TextField } from "@mui/material";

import { useState } from "react";
import SpecialtyModal from "./components/SpecialtyModal";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  return (
    <Box>
      {/* nav */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>
      {/* table */}
      <Box>
        <h1>Display Specialties</h1>
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
