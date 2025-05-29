import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';       // 윤년 판단 플러그인
import relativeTime from 'dayjs/plugin/relativeTime';   // 상대 시간 플러그인(0분전, 1달전, 1년전..)
import 'dayjs/locale/ko';

dayjs.extend(isLeapYear, relativeTime);     // 플러그인 등록
dayjs.locale('ko');                         // 언어 등록

/** 현재 날짜 반환 함수 */
export const getNow = () => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
}

/** 날짜 포맷 변환 함수(YYYY-MM-DD) */
// export const LocalDate = (timestamp: string) => {
export const convertDate = (timestamp: string) => {     // ISO Date -> Format
    // return convertDateFormat(timestamp, 'YYYY-MM-DD');
    return dayjs(timestamp).format('YYYY-MM-DD');
}

/** 날짜 포맷 변환 함수(YYYY-MM-DD HH:mm:ss) */
export const convertDateTime = (timestamp: string) => {
    return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
}

/** 날짜 포맷 변환 함수 */
export const convertDateFormat = (timestamp: string, format: string) => {
    return dayjs(timestamp).format(format);
}

/** date 변환 함수 */
// export default function unix_timeStamp(timestamp) {
export const unix_timeStamp = (timestamp: string) => {
    let date = '';
    
    // if (timestamp !== undefined && timestamp instanceof Date) {
    if (timestamp !== undefined) {
        date = dayjs.unix(Number(timestamp)).format('YYYY-MM-DD HH:mm:ss');
    } else {
        date = dayjs().format('YYYY-MM-DD HH:mm:ss');   // 이건 현재시간이 출력됨
    }
    return date;
}