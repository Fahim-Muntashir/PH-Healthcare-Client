import { Box, Container } from '@mui/material';
import React from 'react';
import { Doctor } from '@/types/doctor/'
import DoctorCard from '@/components/UI/Doctor/DoctorCard';
import DashedLine from '@/components/UI/Doctor/DoctorLine';

const page = async () => {
    const res = await fetch('http://localhost:5000/api/v1/doctor');

    const { data } = await res.json();

    console.log(data);

    return (
        <Container>
            <DashedLine />

            <Box sx={{ mt: 2, p: 5, bgcolor: "secondary.light" }}>

                {
                    data?.map((doctor: Doctor, index: number) => (
                        <Box key={doctor?.id}>
                            <DoctorCard doctor={doctor}></DoctorCard>
                            {index === data?.length - 1 ? null : (
                                <DashedLine />

                            )}

                        </Box>



                    ))
                }
            </Box>

        </Container>
    );
};

export default page;