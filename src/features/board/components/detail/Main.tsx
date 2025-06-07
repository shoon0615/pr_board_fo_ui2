import * as React from 'react';
import Grid from '@mui/material/Grid2';
import { 
    Typography, Box, IconButton, Badge,
} from '@mui/material';
import { ThumbUp, ThumbDown } from '@mui/icons-material';

// import { Board } from '../../types/board';
import { Board } from '@/features/board/types/board';

export default function Main({ data }: { data: Board }) {
// export default function Main(data: Board) {
    // const [upCount, setUpCount] = React.useState(98);
    const [upCount, setUpCount] = React.useState(data.hits);
    const [downCount, setDownCount] = React.useState(0);

    const handleUpClick = () => {
        // setUpCount(Math.max(upCount - 1, 0));    // 0 이하로 안 내려감
        setUpCount(upCount + 1);
    };

    const handleDownClick = () => {
        setDownCount(downCount + 1);
    };

    return (
        <Grid container spacing={3} direction="column" >
            <Typography
                variant='body1'
                sx={{ color: 'text.secondary', minWidth: { xs: '100%', sm: '60vh' }, mb: { xs: 2, sm: 4 } }}
            >
                {data.contents}
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
                <IconButton aria-label='Like Up Button' onClick={handleUpClick}>
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
                <IconButton aria-label='Like Down Button' onClick={handleDownClick}>
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
