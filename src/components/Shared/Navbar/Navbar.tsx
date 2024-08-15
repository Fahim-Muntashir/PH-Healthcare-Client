'use client';
import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.service";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const userInfo = getUserInfo();

    const router = useRouter()
    console.log(isLoggedIn());

    const handleLogout = () => {
        removeUser();
        router.refresh()
    }

    return (
        <Container>
            <Stack alignItems="center" py={2} direction="row"
                justifyContent="space-between">
                <Typography variant="h5" component="h1" fontWeight={600}>
                    P<Box component="span" color="primary.main">H</Box> Health Care
                </Typography>

                <Stack direction="row" gap={4} justifyContent="space-between">
                    <Typography component={Link} href="/login">Consultation</Typography>
                    <Typography component={Link} href="/login">Health Plans</Typography>
                    <Typography component={Link} href="/login">Medicine</Typography>
                    <Typography component={Link} href="/login">Diagonostics</Typography>
                    <Typography component={Link} href="/login">NGOs</Typography>
                </Stack>
                {userInfo?.userId ?

                    (< Button color="error" onClick={handleLogout}>Logout</Button>
                    ) :
                    (< Button component={Link} href="/login">Login</Button>)}
            </Stack>
        </Container >
    );
};

export default Navbar;