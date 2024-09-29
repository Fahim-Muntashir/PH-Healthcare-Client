import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';
import assests from "@/assets"
import Link from 'next/link';


const Sidebar = () => {

    const drawer = (
        <div>

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

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
            {
                drawer
            }
        </Box>
    );
};

export default Sidebar;