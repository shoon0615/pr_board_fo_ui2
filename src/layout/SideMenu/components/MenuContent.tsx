import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import { Link, NavLink } from 'react-router-dom';

const mainListItems = [
    { text: 'Home', icon: <HomeRoundedIcon /> },
    { text: 'Analytics', icon: <AnalyticsRoundedIcon /> },
    { text: 'Clients', icon: <PeopleRoundedIcon /> },
    { text: 'Tasks', icon: <AssignmentRoundedIcon /> },
];

const secondaryListItems = [
    { text: 'Settings', icon: <SettingsRoundedIcon /> },
    { text: 'About', icon: <InfoRoundedIcon /> },
    { text: 'Feedback', icon: <HelpRoundedIcon /> },
];

const menuListItems = [
    { to: '/', label: 'Main' },
    { to: '/test', label: 'Test' },
    { to: '/board/blog', label: 'Board' },
    { to: '/notFound', label: 'NotFound' },
];

export default function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <ListItemButton selected={index === 0}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <hr />
                {menuListItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <NavLink key={item.to} to={item.to} caseSensitive end>
                            {({ isActive }) => (
                                <ListItemButton selected={isActive}>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            )}
                        </NavLink>
                    </ListItem>
                ))}
            </List>

            <List dense>
                {secondaryListItems.map((item, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        sx={{ display: 'block' }}
                    >
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
