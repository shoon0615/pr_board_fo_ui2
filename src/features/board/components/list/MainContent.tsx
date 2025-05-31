import { useState, useEffect } from 'react';
import { 
    Avatar, AvatarGroup, Box, Card, CardContent, Typography, Pagination, Chip,
} from '@mui/material';
// import CardMedia from '@mui/material/CardMedia';     // img
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Tag as TagIcon } from '@mui/icons-material';

import { Link, NavLink } from 'react-router-dom';

// import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
// import { getBoards } from '@/features/board/services/board';
import { Board } from '@/features/board/types/board';
import { useQueryBoards } from '@/features/board/hooks/board';

import * as Date from '@/shared/utils/dateUtil';

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

// function Author({ author }: { author: string; }) {
function Author({ data }: { data: Board; }) {
    const author = (data.memberName ?? String(data.memberId)) || 'Anonymous';
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
            <Typography variant='caption'>{Date.convertDateFormat(data.createdDate, 'YYYY.MM.DD')}</Typography>
        </Box>
    );
}

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
        // scrollToTop();
    };

    // import { scrollToTop } from '@/shared/utils/basicUtil';
    const scrollToTop = () => window.scrollTo(0, 0);

    const [page, setPage] = useState(1);

    useEffect(() => {
        // refetch();
        scrollToTop();
    }, [page]);

    // api 호출을 커스텀 훅으로 분리하여 사용??
    /* const { data: boardData } = useSuspenseQuery({
        queryKey: ['boardList'],
        queryFn: () => getBoards(),
        select: (data: { data: { data: Boards, pagination: any }}) => data?.data,
    });
    const { data, pagination } = boardData; */
    const { data, pagination } = useQueryBoards({ page });
    const total = pagination?.totalPages || 0;   // TODO: 임시 페이징
    
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
                            // <Link to={`/board/detail/${index + 1}`} key={index}>
                            <Link to={`/board/detail/${board.crudId}`} key={board.crudId}>
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
                                                {board?.tags?.map((tag, index) => (
                                                    // <Chip variant="filled" size="small" icon={<TagIcon />} label="hashTag" />
                                                    <Chip variant="outlined" size="small" icon={<TagIcon />} label={tag} key={index} />
                                                ))}
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
                                    <Author data={board} />
                                </StyledCard>
                            </Link>
                        ))}
                    </Box>
                    {(data?.length > 0) &&
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, justifyContent: 'center' }}>
                            {/* <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} /> */}
                            <Pagination showFirstButton showLastButton count={+total} page={page} siblingCount={3} boundaryCount={1} onChange={handleChange} />
                        </Box>
                    }
                </Grid>
            </Grid>
            
            {data?.length === 0 && <Box sx={{ alignSelf: 'center', }}><Typography variant='h6'>검색 결과가 없습니다.</Typography></Box>}
        </>
    );
}