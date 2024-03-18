import axios from "axios";
//使用axios 函数创建一个可以发送请求的对象

const instance = axios.create({
    baseURL: "https://api.umong",
    timeout: 1000
})

// 设置请求拦截器
instance.interceptors.request.use(
    function (config) {// 请求之前，设置请求信息的方法
        console.log("请求拦截器")
        return config // 必须返回config

    },
    function (error) { // 请求异常
        return Promise.reject("") // 返回一个失败状态的promise
    }

)
// 设置返回拦截器
instance.interceptors.response.use(
    function (response) { // 响应状态码为200  处理相应数据 最后返回responce
        console.log(response)
        return response

    },
    function (error) {
        console.log(error) //返回失败的promise
        return Promise.reject("something")
    }
)

// 使用默认导出暴露

export default instance