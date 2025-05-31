// 실무에서 일반적으로 모든 변수에 주석은 가독성 및 효율성이 떨어져 미사용 지양
// 꼭 필요한 경우에만 작성 또는 명시적 태그를 붙이고, 변수 자체를 명칭으로 바로 알 수 있도록 작성

/** 게시판 응답 객체 */
export type Boards = Board[];
export interface Board {
    crudId?: number;             // id
    id?: number;             /** id */
    title: string;          /** 제목 */
    contents: string;       // 내용
    hits: number;           // 조회수
    memberId?: number;      // 회원 id
    memberName?: string;    // 회원명
    likes: number;          // 좋아요 수
    tags?: Array<string>;   // 태그 수
    reviews: number;        // 댓글 수
    createdDate: string;    // 생성일자 -> ISO 형식 Date 문자열
    modifiedDate?: string;  // 수정일자
    // deleteYn: 'Y' | 'N';
    deleteYn?: string;       // 삭제 여부
    deletedAt?: string;    // 삭제일자 -> ISO 형식 Date 문자열
}