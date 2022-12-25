import axios from "axios";
const axiosInstance = axios.create({baseURL: "http://172.16.88.228:1000/api/v1"})
const currentLang = localStorage.getItem('DKLang') ? localStorage.getItem('DKLang') : "en"


const getNews = () => {
    return axiosInstance.get('/news/all')
}
const getCurrentNews = (id) => {
    return axiosInstance.get(`/news/${id}`)
} 

const getVacancies = () => {
    return axiosInstance.get(`/vacancies/all`)
}
 

export {
    getNews,
    getCurrentNews,
    getVacancies,
}