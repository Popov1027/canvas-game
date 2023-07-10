import axios, {AxiosRequestHeaders} from "axios";

const httpAuth = axios.create({
  baseURL: "https://api.authentication.vojiws.com/v1/api/",
});

interface CustomConfig {
  headers: AxiosRequestHeaders & {
    Authorization: string
  }
}

httpAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  const customConfig: CustomConfig = {...config} as CustomConfig;
  customConfig.headers.Authorization =  token ? `Bearer ${token}` : "";
  return  customConfig;
});

export default {
  get: httpAuth.get,
  post: httpAuth.post,
  put: httpAuth.put,
  delete: httpAuth.delete,
};
