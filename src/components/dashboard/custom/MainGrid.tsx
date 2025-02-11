import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';

import BoardDataGrid from './board/BoardDataGrid';

export default function MainGrid() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Typography component='h2' variant='h6' sx={{ mb: 2 }}>
                Details
            </Typography>

            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 9 }}>
                    <BoardDataGrid />
                </Grid>
                <Grid size={{ xs: 12, lg: 3 }}>
                    <Stack
                        gap={2}
                        direction={{ xs: 'column', sm: 'row', lg: 'column' }}
                    ></Stack>
                </Grid>
            </Grid>
        </Box>
    );
}
