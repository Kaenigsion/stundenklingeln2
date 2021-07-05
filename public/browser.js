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
    test()
    document.getElementById("SchulmodusCheckboxId").addEventListener("change", test);
})


function test() {
    let SchulmodusCheckboxVar = document.getElementById("SchulmodusCheckboxId")
    let SchulmodusLabelVar = document.getElementById("SchulmodusLabel")

    if (SchulmodusCheckboxVar.checked == true) {
        SchulmodusLabelVar.innerHTML = "Der Schulmodus ist aktiviert."
        SchulmodusLabelVar.style.color = "rgba(61, 255, 61)"
        SchulmodusLabelVar.style.textShadow = "0px 0px 15px rgba(61, 255, 61)"
    } else {
        SchulmodusLabelVar.innerHTML = "Der Schulmodus ist deaktiviert."
        SchulmodusLabelVar.style.color = "rgba(255, 0, 0)"
        SchulmodusLabelVar.style.textShadow = "0px 0px 15px rgba(255, 0, 0)"
    }
}
},{}],4:[function(require,module,exports){
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
},{}]},{},[2]);
