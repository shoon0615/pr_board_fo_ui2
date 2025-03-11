import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

import BoardDataGrid from './board/BoardDataGrid';

import { Card, CardContent, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

/*
export default function MainGrid() {
    return (
        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1280px' } }}>
            <Typography component='h2' variant='h6' sx={{ mb: 2 }}>
                Details
            </Typography>

            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 12 }}>
                    <BoardDataGrid />
                </Grid>
            </Grid>
        </Box>
    );
}
*/

/*
    1. List + ListItem → 간단한 목록 형태의 게시판 → 간단한 게시판, 모바일 UI
    2. Table + TableRow → 데이터가 많은 경우 사용(한눈에 보기 좋음) → 관리자 페이지, 데이터 정렬
    3. Card → 개별 게시글 강조 → 블로그, 미디어 콘텐츠 포함
*/

// 게시글 데이터 타입 정의
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
}

// 게시글 리스트 컴포넌트
const BoardList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Paper sx={{ padding: 2, maxWidth: 600, margin: "auto", mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        게시판 리스트
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} sx={{ padding: 0 }}>
            <Card sx={{ width: "100%", mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

// 게시글 리스트 컴포넌트
const BoardList2: React.FC<{ posts: Post[] }> = ({ posts }) => {
    return (
      <Paper sx={{ padding: 2, maxWidth: 600, margin: "auto", mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          게시판 리스트
        </Typography>
        <List>
          {posts.map((post) => (
            <ListItem key={post.id} divider>
              <ListItemText
                primary={post.title}
                secondary={`${post.author} | ${post.date}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  };

// 게시글 테이블리스트 컴포넌트
const BoardTable: React.FC<{ posts: Post[] }> = ({ posts }) => {
    return (
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
        <Typography variant="h5" sx={{ p: 2 }}>
          게시판 리스트
        </Typography>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>작성일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

// 게시글 카드리스트 컴포넌트
const BoardCardList: React.FC<{ posts: Post[] }> = ({ posts }) => {
    return (
      <Paper sx={{ padding: 2, maxWidth: 600, margin: "auto", mt: 4 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          게시판 리스트
        </Typography>
        <List>
          {posts.map((post) => (
            <ListItem key={post.id} sx={{ padding: 0 }}>
              <Card sx={{ width: "100%", mb: 2 }}>
                <CardContent>
                  <Typography variant="h6">{post.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.content}
                  </Typography>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  };

// 예제 데이터
const samplePosts: Post[] = [
  { id: 1, title: "첫 번째 게시글", content: "이것은 첫 번째 게시글 내용입니다.", author: "관리자", date: "2025-03-02" },
  { id: 2, title: "두 번째 게시글", content: "두 번째 게시글 내용입니다.", author: "유저1", date: "2025-03-01" },
  { id: 3, title: "세 번째 게시글", content: "세 번째 게시글 내용입니다.", author: "유저2", date: "2025-02-28" },
];

// 메인 컴포넌트
const App: React.FC = () => {
    return (
        <>
            <BoardList posts={samplePosts} />
            <BoardList2 posts={samplePosts} />
            <BoardTable posts={samplePosts} />
            <BoardCardList posts={samplePosts} />
        </>
    );
};

export default App;