import * as React from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

export default function AddressForm() {
    const [upCount, setUpCount] = React.useState(98);
    const [downCount, setDownCount] = React.useState(0);

    const handleUpClick = () => {
        // setUpCount(Math.max(upCount - 1, 0));    // 0 이하로 안 내려감
        setUpCount(upCount + 1);
    };

    const handleDownClick = () => {
        setDownCount(downCount + 1);
    };

    return (
        <Grid container spacing={3}>
            <Typography
                variant='body1'
                sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
            >
                Provide a brief overview of the key features of the product. For
                example, you could list the number of features, their types or
                benefits, and add-ons.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 1,
                    gap: 2,
                    justifyContent: 'center',
                    '& .MuiBadge-root': {
                        paddingBottom: 1.5,
                    },
                }}
            >
                <IconButton aria-label='Menu button' onClick={handleUpClick}>
                    <Badge
                        badgeContent={upCount}
                        color='primary'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <ThumbUp />
                    </Badge>
                </IconButton>
                <IconButton aria-label='Menu button' onClick={handleDownClick}>
                    <Badge
                        badgeContent={downCount}
                        color='error'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <ThumbDown />
                    </Badge>
                </IconButton>
            </Box>
        </Grid>
    );
}
