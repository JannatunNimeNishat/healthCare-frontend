import { Box, Button, Stack, TextField } from "@mui/material";


const DoctorsPage = () => {
    return (
        <Box>
            <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            >
                <Button>CREATE NEW DOCTOR</Button>
                <TextField size="small" placeholder="Search doctors" />
            </Stack>
        </Box>
    );
};

export default DoctorsPage;