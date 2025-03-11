import { useState } from 'react';
import { Avatar, AvatarGroup, Box, Card, CardContent, Typography, Pagination, Chip } from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';     // img
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import TagIcon from '@mui/icons-material/Tag';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link, NavLink } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    '&:focus-visible': {
        outline: '3px solid',
        outlineColor: 'hsla(210, 98%, 48%, 0.5)',
        outlineOffset: '2px',
    },
}));

const StyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    overflow: 'hidden',
    '&:last-child': {
        paddingBottom: 16,
    },
});

const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

function Author({ author }: { author: string; }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 1,
                    alignItems: 'center',
                }}
            >
                <AvatarGroup>
                    <Avatar alt={author}
                        sx={{ width: 24, height: 24 }}
                    />
                </AvatarGroup>
                <Typography variant='caption'>{author}</Typography>
            </Box>
            <Typography variant='caption'>2025.03.03</Typography>
        </Box>
    );
}

export type Boards = Board[];
export interface Board {
    id?: string;
    title: string;
    contents: string;
};

export default function DataContent() {
    const [focusedCardIndex, setFocusedCardIndex] = useState<
        number | null
    >(null);

    const handleFocus = (index: number) => {
        setFocusedCardIndex(index);
    };

    const handleBlur = () => {
        setFocusedCardIndex(null);
    };

    const handleClick = () => {
        console.info('You clicked the filter chip.');
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        console.info('You changed pagination.', value);
        setPage(value);
    };

    const [page, setPage] = useState(1);

    const foApiUrl = 'http://localhost:3001/api/v1/crud';
    const { data, isLoading } = useQuery<Boards>({
        queryKey: ['boards'],
        queryFn: async () => (await axios.get<{ data: Boards }>(foApiUrl)).data.data,   // 렌더링 발생
        // select: (data: any) => data.map((data: any) => ({ ...data, id: data.crud_id }))
        // select: (data: any) => data.filter((data: any) => data.crud_id === 8)
    });

    return (
        <>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, md: 12 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            height: '100%',
                        }}
                    >
                        {data?.map((board, index) => (
                            <Link to={`/board/test2/${index + 1}`} key={index}>
                                <StyledCard
                                    // key={board.id}
                                    key={index}
                                    variant='outlined'
                                    onFocus={() => handleFocus(index)}
                                    onBlur={handleBlur}
                                    tabIndex={0}
                                    className={
                                        focusedCardIndex === index ? 'Mui-focused' : ''
                                    }
                                    sx={{ height: '100%' }}
                                >
                                    <StyledCardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            height: '100%',
                                        }}
                                    >
                                        <div>
                                            <Typography
                                                gutterBottom
                                                variant='caption'
                                                component='div'
                                                sx={{ display: 'flex', gap: 1 }}
                                            >
                                                <Chip variant="filled" size="small" icon={<TagIcon />} label="hashTag" />
                                                <Chip variant="outlined" size="small" icon={<TagIcon />} label="hashTag2" />
                                            </Typography>
                                            <Typography
                                                gutterBottom
                                                variant='h6'
                                                component='div'
                                            >
                                                {board.title}
                                            </Typography>
                                            <StyledTypography
                                                variant='body2'
                                                color='text.secondary'
                                                gutterBottom
                                            >
                                                {board.contents}
                                            </StyledTypography>
                                        </div>
                                    </StyledCardContent>
                                    <Author author={board.title} />
                                </StyledCard>
                            </Link>
                        ))}
                    </Box>
                </Grid>
            </Grid>
            {(typeof data?.length === 'number' && data?.length > 0) &&
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, justifyContent: 'center' }}>
                {/* <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} /> */}
                <Pagination showFirstButton showLastButton count={15} page={page} siblingCount={3} boundaryCount={1} onChange={handleChange} />
            </Box>
            }
            {data?.length === 0 && <Box sx={{ alignSelf: 'center', }}><Typography variant='h6'>검색 결과가 없습니다.</Typography></Box>}
        </>
    );
}