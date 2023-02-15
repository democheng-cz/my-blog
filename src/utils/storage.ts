class DcCache {
	//保存数据到本地
	setCache = function (key: string, value: any) {
		window.sessionStorage.setItem(key, JSON.stringify(value))
	}

	getCache = function (key: string) {
		return JSON.parse(window.sessionStorage.getItem(key)!) || null
	}

	deleteCache = function (key: string) {
		window.sessionStorage.removeItem(key)
	}
}

export default new DcCache()
