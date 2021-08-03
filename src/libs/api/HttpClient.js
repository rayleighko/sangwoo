import axios from 'axios'

const defaultAxiosRequestConfig = {
    baseURL: "https://mycroft-test-api.herokuapp.com",
    headers: {
        'content-type': "application/json" 
    }
}

/**
 * 
 * @param {AxiosRequestConfig} config 
 * @returns  Promise<AxiosResponse<any>>
 */
const request = async (config) => axios.request({ ...defaultAxiosRequestConfig, ...config})

export const HttpClient = {
    request
}

export default HttpClient
