import * as API from '../apis/auth'

export const signUp = async (payload) => {
    try {
        const response = await API.signUp() 
        return response
    } catch(e) {
        // 비밀번호를 8글자 미만으로 하여 백엔드 API 호출 시, 401 Unauthorized 실패 응답 코드를 받는다.
    }   
}

export const login = async (payload) => {

    try {
        const response = await API.login() 
        return response
    } catch(e) {
//
    }   
}
