import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react';

const reviews = () => {
    return (
        <Box>
            <Stack>
                <Button>
                    Create Speciality
                </Button>

                <TextField placeholder='Search Specialist' size='small'></TextField>

            </Stack>
        </Box>
    );
};

export default reviews;