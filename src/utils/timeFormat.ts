import dayjs from "dayjs"
function timeFormat(time: string, format?: string) {
	const newTime = dayjs(time).format(format || "YYYY-MM-D HH:mm")
	// console.log(newTime)
	return newTime
}

export { timeFormat }
