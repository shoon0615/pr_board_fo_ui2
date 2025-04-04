import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
// import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './components/NavbarBreadcrumbs';
import MenuButton from './components/MenuButton';
import ColorModeIconDropdown from '../../components/shared-theme/ColorModeIconDropdown';

import Search from './components/Search';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header(props: any) {
    return (
        <>
            <Stack
                direction='row'
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: '100%',
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    maxWidth: { sm: '100%', md: '1700px' },
                    pt: 1.5,
                }}
                spacing={2}
            >
                {/* position: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'; */}
                {/* color: 'primary' | 'default' | 'inherit' | 'transparent' */}
                <AppBar position='fixed' color='transparent'>
                    <Toolbar variant='dense'>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 2 }}
                            onClick={() => props.toggleDrawer((state: any) => ({ ...state, open: true}))}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <Typography
                            variant='h6'
                            color='inherit'
                            component='div'
                        >
                            Photos
                        </Typography> */}

                        <Stack
                            direction='row'
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                width: '100%',
                                alignItems: { xs: 'flex-start', md: 'center' },
                                justifyContent: 'space-between',
                                maxWidth: { sm: '100%', md: '1700px' },
                                pt: 1.5,
                                pb: 1.5
                            }}
                            spacing={2}
                        >
                            <NavbarBreadcrumbs />
                            <Stack direction='row' sx={{ gap: 1 }}>
                                <Search />
                                <MenuButton showBadge aria-label='Open notifications'>
                                    <NotificationsRoundedIcon />
                                </MenuButton>
                                <ColorModeIconDropdown />
                            </Stack>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Stack>
        </>
    );
}
