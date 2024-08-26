import { SxProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';


type TInputProps = {
    name: string;
    label?: string;
    type?: string;
    size?: "small" | "medium";
    fullWidth?: boolean;
    sx?: SxProps;
    placeholder?: string;
    required: boolean;
}

const PHInput = ({ name, label, type = "text", size = "small", fullWidth, sx, placeholder, required }: TInputProps) => {

    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (

                <TextField
                    {...field}
                    sx={{ ...sx }}
                    label={label}
                    type={type}
                    variant="outlined"
                    size={size}
                    fullWidth={fullWidth}
                    placeholder={label}
                    required={required}
                ></TextField >
            )}
        />
    );
};

export default PHInput;