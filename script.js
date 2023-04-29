const updateTime = () => {
    const dom = document.getElementsByClassName("T1")[0]
    const date = new Date()
    const time = date.toLocaleTimeString()
    const dateStr = date.toLocaleDateString()

    dom.innerHTML = `T+${dateStr} ${time} JST`
}

// format date MM/DD(ddd) HH:MM
// zero padding
const formatTime = (date) => {
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][date.getDay()]
    return `${month}/${day}(${dayOfWeek}) ${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
}
const updateEventCalendar = async () => {
    const dom = document.getElementsByClassName("event-text")[0]
    const url = "https://neokun.kokoa.dev/"
    const data = await fetch(url)
    const json = await data.json()
    const events = [json[0], json[1], json[2]]
    dom.innerHTML = events.map((event) => { return `${formatTime(new Date(event.startTime))}~ ${event.title}`}).join("<br>")
}
updateEventCalendar()
setInterval(updateTime, 1000)