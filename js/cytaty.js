var cytaty = [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6'
];

var rand = cytaty[Math.floor(Math.random()*cytaty.length)];
var rand2 = cytaty[Math.floor(Math.random()*cytaty.length)];
var rand3 = cytaty[Math.floor(Math.random()*cytaty.length)];
var rand4 = cytaty[Math.floor(Math.random()*cytaty.length)];
var rand5 = cytaty[Math.floor(Math.random()*cytaty.length)];
var rand6 = cytaty[Math.floor(Math.random()*cytaty.length)];


function pokazCytat() {
    document.getElementById("cytat1").innerHTML = rand;
    document.getElementById("cytat2").innerHTML = rand2;
    document.getElementById("cytat3").innerHTML = rand3;
    document.getElementById("cytat4").innerHTML = rand4;
    document.getElementById("cytat5").innerHTML = rand5;
    document.getElementById("cytat6").innerHTML = rand6;
}
pokazCytat();




