import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import assets from "@/assets";

const HeroSection = () => {
    return (
        <Container sx={{
            display: 'flex',
            direction: 'row',
            my: 16,
        }}>
            <Box sx={{
                flex: 1,
                position: 'relative',

            }}>
                <Box sx={{
                    position: 'absolute',
                    width: "700px",
                    top: "-90px",
                    left: "-120px"
                }}>
                    <Image src={assets.svgs.grid} alt='grid'></Image>
                </Box>

                <Typography variant='h3' component="h1" fontWeight={600}>  Healther Hearts   </Typography>
                <Typography variant='h3' component="h1" fontWeight={600}>Comes From </Typography>
                <Typography color="primary.main" variant='h3' component="h1" fontWeight={600}>Preventive Care</Typography>


                <Typography sx={{ my: 4 }} variant='h6' component="p" fontWeight={400}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae accusantium odit a, obcaecati illo aut voluptas perspiciatis optio inventore culpa dolores dolorum!
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button>Make Appointment</Button>
                    <Button variant='outlined' sx={{
                        marginLeft: "5px"
                    }}>Contact Us</Button>
                </Box>

            </Box>
            <Box sx={{
                p: 1,
                flex: 1,
                display: "flex",
                justifyContent: "center",
                position: "relative",
                mt: 0
            }}>
                <Box sx={{
                    position: "absolute",
                    left: "200px",
                    top: "-30px"
                }}>
                    <Image src={assets.svgs.arrow} alt='arrow' width={100} height={100}></Image>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 4
                }}>
                    <Box>
                        <Image src={assets.images.doctor1} alt="doctor1 " width={240} height={380} />
                    </Box>
                    <Box>
                        <Image src={assets.images.doctor2} alt="doctor1 " width={240} height={350} />
                    </Box>
                </Box>

                <Box sx={{
                    position: "absolute",
                    top: "220px",
                    left: "150px"
                }}>
                    <Image width={230} height={230} src={assets.images.doctor3} alt="doctor 3" />
                </Box>



                <Box sx={{
                    position: "absolute",
                    bottom: "-50px",
                    right: "0",
                    zIndex: -1,

                }}>
                    <Image width={180} height={180} src={assets.images.stethoscope} alt="doctor 3" />
                </Box>
            </Box>
        </Container>
    );
};

export default HeroSection;