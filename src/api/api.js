import axios from "axios";
// import service from "./service";
export default {
  // 获取币的价格
  getCoinPrice: (data) => {
    return axios.get(`https://api.coingecko.com/api/v3/simple/price/?ids=${data}&vs_currencies=usd`);
  },
  // accountRegister: (data: any) => {
  //   return service.post(`${BASE_API}comm/create`, data);
  // },
  // accountSendEmail: (data: any) => {
  //   return service.post(`${BASE_API}comm/sendEmail`, data);
  // },
  // accountLogin: (data: any) => {
  //   return service.post(`${BASE_API}comm/login`, data);
  // },
  // accountUpdateInfo: (data: any) => {
  //   return service.post(`${BASE_API}comm/updateInfo`, data);
  // },
  // accountForget: (data: any) => {
  //   return service.post(`${BASE_API}comm/forget`, data);
  // },
  // accountUpdate: (data: any, headers: any) => {
  //   return service.postAndHeaders(`${BASE_API}api/user/update`, data, headers);
  // },
  // getUserNonce: (data: any, headers: any) => {
  //   return service.postAndHeaders(`${BASE_API}api/user/nonce`, data, headers);
  // },
  // bindWallet: (data: any, headers: any) => {
  //   return service.postAndHeaders(`${BASE_API}api/user/verify`, data, headers);
  // },
};
