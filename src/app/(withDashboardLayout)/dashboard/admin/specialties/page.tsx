'use client'
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SpecialtyModal from './components/SpecialtyModal';
import { useGetAllSpecialtyQuery } from '@/redux/api/specialitiesApi';

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { data, isLoading } = useGetAllSpecialtyQuery({});

    console.log(data);

    return (
        <Box>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Button
                    onClick={() => setIsModalOpen(true)}>
                    Create Speciality
                </Button>
                <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen}>

                </SpecialtyModal>
                <TextField placeholder='Search Specialist' size='small'></TextField>

            </Stack>


            <Box>
                <h1>Display Specialties</h1>
            </Box>

        </Box>
    );
};

export default SpecialtiesPage;