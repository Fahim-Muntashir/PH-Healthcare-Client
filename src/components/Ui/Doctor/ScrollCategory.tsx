'use client'
import { useGetAllSpecialtiesQuery } from '@/redux/api/specialtiesApi';
import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { DoctorSpecialty } from '@/types/doctor';


const ScrollCategory = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const { data } = useGetAllSpecialtiesQuery(undefined);
    console.log(data);
    return (
        <Box sx={{ maxWidth: "100%", bgcolor: 'background.paper' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {
                    data?.map((specialty: any) => (
                        <Tab key={specialty?.id}
                            label={specialty?.title}
                            value={specialty?.title}

                        />
                    ))
                }
            </Tabs>
        </Box>
    );
};

export default ScrollCategory;