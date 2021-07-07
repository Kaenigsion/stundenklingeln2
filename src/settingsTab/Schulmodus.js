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