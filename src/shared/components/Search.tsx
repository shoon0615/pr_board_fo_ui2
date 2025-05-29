import React from 'react';
import { FormControl, OutlinedInput, InputAdornment } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';

export default function Search() {
    return (
        <FormControl
            sx={{ width: { xs: '100%', md: '25ch' } }}
            variant='outlined'
        >
            <OutlinedInput
                size='small'
                id='search'
                placeholder='Search…'
                sx={{ flexGrow: 1 }}
                startAdornment={
                    <InputAdornment
                        position='start'
                        sx={{ color: 'text.primary' }}
                    >
                        <SearchRounded fontSize='small' />
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />
        </FormControl>
    );
}