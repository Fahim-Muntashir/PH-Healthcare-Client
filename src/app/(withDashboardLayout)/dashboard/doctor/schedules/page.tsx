'use client'
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import DoctorScheduleModal from './components/DoctorScheduleModal';


const DoctorScheduleModalPage = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>
                Create Doctor Schedule
            </Button>

            <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen}>

            </DoctorScheduleModal>

        </Box>
    );
};

export default DoctorScheduleModalPage;