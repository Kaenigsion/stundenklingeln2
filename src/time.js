function getTime() {
    let timeDate = new Date
    let time = timeDate.toTimeString()
    document.getElementById("time").innerHTML = time
}

let timer = setInterval(getTime, 1000)