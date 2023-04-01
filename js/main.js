window.onload = function () {
    
    var segundos = 00;
    var dezenas = 00;
    var addDezenas = document.getElementById("dezenas");
    var addSegundos = document.getElementById("segundos");
    var btnStart = document.getElementById("btn-start");
    var btnStop = document.getElementById("btn-stop");
    var btnReset = document.getElementById("btn-reset");
    var Interval;

    btnStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    btnStop.onclick = function () {
        clearInterval(Interval);
    }

    btnReset.onclick = function () {
        clearInterval(Interval);
        dezenas = "00";
        segundos = "00";
        addDezenas.innerHTML = dezenas;
        addSegundos.innerHTML = segundos;
    }

    function startTimer() {
        dezenas++;

        if (dezenas <= 9) {
            addDezenas.innerHTML = "0" + dezenas;
        }

        if (dezenas > 9) {
            addDezenas.innerHTML = dezenas;
        }
        if (dezenas > 99) {
            console.log("segundos");
            segundos++;
            addSegundos.innerHTML = "0" + segundos;
            dezenas = 0;
            addDezenas.innerHTML = "0" + 0;
        }

        if (segundos > 9) {
            addSegundos.innerHTML = segundos;
        }
    }
}