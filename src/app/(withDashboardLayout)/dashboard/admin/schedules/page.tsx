"use client";
import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import ScheduleModal from "./components/ScheduleModal";

const SchedulesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>CREATE SCHEDULE</Button>
      <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box my={5}>Display Schedule</Box>
    </Box>
  );
};

export default SchedulesPage;
