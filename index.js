let saveEl = document.getElementById("save-el")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
} else {
    saveEl.textContent = ""
}


let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    countEl.textContent = 0
    count = 0
}

document.addEventListener('DOMContentLoaded', function(){
    var storedTotalPeople = localStorage.getItem('totalPeople');

    if (storedTotalPeople){
        document.getElementById('totalPeople').textContent = storedTotalPeople
    }

    function updateTotalPeople(value){
        var totalPeople = parseInt(storedTotalPeople) || 0;
        totalPeople += value;
   

    document.getElementById('totalPeople').textContent = totalPeople;

    localStorage.setItem('totalPeople', totalPeople.toString());
}

updateTotalPeople(5);
})