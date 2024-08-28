import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from '@/assets/landing_page/facebook.png'

const Footer = () => {
    return (
        <Box py={5} bgcolor={"rgb(17, 26,34)"}>
            <Container >
                <Stack direction="row" justifyContent={'center'} gap={4}>
                    <Typography color="#fff" component={Link} href="/login">Consultation</Typography>
                    <Typography color="#fff" component={Link} href="/login">Health Plans</Typography>
                    <Typography color="#fff" component={Link} href="/login">Medicine</Typography>
                    <Typography color="#fff" component={Link} href="/login">Diagonostics</Typography>
                    <Typography color="#fff" component={Link} href="/login">NGOs</Typography>
                </Stack>
                <Stack direction="row" gap="2" py={3} justifyContent={'center'} >
                    <Image src={facebookIcon} width={30} height={30} alt="fb"></Image>
                    <Image src={facebookIcon} width={30} height={30} alt="fb"></Image>
                    <Image src={facebookIcon} width={30} height={30} alt="fb"></Image>
                    <Image src={facebookIcon} width={30} height={30} alt="fb"></Image>
                </Stack>

                {/* <div className="border-b-1px border-dashed"> */}
                {/* </div> */}

                <Box sx={{
                    border: "1px dashed lightgray",
                }}>

                </Box>

                <Stack direction="row" gap="2" py={3} justifyContent={"space-between"} alignItems={"center"} >
                    <Typography component="p" color="#fff">
                        &copy; 2024 PH HealthCare. All Right Reserved.
                    </Typography>
                    <Typography variant="h5" component="h1" fontWeight={600} color="white">
                        P<Box component="span" color="primary.main">H</Box> Health Care
                    </Typography>

                    <Typography component="p" color="#fff">
                        Privacy Policy ! Terms and Conditions
                    </Typography>

                </Stack>
            </Container>
        </Box >
    );
};

export default Footer;