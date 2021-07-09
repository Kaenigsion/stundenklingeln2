(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
require('./settingsTab/Schulmodus')
require('./glow')
require('./time')

},{"./glow":1,"./settingsTab/Schulmodus":3,"./time":4}],3:[function(require,module,exports){
// var sortArray = require('sort-array')
// // import sortArray from './node_modules/sort-array'
// var partsOfTheDay = ['twilight', 'afternoon', 'morning', 'evening']

// var result = sortArray(partsOfTheDay)

// console.log("buh")
// console.log(result)

window.addEventListener("load", function () {
    SchulmodusCheckboxFun()
    document.getElementById("SchulmodusCheckboxId").addEventListener("change", SchulmodusCheckboxFun);
})


function SchulmodusCheckboxFun() {
    let SchulmodusCheckboxVar = document.getElementById("SchulmodusCheckboxId")
    let SchulmodusLabelVar = document.getElementById("SchulmodusLabel")

    if (SchulmodusCheckboxVar.checked == true) {
        SchulmodusLabelVar.innerHTML = "Der Schulmodus ist aktiviert."
        // SchulmodusLabelVar.style.color = "rgba(61, 255, 61)"
        SchulmodusLabelVar.style.textShadow = "0px 0px 15px rgba(61, 255, 61)"

        document.getElementById("PForNextRing").innerHTML = "N&auml;chstes Klingeln:"
    } else {
        SchulmodusLabelVar.innerHTML = "Der Schulmodus ist deaktiviert."
        // SchulmodusLabelVar.style.color = "rgba(254, 0, 0)"
        SchulmodusLabelVar.style.textShadow = "0px 0px 15px rgba(255, 0, 0)"

        document.getElementById("PForNextRing").innerHTML = ""
    }
}
},{}],4:[function(require,module,exports){

setInterval(getTime, 1000)


window.addEventListener("load", function () {


    document.getElementById("SchulmodusCheckboxId").addEventListener("change", function () {
        nextRingFun()
        let timer = setInterval(TimerFunc, 1000)
        if (document.getElementById("SchulmodusCheckboxId").checked == false) {
            clearInterval(timer)
        }
    })
})

function TimerFunc() {
    nextRingFun(getTime(0))
    stundenKlingelnStarten(getTime(1))
}




function addZero(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

function getTime(whatToReturn) {
    let timeDate = new Date
    let timeHours = addZero(timeDate.getHours())
    let timeMinutes = addZero(timeDate.getMinutes())
    let timeSeconds = addZero(timeDate.getSeconds())

    let timeDay = timeDate.toDateString()
    let timeString = timeHours + ":" + timeMinutes + ":" + timeSeconds

    document.getElementById("time").innerHTML = timeString
    document.getElementById("day").innerHTML = timeDay

    if (whatToReturn == 0) {
        return timeMinutes, timeHours
    } else if (whatToReturn == 1) {
        return timeString
    }
}

function nextRingFun(min, h) {
    let SchulmodusCheckboxVar = document.getElementById("SchulmodusCheckboxId").checked
    let nextRing = "easter egg ;)"
    let StundeBox

    if (SchulmodusCheckboxVar == true) {
        if ((h == 7 && min >= 40) || (h == 8 && min < 25)) {
            nextRing = "08:25"
            StundeBox = "1. Stunde"
        } else if (h == 8 && min >= 25 && min < 35) {
            nextRing = "08:35"
            StundeBox = "1. Stunde, Pause (10 min.)"
        } else if ((h == 8 && min >= 35) || (h == 9 && min < 20)) {
            nextRing = "09:20"
            StundeBox = "2. Stunde"
        } else if (h == 9 && min >= 20 && min < 40) {
            nextRing = "09:40"
            StundeBox = "2. Stunde, Pause (20 min.) <br> Frühstückpause"
        } else if ((h == 9 && min >= 40) || (h == 11 && min < 10) || h == 10) {
            nextRing = "11:10"
            StundeBox = "3. +4. Stunde"
        } else if (h == 11 && min >= 10 && min < 20) {
            nextRing = "11:20"
            StundeBox = "4. Stunde, Pause (10 min.)"
        } else if ((h == 11 && min >= 20) || (h == 12 && min < 05)) {
            nextRing = "12:05"
            StundeBox = "5. Stunde"
        } else if (h == 12 && min >= 05 && min < 35) {
            nextRing = "12:35"
            StundeBox = "5. Stunde, Pause (30 min.) <br> Mittagspause"
        } else if ((h == 12 && min >= 35) || (h == 13 && min < 20)) {
            nextRing = "13:20"
            StundeBox = "6. Stunde"
        } else {
            nextRing = "7:40"
            StundeBox = "Pause (18 h 20 min)"
        }
    } else { nextRing = "" }

    document.getElementById("nextRingId").innerHTML = nextRing
}


function stundenKlingelnStarten(timeString) {
    switch (timeString) {
        //1.Stunde
        case "07:40:00":
            Klingeln(0)
            break;

        case "08:25:00":
            Klingeln(1)
            break;

        //2.Stunde
        case "08:35:00":
            Klingeln(0)
            break;

        case "09:20:00":
            Klingeln(1)
            break;

        //3.+4. Stunde
        case "09:40:00":
            Klingeln(0)
            break;

        case "11:10:00":
            Klingeln(1)
            break;

        //5.Stunde
        case "11:20:00":
            Klingeln(0)
            break;

        case "12:05:00":
            Klingeln(1)
            break;

        //6. Stunde
        case "12:35:00":
            Klingeln(0)
            break;

        case "13:20:00":
            Klingeln(2)
            break;
    }

    console.log(timeString)
}

function Klingeln(typeOfRing) {
    let ring
    let RingItSelf
    // volume = volume / 100
    //Stunde
    if (!typeOfRing) {
        return
    }

    if (typeOfRing == 0) {
        RingItSelf = "/files/Stundenkligneln.mp3"
    } else if (typeOfRing == 1) {
        RingItSelf = "/files/Pausenkligneln.mp3"
        //Pause
    } else if (typeOfRing == 2) {
        RingItSelf = "/files/letztesPausenklingeln.mp3"
    } //letzte Pause

    ring = new Audio(RingItSelf)
    ring.play()
    // Audio.volume = volume
}

},{}]},{},[2]);
