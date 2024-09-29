import { Box, List, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import assests from "@/assets"
import Link from 'next/link';
import { drawerItem } from '@/utils/drawerItem';
import { UserRole } from '@/types';
import SidebarItem from './SidebarItem';


const Sidebar = () => {



    return (
        <Box>
            <Stack direction="row"
                sx={{
                    py: 1,
                    mt: 1,
                }}
                justifyContent={"center"}
                alignItems="center"
                gap={1}
                component={Link}
                href={"/"}
            >
                <Image src={assests.svgs.logo} width={40} height={40} alt='logo'></Image>

                <Typography variant='h6' component="h1">
                    PH Health Care
                </Typography>
            </Stack>

            <List>
                {drawerItem("admin" as UserRole).map((item, index) => (
                    <SidebarItem key={index} index={index} item={item}></SidebarItem>
                ))}
            </List>
        </Box>
    );
};

export default Sidebar;