
/** 데이터 반환 함수 */
// export const getData = (data: Array<object>, isOrElseThrow: boolean) => {
// const fnData = (data: Array<Record<string, any>>, isOrElseThrow: boolean): Record<string, any> => {
// export const getData = <T>(data: T[], isOrElseThrow = false): T | {} => {
export const getData = <T>(wrapper: { data: T[] }, isOrElseThrow = false): T => {
    const result = wrapper?.data?.[0];

    // if (!Array.isArray(data)) { throw new Error('Array 가 아닙니다.'); }

    if (isOrElseThrow && !result) {
        throw new Error('데이터가 존재하지 않습니다.');
    }

    // return result?.data ?? {};
    return result;
}