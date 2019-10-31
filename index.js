var validation = document.getElementById('validation');
validation.addEventListener('click',valide,refresh);
var trad = document.getElementById('romain');
var valor = document.getElementById('saisi');


function valide(){
    val = valor.value;
    if(isNaN(val)){
        trad.innerHTML = "Ceci n'est pas un chiffre";
    }
    if(val == ""){
        trad.innerHTML = "Rentrer un chiffre";
    }
    if(val > 9999){
        trad.innerHTML = "Chiffre trop grand";
    }else{
    console.log(val);
    rest = val%1000;
    console.log(rest);
    m = (val - rest)/1000
    console.log(m);
    i = 0
    while(i<m){
    trad.innerHTML += "M"
    i++
    }
    val = rest;
    console.log(val);
    rest = val%500;
    console.log(rest);
    d = (val - rest)/500
    console.log(d);
    i = 0
    while(i<d){
        trad.innerHTML += "D"
        i++
    }
    val = rest;
    console.log(val);
    rest = val%100;
    console.log(rest);
    c = (val - rest)/100
    console.log(c);
    i = 0
    while(i<c){
        trad.innerHTML += "C"
        i++
    }
    val = rest;
    console.log(val);
    rest = val%50;
    console.log(rest);
    l = (val - rest)/50
    console.log(l);
    i = 0
    while(i<l){
        trad.innerHTML += "L"
        i++
    }
    val = rest;
    console.log(val);
    rest = val%10;
    console.log(rest);
    x = (val - rest)/10
    console.log(x);
    i = 0
    while(i<x){
        trad.innerHTML += "X"
        i++
    }
    val = rest;
    console.log(val);
    rest = val%5;
    console.log(rest);
    v = (val - rest)/5
    console.log(v);
    i = 0
    while(i<v){
        trad.innerHTML += "V"
        i++
    }
    i = 0
    while(i<rest){
        trad.innerHTML += "I"
        i++
    }
}
    this.removeEventListener('click',valide);
    this.addEventListener('click',refresh);
    validation.innerHTML = "Effacer";
    
}
function refresh(){
    valor.value = "";
    trad.innerHTML = "";
    validation.innerHTML = "Valider";
    this.removeEventListener('click',refresh);
    this.addEventListener('click',valide);
}
