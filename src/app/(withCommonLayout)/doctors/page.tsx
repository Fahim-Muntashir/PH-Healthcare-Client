import { Box, Container } from '@mui/material';
import React from 'react';
import { Doctor } from '@/types/doctor/'
import DoctorCard from '@/components/UI/Doctor/DoctorCard';
import DashedLine from '@/components/UI/Doctor/DoctorLine';
import ScrollCategory from '@/components/UI/Doctor/ScrollCategory';

interface PropTypes {
    searchParams: { specialties: string }
}

const page = async ({ searchParams }: PropTypes) => {
    let res;

    if (searchParams?.specialties) {
        res = await fetch(`http://localhost:5000/api/v1/doctor?specialties=${searchParams?.specialties}`);
    } else {
        res = await fetch('http://localhost:5000/api/v1/doctor');
    }


    const { data } = await res.json();

    console.log(searchParams);

    return (
        <Container>


            <DashedLine />

            <ScrollCategory specialties={searchParams.specialties}></ScrollCategory>

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