import React from 'react';
import { FormControl, OutlinedInput, InputAdornment, Box, IconButton, Typography } from '@mui/material';
import { SearchRounded, RssFeedRounded } from '@mui/icons-material';
import Category from './Category';

export function Search() {
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

export default function HeaderContent() {
    return (
        <>
            {/* <div>
                <Typography variant='h1' gutterBottom>
                    Blog
                </Typography>
                <Typography>
                    Stay in the loop with the latest about our products
                </Typography>
            </div> */}
            <div>
                <Typography variant='h2'>게시판</Typography>
            </div>
            <Box
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
                }}
            >
                <Search />
                <IconButton size='small' aria-label='RSS feed'>
                    <RssFeedRounded />
                </IconButton>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: { xs: 'start', md: 'center' },
                    gap: 4,
                    overflow: 'auto',
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        flexDirection: 'row',
                        gap: 3,
                        overflow: 'auto',
                    }}
                >
                    <Category />
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'row',
                        gap: 1,
                        width: { xs: '100%', md: 'fit-content' },
                        overflow: 'auto',
                    }}
                >
                    <Search />
                    <IconButton size='small' aria-label='RSS feed'>
                        <RssFeedRounded />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
}