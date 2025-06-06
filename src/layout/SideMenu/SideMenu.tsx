import * as React from 'react';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SelectContent from './components/SelectContent';
import MenuContent from './components/MenuContent';
import OptionsMenu from './components/OptionsMenu';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    mt: 10,
    [`& .${drawerClasses.paper}`]: {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
});

// export default function SideMenu(props: any) {
export default function SideMenu({ open = false, toggleDrawer }: { open?: boolean, toggleDrawer?: any}) {
    return (
        <Drawer
            // variant='permanent'
            open={open}
            sx={{
                display: { xs: 'none', md: 'block' },
                [`& .${drawerClasses.paper}`]: {
                    backgroundColor: 'background.paper',
                },
            }}
            onClose={() => toggleDrawer((state: any) => ({ ...state, open: false}))}
        >
            <Box
                sx={{
                    display: 'flex',
                    mt: 'calc(var(--template-frame-height, 0px) + 4px)',
                    p: 1.5,
                }}
            >
                <SelectContent />
            </Box>
            <Divider />
            <MenuContent />
            <Stack
                direction='row'
                sx={{
                    p: 2,
                    gap: 1,
                    alignItems: 'center',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Avatar
                    sizes='small'
                    alt='Riley Carter'
                    src='/static/images/avatar/7.jpg'
                    sx={{ width: 36, height: 36 }}
                />
                <Box sx={{ mr: 'auto' }}>
                    <Typography
                        variant='body2'
                        sx={{ fontWeight: 500, lineHeight: '16px' }}
                    >
                        Riley Carter
                    </Typography>
                    <Typography
                        variant='caption'
                        sx={{ color: 'text.secondary' }}
                    >
                        riley@email.com
                    </Typography>
                </Box>
                <OptionsMenu />
            </Stack>
        </Drawer>
    );
}
