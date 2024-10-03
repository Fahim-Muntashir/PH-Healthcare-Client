import PHForm from '@/components/Form/PHForm';
import PHModal from '@/components/Shared/PHModal/PHModal';
import { Button } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';



type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ScheduleModal = ({ open, setOpen }: TProps) => {

    const handleFormSubmit = async (values: FieldValues) => {
        try { }
        catch (err: any) {
            console.error(err.message);
        }
    }


    return (
        <PHModal open={open} setOpen={setOpen} title={"Create Schedule"}>
            <PHForm onSubmit={handleFormSubmit}>

                <Button type='submit'>Create</Button>
            </PHForm>

        </PHModal>
    );
};

export default ScheduleModal;