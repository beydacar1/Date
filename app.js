setInterval(function () {
    var tarih = new Date();
    var yil = tarih.getFullYear();
    var ay = tarih.getMonth();
    var gun = tarih.getDate();
    var saat = tarih.getHours();
    var dakika = tarih.getMinutes();
    var saniye = tarih.getSeconds();


    document.getElementById("days").innerHTML = gun;
    document.getElementById("hours").innerHTML = saat;
    document.getElementById("minutes").innerHTML = dakika;
    document.getElementById("seconds").innerHTML = saniye;
}, 1000);