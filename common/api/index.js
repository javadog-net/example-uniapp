const http = uni.$u.http
const api = {
    /**
     * 登录
     */
    login(params) {
        return http.post('/login', params)
    },
}

export default api;
