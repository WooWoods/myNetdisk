import axios from 'axios';
import router from '../router'
import { showToast, showLoadingToast, closeToast, setToastDefaultOptions } from 'vant';
import 'vant/es/toast/style';

const service = axios.create({
  //baseURL: "http://218.108.220.230:8888",
  baseURL: '/sysapi',
  // 超时时间暂定5s
  timeout: 3000,
});

//显示持续时长
// setToastDefaultOptions({ duration: 3000 }); 

// loading 次数
/*
let loadingCount = 0;

service.interceptors.request.use(
  config => {
    // 加入Loading
    showLoadingToast({
      message: '加载中...',
      //禁止背景点击
      forbidClick: true,
    });
    loadingCount++;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
*/

// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=utf-8';
        let token = window.localStorage.getItem('token');
        console.log(token)
        if (token) {
          config.headers.Authorization = token
        }else{
          console.log('No token')
        }
        // config.headers['token'] = user.token;  // 设置请求头
        return config
    }, 
    error => {
        return Promise.reject(error)
    }
);
/*
service.interceptors.request.use((req) => {
    return req;
})
*/

// response 拦截器
// 可以在接口响应后统一处理结果
service.interceptors.response.use(
  response => {
    // 关闭loading
    /*
    loadingCount--;
    if (loadingCount === 0) {
      closeToast();
    }
    */
    let res = response.data;
    console.log(res)
    // 如果是返回的文件
    if (response.config.responseType === 'blob') {
        return res
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === 'string') {
        res = res ? JSON.parse(res) : res
    }
    return res;
  },
  error => {
    console.log(error)
    let status = error.response.status
    console.log(status)
    // 处理异常情况，根据项目实际情况处理或不处理
    if (status) {
      // 根据约定的响应码处理
      switch (status) {
        case 401:
          error.message = '无效的token';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = '404';
          break;
        case 502:
          error.message = '服务器端出错';
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      // 超时处理
      console.error('API请求错误:', error);
      error.message = '服务器响应超时，请刷新当前页';
    }
    showToast(error.message);
    return Promise.resolve(error.response);
  }
);

export default service
