'use client'
import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SpecialistModal from './components/SpecialistModal';

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Box>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Button
                    onClick={() => setIsModalOpen(true)}>
                    Create Speciality
                </Button>
                <SpecialistModal open={isModalOpen} setOpen={setIsModalOpen}>

                </SpecialistModal>
                <TextField placeholder='Search Specialist' size='small'></TextField>

            </Stack>
        </Box>
    );
};

export default SpecialtiesPage;