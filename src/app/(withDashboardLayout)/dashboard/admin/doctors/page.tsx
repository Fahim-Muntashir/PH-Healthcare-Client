'use client'
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import DoctorModal from './components/DoctorModal';
import { useGetAllDoctorsQuery } from '@/redux/api/doctorApi';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import Image from 'next/image';

const DoctorPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { data, isLoading } = useGetAllDoctorsQuery({});

    const doctors = data?.doctors;
    const meta = data?.meta;
    const handleDelete = async (id: string) => {
        try {
            // const res = await deleteSpecialty(id).unwrap();
            // console.log(res);
            // if (res?.id) {
            //     toast.success("Successfully Specialty Deleted")
            // }

        } catch (error) {
            console.error(error);
        }
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'contactNumber', headerName: 'Contact Number', flex: 1 },
        {
            field: 'icon', headerName: 'Icon', flex: 1,
            renderCell: ({ row }) => {
                return <Box>
                    <Image src={row.icon} alt='icon' width={30} height={30}></Image>
                </Box>
            },
        }, {
            field: 'action', headerName: 'Action',
            flex: 1,
            headerAlign: "center",
            renderCell: ({ row }) => {
                return <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
                    <GridDeleteIcon />
                </IconButton>
            },
        },


    ];
    return (
        <Box>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Button onClick={() => setIsModalOpen(true)} >
                    Create New Doctor
                </Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}></DoctorModal>
                <TextField placeholder='Search Doctor' size='small'></TextField>

            </Stack>

            {!isLoading ?
                < Box >
                    <DataGrid

                        rows={doctors}
                        columns={columns}
                        sx={{ border: 0 }}
                    />
                </Box> : <h1>Is Loading........</h1>
            }


        </Box >
    );
};

export default DoctorPage;