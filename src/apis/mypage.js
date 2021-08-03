import { HttpClient } from "../libs/api"

/**
 * 
 * @param { string } id 
 * @returns {Promise<{
 * id: number,
 * itemName: string
 * }>}
 */
export const findOneOrder = (id) => 
    HttpClient.request({
        method: "GET",
        url: `mypage/order/${id}`,
    })

/**
 * 
 * @param {{
 * page: 0
 * }} params 
 * @returns {Promise<{
 * totalPages : number,
 * currentPage : number,
 * content:{
 * id: number,
 * itemName: string
 * }[]>
 * }
 */
export const findAllOrder = (params) => 
    HttpClient.request({
        method: "GET",
        url: "mypage/order",
        params
    })
