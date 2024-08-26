import { TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';


type TInputProps = {
    name: string;
    label?: string;
    type?: string;
    size?: "small" | "medium";
    fullWidth?: boolean;
}

const PHInput = ({ name, label, type = "text", size = "small", fullWidth }: TInputProps) => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (

                <TextField
                    {...field}
                    label={label}
                    type={type}
                    variant="outlined"
                    size={size}
                    fullWidth={fullWidth}
                ></TextField >
            )}
        />
    );
};

export default PHInput;