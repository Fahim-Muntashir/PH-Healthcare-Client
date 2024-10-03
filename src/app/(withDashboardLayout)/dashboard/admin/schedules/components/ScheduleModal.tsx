import PHDatePicker from '@/components/Form/PHDatePicker';
import PHForm from '@/components/Form/PHForm';
import PHTimePicker from '@/components/Form/PHTimePicker';
import PHModal from '@/components/Shared/PHModal/PHModal';
import { useCreateScheduleMutation } from '@/redux/api/scheduleApi';
import { useCreateSpecialtyMutation } from '@/redux/api/specialitiesApi';
import { dateFormatter } from '@/utils/dateFormatter';
import { timeFormatter } from '@/utils/timeFormatter';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';



type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ScheduleModal = ({ open, setOpen }: TProps) => {

    const [createSchedule] = useCreateScheduleMutation()
    const handleFormSubmit = async (values: FieldValues) => {
        values.startDate = dateFormatter(values.startDate);
        values.endDate = dateFormatter(values.endDate);
        values.startTime = timeFormatter(values.startTime);
        values.endTime = timeFormatter(values.endTime);

        try {

            const res = await createSchedule(values);

            if (res?.data?.length) {
                toast.success("Schedule Created successfully")
                setOpen(false)
            }

        }
        catch (err: any) {
            console.error(err.message);
        }
    }


    return (
        <PHModal open={open} setOpen={setOpen} title={"Create Schedule"}>
            <PHForm onSubmit={handleFormSubmit}>

                <Grid container spacing={2} >
                    <Grid item md={12}>
                        <PHDatePicker name={"startDate"}
                            label='Start Date'
                        >
                        </PHDatePicker>

                    </Grid>
                    <Grid item md={12}>
                        <PHDatePicker name={"endDate"}
                            label='End Date'
                        >
                        </PHDatePicker>

                    </Grid>
                    <Grid item md={12}>
                        <PHTimePicker name='startTime' label='Start Time'>

                        </PHTimePicker>

                    </Grid>
                    <Grid item md={12}>
                        <PHTimePicker name='endTime' label='End Time'>

                        </PHTimePicker>

                    </Grid>
                </Grid>
                <Button type='submit' sx={{ mt: 1 }}>Create</Button>
            </PHForm>

        </PHModal>
    );
};

export default ScheduleModal;