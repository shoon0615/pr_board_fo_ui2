import { ReactNode, useState } from 'react';
import { 
    Box, Button, Typography, Tab, Tabs, List, ListItem, ListItemText, Stack,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
// import { ChevronRightRounded } from '@mui/icons-material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';

import { getBoard } from '@/features/board/services/board';
import { Board } from '@/features/board/types/board';

import * as Data from '@/shared/utils/dataUtil';
import * as Date from '@/shared/utils/dateUtil';

import Main from '@/features/board/components/detail/Main';
import Review from '@/features/board/components/detail/Review';
import PaymentForm from '@/features/board/components/detail/PaymentForm';

/**
 * 1. 컴포넌트 내에 styled 적용 시 : Styled + `Name`
 * @example
 * const StyledGrid = styled(Grid)(({ theme }) => ({ ... }));
 * 
 * 2. 분리하여 styled 적용 시 : `Name` + Wrapper
 * @example
 * const BoardDetailWrapper = () => { ... };
 */

// TODO: 
// FIXME: 이름만 styled 사용하고, 실제론 components 반환 -> 추후 sx 대신 styled 적용?? -> ReactNode?? ReactElement??
const StyledGrid = ({ children }: { children: ReactNode }) => {
    return (
        <Grid
            container
            sx={{
                height: {
                    xs: '100%',
                    // sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                    sm: '100%',
                },
                mt: {
                    xs: 4,
                    sm: 0,
                },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    width: '100%',
                    maxWidth: { sm: '100%', md: 600 },
                    gap: { xs: 5, md: 'none' },
                }}
            >
                { children }
            </Box>
        </Grid>
    );
};

/**
 * 1. 타입 분리 방식: 가독성과 재사용성 향상 -> typeScript 에서 권장하는 방식
 * @example
 * type Props = {
 *  data: Board;
 * };
 * const HeaderContent = ({ data }: Props) => { ... }
 * 
 * 2. 인라인 구조분해 방식
 * @example
 * const HeaderContent = ({ data }: { data: Board }) => { ... }
 * 
 * 3. props 방식 -> 지양
 * @example
 * const HeaderContent = (data: Board) => { ... }
 */
/** 게시판 상단 정보 */
const HeaderContent = (data: Board) => {
    // console.log('data', data);
    return (
        <>
            <Typography
                component='h1'
                variant='h4'
                sx={{
                    width: '100%',
                    fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                }}
            >
                {data.title}
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 8, md: 8 }}></Grid>
                <Grid size={{ xs: 4, md: 4 }}>
                    <Stack spacing={1}>
                        <List disablePadding>
                            <ListItem sx={{ py: 0, px: 0 }}>
                                <ListItemText
                                    primary='작성자'
                                    sx={{ color: 'text.secondary' }}
                                />
                                <Typography variant='body1'>
                                    {data.memberName ?? data.memberId}
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, px: 0 }}>
                                <ListItemText
                                    primary='작성일자'
                                    sx={{ color: 'text.secondary' }}
                                />
                                <Typography variant='body1'>
                                    {Date.convertDate(data.createdDate)}
                                </Typography>
                            </ListItem>
                            <ListItem sx={{ py: 0, px: 0 }}>
                                <ListItemText
                                    primary='조회 수'
                                    sx={{ color: 'text.secondary' }}
                                />
                                <Typography variant='body2'>
                                    {data.hits}
                                </Typography>
                            </ListItem>
                        </List>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

/** 게시판 메인 정보 */
// const MainContent = ({ data }: { data?: Board }) => {   // data 의 optional 설정
const MainContent = (data: Board) => {
    const [tabValue, setTabValue] = useState(1);

    const getMainContent = () => {
        switch (tabValue) {
            case 1:
                return <Main {...data} />;
            case 2:
                return <Review />;
            case 3:
                return <PaymentForm />;
            default:
                throw new Error('Unknown step');
        }
    }

    const handleChange = (event: React.SyntheticEvent, value: number) => {
        setTabValue(value);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={tabValue}
                        onChange={(event, value) => setTabValue(value)}
                        aria-label='TabContent'
                    >
                        <Tab label='MAIN' value={1} />
                        <Tab label={`REVIEW(${data.hits})`} value={2} />
                    </Tabs>
                </Box>
            </Box>
            {getMainContent()}
        </>
    );
};

/** 다음 버튼 */
const FooterContent = ({ id }: { id: string }) => {
    // const { id } = useParams();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column-reverse',
                    sm: 'row',
                },
                alignItems: 'end',
                flexGrow: 1,
                gap: 1,
                pb: { xs: 12, sm: 0 },
                mt: { xs: 2, sm: 0 },
                justifyContent: 'flex-end',
            }}
        >
            <Link to={`/board/create/${id}`}>
                <Button
                    variant='contained'
                    // endIcon={<ChevronRightRoundedIcon />}
                    sx={{
                        width: {
                            xs: '100%',
                            sm: 'fit-content',
                        },
                    }}
                    // onClick={handleClick}
                >
                    Modify
                </Button>
            </Link>
        </Box>
    );
};

export default function BoardDetail(props: { disableCustomTheme?: boolean }) {
    const { id } = useParams();

    if (typeof id !== 'string') {
        throw new Error('id가 존재하지 않습니다.');
    }
    
    // const { data, isLoading, refetch } = useQuery({
    const { data } = useSuspenseQuery({
        // queryKey: ['boardDetail', id],
        queryKey: ['boardDetail'],
        queryFn: () => getBoard(id),
        // enabled: !!id, // id가 있을 때만 실행되도록 (optional)
    });
    const boardData = Data.getData(data);

    return (
        <StyledGrid>
            <HeaderContent {...boardData} />
            <MainContent {...boardData} />
            <FooterContent id={id} />
        </StyledGrid>
    );
}
