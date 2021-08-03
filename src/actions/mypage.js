import * as API from '../apis/mypage'

export const findOneOrder = async (payload) => {

    try {
        const response = await API.findOneOrder() 
        return response
    } catch(e) {
//
    }   
}

export const findAllOrder = async (payload) => {
    try {
        const response = await API.findAllOrder() 
        return response
    } catch(e) {
//
    }   
}
