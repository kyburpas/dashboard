function myFunction () {
    alert("Hallo Pascal, Ich bin dein Dashboard")
}

var text = document.getElementById("spruchDesTages").innerHTML

var spruchDesTagesArchiv = [];
spruchDesTagesArchiv.push("Es ist keine Schande, nichts zu wissen – wohl aber, nichts lernen zu wollen. (Platon)")
spruchDesTagesArchiv.push("Kleine Schritte sind besser als keine Schritte.")
spruchDesTagesArchiv.push("Neue Wege entstehen dadurch, dass man sie geht. (Franz Kafka)")
spruchDesTagesArchiv.push("Man kann niemanden überholen, wenn man in seine Fußstapfen tritt. (François Truffaut)")
spruchDesTagesArchiv.push("Das Glück Deines Lebens hängt von der Beschaffenheit Deiner Gedanken ab. (Marc Aurel)")
spruchDesTagesArchiv.push("Wohin du auch gehst, geh mit deinem ganzen Herzen. (Konfuzius)")
spruchDesTagesArchiv.push("Nicht die Glücklichen sind dankbar. Es sind die Dankbaren, die glücklich sind. (Francis Bacon)")

var x = Math.floor(Math.random()*6)+1;

document.getElementById("spruchDesTages").innerHTML = spruchDesTagesArchiv[x];

// Uhr

var time = "12:30";

function startTime() {

    var today = new Date();
    var h  = today.getHours();
    var m  = today.getMinutes();
    var s  = today.getSeconds();

    var wochentag = today.getDay();
    var monatstag = today.getDate();
    var monat = today.getMonth();
    var jahr = today.getFullYear();

    if ( s < 10) {

        s = "0"+s;

    }

    if ( m < 10) {

        m = "0"+m;

    }

    if ( h < 10) {

        h = "0"+h;

    }

    switch (wochentag){
        case 0: wochentag = "Sonntag";
        break;
        case 1: wochentag = "Montag";
        break;
        case 2: wochentag = "Dienstag";
        break;
        case 3: wochentag = "Mittwoch";
        break;
        case 4: wochentag = "Donnerstag";
        break;
        case 5: wochentag = "Freitag"; 
        break;
        case 6: wochentag = "Samstag";
        break;
    }



   switch (monat){
    case 0: monat = "Januar";
    break;
    case 1: monat = "Februar";
    break;
    case 2: monat = "März";
    break;
    case 3: monat = "April";
    break;
    case 4: monat = "Mai";
    break;
    case 5: monat = "Juni"; 
    break;
    case 6: monat = "July";
    break;
    case 7: monat = "August";
    break;
    case 8: monat = "September";
    break;
    case 9: monat = "October";
    break;
    case 10: monat = "November";
    break;
    case 11: monat = "Dezember";
    break;
}
    
    document.getElementById("clock").innerHTML = wochentag+" "+monatstag+". "+monat+" "+ jahr+" "+h +":"+ m + ":" + s;
    var t = setTimeout(startTime,500);


}

