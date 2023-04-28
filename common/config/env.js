// prod-生产 dev-开发 local-本地
const env = "local"
// contextPath路径,此处为了调试,采用本狗线上接口
const contextPath = "blog/v1"

const prod = {
	baseUrl: `https://localhost:9001/${contextPath}`, // 线上环境'
}
const dev = {
	baseUrl: `http://localhost:7001/${contextPath}`, // 开发环境'
}
const local = {
	baseUrl: `http://myblog.javadog.net/${contextPath}`, // 测试环境'
}

const config = {
	dev,
	prod,
	local,
}

export default config[env]
