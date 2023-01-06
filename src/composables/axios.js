import axios from 'axios'

let URI = process.env.NODE_ENV === 'development' ? 'http://localhost:2023/api/v1' : 'http://localhost:2023/api/v1'

var axiosInstance = axios.create({
  baseURL: URI,
});

export default axiosInstance;