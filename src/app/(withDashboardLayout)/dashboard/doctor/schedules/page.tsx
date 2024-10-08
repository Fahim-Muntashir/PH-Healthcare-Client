'use client';
import { Box, Button, IconButton } from '@mui/material';
import DoctorScheduleModal from './components/DoctorScheduleModal';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { dateFormatter } from '@/utils/dateFormatter';
import { ISchedule } from '@/types/schedule';
import dayjs from 'dayjs';
import { useGetAllDoctorSchedulesQuery } from '@/redux/api/doctorScheduleApi';

const DoctorSchedulesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [allSchedule, setAllSchedule] = useState<any>([]);
    const { data, isLoading } = useGetAllDoctorSchedulesQuery({});
    console.log(data);

    const schedules = data?.doctorSchedules;
    const meta = data?.meta;

    console.log(schedules);

    useEffect(() => {
        if (schedules) {
            const updateData = schedules.map((schedule: ISchedule, index: number) => {
                return {
                    sl: index + 1,
                    id: schedule?.scheduleId,  // Use unique scheduleId here
                    startDate: dateFormatter(schedule?.schedule?.startDate),
                    startTime: dayjs(schedule?.schedule?.startDate).format('hh:mm a'),
                    endTime: dayjs(schedule?.schedule?.endDate).format('hh:mm a'),
                    isBooked: schedule?.isBooked ? 'Yes' : 'No',  // Display booking status
                    doctorName: schedule?.doctor?.name,  // Include doctor's name for better context
                };
            });
            setAllSchedule(updateData);
        }
    }, [schedules]);


    const columns: GridColDef[] = [
        { field: 'sl', headerName: 'SL' },
        { field: 'startDate', headerName: 'Date', flex: 1 },
        { field: 'startTime', headerName: 'Start Time', flex: 1 },
        { field: 'endTime', headerName: 'End Time', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: ({ row }) => {
                return (
                    <IconButton aria-label='delete'>
                        <DeleteIcon sx={{ color: 'red' }} />
                    </IconButton>
                );
            },
        },
    ];

    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>
                Create Doctor Schedule
            </Button>
            <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
            <Box sx={{ mb: 5 }}></Box>

            <Box>
                {!isLoading ? (
                    <Box my={2}>
                        <DataGrid rows={allSchedule ?? []} columns={columns} />
                    </Box>
                ) : (
                    <h1>Loading.....</h1>
                )}
            </Box>
        </Box>
    );
};

export default DoctorSchedulesPage;