const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop -scrollY))
});
window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
})

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