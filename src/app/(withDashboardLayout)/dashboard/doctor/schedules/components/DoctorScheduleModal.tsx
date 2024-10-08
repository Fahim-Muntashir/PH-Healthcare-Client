import PHModal from '@/components/Shared/PHModal/PHModal';
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useGetAllSchedulesQuery } from '@/redux/api/scheduleApi';
import MultipleSelectChip from './MultipleSelectFieldChip';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()).toISOString());


    const [selectedScheduleIds, setSelectedScheduleIds] = useState()


    const query: Record<string, any> = {
    };

    if (!!selectedDate) {
        query["startDate"] = dayjs(selectedDate).hour(0).minute(0).millisecond(0).toISOString();

        query["endDate"] = dayjs(selectedDate).hour(23).minute(59).millisecond(999).toISOString();

    }

    const { data, isLoading } = useGetAllSchedulesQuery({});

    const schedules = data?.schedules;

    console.log(schedules);

    return (
        <PHModal open={open} setOpen={setOpen} title='Create Doctor Schedule'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DatePicker
                    label="Controlled picker"
                    value={dayjs(selectedDate)}

                    onChange={(newValue) =>
                        setSelectedDate(dayjs(newValue).toISOString())
                    }
                />
            </LocalizationProvider>

            <MultipleSelectChip schedules={schedules}></MultipleSelectChip>

        </PHModal>
    );
};

export default DoctorScheduleModal;