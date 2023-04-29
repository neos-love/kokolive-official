const updateTime = () => {
    const dom = document.getElementsByClassName("T1")[0]
    const date = new Date()
    const time = date.toLocaleTimeString()
    const dateStr = date.toLocaleDateString()

    dom.innerHTML = `T+${dateStr} ${time} JST`
}

setInterval(updateTime, 1000)