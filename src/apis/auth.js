import { HttpClient } from "../libs/api";

/**
 * 
 * @param {{
 * email: string,
 * password: string,
 * mobile: string,
 * }} data 
 * @returns {Promise<{
 * token: string
 * }>}
 */
export const signUp = (data) => 
    HttpClient.request({
        method: "POST",
        url: "sign-up",
        data
    })

/**
 * 
 * @param {{
 * email: string,
 * password: string
 * }} data 
 * @returns {Promise<{
 *  token: string
 * }>}
 */
export const login =( data) => 
    HttpClient.request({
        method: "POST",
        url: "login",
        data
    })
