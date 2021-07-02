function RefreshTime() {

    function addZero(i) {
        if (i < 10) {
            i = "0" + i
        }
        return i
    }

    function getTime() {
        let timeDate = new Date
        let timeHours = addZero(timeDate.getHours())
        let timeMinutes = addZero(timeDate.getMinutes())
        let timeSeconds = addZero(timeDate.getSeconds())

        let timeDay = timeDate.toDateString()

        document.getElementById("time").innerHTML = timeHours + ":" + timeMinutes + ":" + timeSeconds
        document.getElementById("day").innerHTML = timeDay
    }

    let timer = setInterval(getTime, 1000)

}

RefreshTime()