import axios from "axios";
const axiosInstance = axios.create({baseURL: "http://172.16.88.228:1000/api/v1"})


const getNews = () => {
    return axiosInstance.get('/news/all')
}
 

export {
    getNews,
}