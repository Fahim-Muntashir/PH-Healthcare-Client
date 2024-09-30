'use client'
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import SpecialtyModal from './components/SpecialtyModal';
import { useDeleteSpecialtyMutation, useGetAllSpecialtyQuery } from '@/redux/api/specialitiesApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'sonner';

const SpecialtiesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const { data, isLoading } = useGetAllSpecialtyQuery({});

    const [deleteSpecialty] = useDeleteSpecialtyMutation();

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteSpecialty(id).unwrap();
            console.log(res);
            if (res?.id) {
                toast.success("Successfully Specialty Deleted")
            }

        } catch (error) {
            console.error(error);
        }
    }

    const columns: GridColDef[] = [
        { field: 'title', headerName: 'Title', width: 400 },
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
                    <DeleteIcon />
                </IconButton>
            },
        },


    ];

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


            {!isLoading ?
                < Box >
                    <DataGrid
                        rows={data}
                        columns={columns}
                        sx={{ border: 0 }}
                    />
                </Box> : <h1>Is Loading........</h1>
            }

        </Box >
    );
};

export default SpecialtiesPage;