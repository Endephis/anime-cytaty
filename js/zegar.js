function zegar() {
    var data = new Date();
    var godzina = data.getHours();
    var min = data.getMinutes();
    var sek = data.getSeconds();
     var terazjest = ""+godzina+
    ((min<10)?":0":":")+min+
    ((sek<10)?":0":":")+sek;
    document.getElementById("zegarek").innerHTML = terazjest;
    setTimeout("zegar()", 1000); }
    zegar();