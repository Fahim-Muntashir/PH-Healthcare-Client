import PHDatePicker from '@/components/Form/PHDatePicker';
import PHForm from '@/components/Form/PHForm';
import PHModal from '@/components/Shared/PHModal/PHModal';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';



type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ScheduleModal = ({ open, setOpen }: TProps) => {

    const handleFormSubmit = async (values: FieldValues) => {
        try {
            console.log(values);
        }
        catch (err: any) {
            console.error(err.message);
        }
    }


    return (
        <PHModal open={open} setOpen={setOpen} title={"Create Schedule"}>
            <PHForm onSubmit={handleFormSubmit}>

                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <PHDatePicker name={"startDate"}>

                        </PHDatePicker>
                    </Grid>
                </Grid>

                <Button type='submit'>Create</Button>
            </PHForm>

        </PHModal>
    );
};

export default ScheduleModal;