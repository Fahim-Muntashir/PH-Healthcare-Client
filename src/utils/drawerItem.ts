import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";
// icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import TryIcon from '@mui/icons-material/Try';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReviewsIcon from '@mui/icons-material/Reviews';
export const drawerItem =(role:UserRole):DrawerItem[]=> {
    const roleMenus: DrawerItem[] = [];
    
    switch (role) {
        case USER_ROLE.SUPER_ADMIN:
            roleMenus.push({
                title: "Dashboard",
                path: `${role}`,
                icon: DashboardIcon,
            }, {
                title: "Manage Users",
                path: `${role}/manage-users`,
                icon: GroupsIcon,
            }
            );

            break;
            
        case USER_ROLE.ADMIN:
            roleMenus.push({
                title: "Dashboard",
                path: `${role}`,
                icon: DashboardIcon,
            }, {
                title: "Specialties",
                path: `${role}/specialties`,
                icon: TryIcon,
            }, {
                title:"Doctors",
                path: `${role}/doctors`,
                icon: TryIcon,
            },
            {
                title:"Schedules",
                path: `${role}/schedules`,
                icon: CalendarMonthIcon,
                },
                {
                    title:"Appoinments",
                    path: `${role}/appoinments`,
                    icon: CalendarMonthIcon,
                }, {
                    title:"Reviews",
                    path: `${role}/doctors`,
                    icon: ReviewsIcon,
            }
            );

            break;
        

        case USER_ROLE.DOCTOR:
                roleMenus.push({
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },  
                {
                    title:"Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonthIcon,
                    },
                    {
                        title:"Appoinments",
                        path: `${role}/appoinments`,
                        icon: CalendarMonthIcon,
                    }, 
                );
    
                break;
            
        case USER_ROLE.PATIENT:
                    roleMenus.push({
                        title: "Appoinments",
                        path: `${role}/appoinments`,
                        icon: DashboardIcon,
                    },  
                    {
                        title:"Prescriptions",
                        path: `${role}/prescriptions`,
                        icon: CalendarMonthIcon,
                        },
                        {
                            title:"Payment History",
                            path: `${role}/payment-history`,
                            icon: CalendarMonthIcon,
                        }, 
                    );
        
                  default:    
                    break;
                
    
    }


    return [...roleMenus];
}