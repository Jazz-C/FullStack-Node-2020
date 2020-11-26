function alarme() {
    return "Hora de acordar são 08:00";
}

function alarme2() {
    return "Esta perto da sua hora de acordar são 7:50";
}

setTimeout(function(){
    console.log(alarme);
},2000)
console.log(alarme2);