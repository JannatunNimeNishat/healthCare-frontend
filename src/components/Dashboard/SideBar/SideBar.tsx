import { Box, List, Stack, Toolbar, Typography } from "@mui/material";

import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { IUserRole } from "@/types";
import SideBarItem from "./SideBarItem";
import { getUserInfo } from "@/services/actions/auth.sevices";
import { useEffect, useState } from "react";
const SideBar = () => {
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const { role } = getUserInfo() as any;
    setUserRole(role);
  }, []);

  return (
    <Box>
      <Stack
        direction="row"
        gap={1}
        justifyContent={"center"}
        alignItems={"center"}
        component={Link}
        href={"/"}
        sx={{ py: 1, mt: 1 }}
      >
        <Image src={assets.svgs.logo} width={40} height={40} alt="" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
        >
          PH Health Care
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as IUserRole).map((item, index) => (
          <SideBarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
