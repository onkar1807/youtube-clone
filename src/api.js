import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        key: 'AIzaSyAMOjAZS0K4rUkAuTfn2KPjKJAMPqa8YrI'
    }
})


export default axiosInstance