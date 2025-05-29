import React from 'react';
import {
    Chip, 
} from '@mui/material';

export default function Category() {
    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };
    
    return (
        <>
            <Chip
                onClick={handleClick}
                size='medium'
                label='All categories'
            />
            <Chip
                onClick={handleClick}
                size='medium'
                label='Company'
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            />
            <Chip
                onClick={handleClick}
                size='medium'
                label='Product'
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            />
            <Chip
                onClick={handleClick}
                size='medium'
                label='Design'
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            />
            <Chip
                onClick={handleClick}
                size='medium'
                label='Engineering'
                sx={{
                    backgroundColor: 'transparent',
                    border: 'none',
                }}
            />
        </>
    );
};