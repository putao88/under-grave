import axios from "axios";
import qs from "qs";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true
});
service.defaults.withCredentials = true; //让ajax携带cookie
service.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
service.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return response.data;
    } else {
      return response;
    }
  },
  (error) => {
    return Promise.resolve(error.response);
  },
);
export default {
  get(url, data = {}) {
    return new Promise((resolve, reject) => {
      service
        .get(url, { params: data })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   *当后台接扣要求传参形式是表单时:
   *post请求的请求头设置:service.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
   * 参数形式应为.post(url, qs.stringify(data))  注:qs直接引用,安装axios时已自带
   */
  post(url, data) {
    return new Promise((resolve, reject) => {
      service
        .post(url, qs.stringify(data))
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  /**
   * post + headers
   * @param {String} url [请求的url地址]
   * @param {any} data [请求时携带的参数]
   * @param {any} headers [请求时携带的headers]
   * @returns
   */
  postAndHeaders(url, data, headers) {
    return new Promise((resolve, reject) => {
      service
        .post(url, qs.stringify(data), headers)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
