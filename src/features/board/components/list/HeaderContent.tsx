import React from 'react';
import { 
    Box, Typography, IconButton,
} from '@mui/material';
import { RssFeedRounded } from '@mui/icons-material';

import Category from './Category';
import Search from '@/shared/components/Search';

export default function HeaderContent() {
    return (
        <>
            <div>
                <Typography variant='h2'>게시판</Typography>
            </div>

            {/* Mobile */}
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
                {/* <IconButton size='small' aria-label='RSS feed'>
                    <RssFeedRounded />
                </IconButton> */}
            </Box>

            {/* Web(Desktop) */}
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
                    {/* <IconButton size='small' aria-label='RSS feed'>
                        <RssFeedRounded />
                    </IconButton> */}
                </Box>
            </Box>
        </>
    );
}