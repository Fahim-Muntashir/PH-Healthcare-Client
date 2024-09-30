import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { DrawerItem } from '@/types';
import { usePathname } from 'next/navigation';

type IProps = {
    item: DrawerItem
    index: number;
}


const SidebarItem = ({ item }: IProps) => {

    const linkPath = `/dashboard/${item.path}`

    const pathname = usePathname();


    return (
        <Link href={linkPath}>
            <ListItem disablePadding sx={{
                ...(pathname === linkPath ? {
                    borderRight: "3px solid #1586FD",
                    "& svg": {
                        color: "#1586FD"
                    }
                } : {}),
                mb: 1
            }}>
                <ListItemButton>
                    <ListItemIcon>
                        {
                            item.icon && <item.icon />
                        }
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            </ListItem>
        </Link>
    );
};

export default SidebarItem;