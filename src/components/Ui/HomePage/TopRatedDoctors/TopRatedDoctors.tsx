import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';

const TopRatedDoctors = async () => {

    const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3")
    const { data: doctors } = await res.json();

    return (
        <Box sx={{
            my: 10,
            py: 30,
            backgroundColor: 'rgba(20,20,20,0.1)',
            clipPath: "polygon(0 0,100% 25%,100% 100%, 0 75%)"
        }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant='h4' component={"h1"} fontWeight={700}>
                    Our Top Rated Doctors
                </Typography>
                <Typography component={"p"} fontSize={18} fontWeight={400} sx={{
                    mt: 1,
                }}>
                    Access to Expert physycians and surgeons, advanced technologies
                </Typography>
                <Typography component="p" fontSize={18} fontWeight={400}>
                    and top-quality surgery facilities right here
                </Typography>

            </Box>
            <Container sx={{
                margin: "30px auto"
            }}>
                <Grid container spacing={2}>
                    {
                        doctors.map((doctor: any) => (
                            <Grid item key={doctor.id} md={4}>
                                <Card sx={{}}>
                                    <Box>
                                        <Image src={doctor.profilePhoto} alt="doctor" width={500} height={100} />

                                    </Box>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {doctor.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {
                                                doctor.qualification
                                            },
                                            {
                                                doctor.designation
                                            }
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mt={1}>
                                            <PlaceIcon />
                                            {
                                                doctor.address
                                            },

                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{
                                        justifyContent: "space-between",
                                        px: 2,
                                        paddingBottom: "20px",
                                    }}>
                                        <Button size="small">Book Now</Button>
                                        <Button variant='outlined' size="small">View Profile</Button>
                                    </CardActions>
                                </Card>
                            </Grid>


                        ))
                    }
                </Grid>
                <Box sx={{
                    textAlign: "center"
                }}>
                    <Button variant='outlined' sx={{
                        marginTop: "20px",
                        margin: "0 auto",
                    }}> View All</Button>
                </Box>
            </Container>
        </Box >
    );
};

export default TopRatedDoctors;