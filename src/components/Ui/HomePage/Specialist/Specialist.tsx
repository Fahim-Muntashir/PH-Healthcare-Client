import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Specialist = async () => {

    const res = await fetch('http://localhost:5000/api/v1/specialties', {
        next: {
            revalidate: 30,
        }
    })

    const { data: specialties } = await res.json();


    return (
        <Container>
            <Box sx={{
                margin: "40px 0px",
                textAlign: "center",

            }}>
                <Box sx={{ textAlign: "start" }}>
                    <Typography variant='h4' fontWeight={600}>
                        Explore Treatments Across Specialists
                    </Typography>
                    <Typography component='p' fontWeight={300} fontSize={18}>
                        Experienced Doctor Across All Specialties
                    </Typography>

                </Box>

                <Stack direction="row" gap={4} mt={5}>
                    {
                        specialties.map((speciality: any) => (
                            <Box key={speciality.id} sx={{
                                flex: 1,
                                width: "150px",
                                backgroundColor: "rgba(245,245,245,1)",
                                border: "1px solid rgba(245,250,250,1))",
                                borderRadius: "10px",
                                textAlign: "center",
                                padding: "40px 10px",
                                "& img": {
                                    width: "50px",
                                    height: "50px",
                                    margin: "0 auto",
                                },
                                "&:hover": {
                                    border: "1px solid blue",
                                    borderRadius: "10px",
                                    padding: "40px 10px",
                                }
                            }}>
                                <Image src={speciality.icon} alt='specialty icon' width={100} height={100} />
                                <Box mt={2}>
                                    <Typography component='p' fontWeight={300} fontSize={18}>
                                        {speciality.title}
                                    </Typography>
                                </Box>
                            </Box>
                        ))
                    }
                </Stack>
                <Button variant='outlined' sx={{
                    marginTop: "20px"
                }}> View All</Button>


            </Box >
        </Container >
    );
};

export default Specialist;