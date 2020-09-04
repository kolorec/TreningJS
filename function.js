var zodiacSign;
console.log(zodiacSign);
function czasomierz() {
    let curDate = new Date();
    let ddd = curDate.getDate();
    let mmm = curDate.getMonth() + 1;
    switch (mmm) {
        case 1: mmm = "JAN";
            if (ddd<20) {zodiacSign = "KOZ";}
            else {zodiacSign = "WOD";}
        break;
        case 2: mmm = "FEB";
            if (ddd<18) {zodiacSign = "WOD";}
            else {zodiacSign = "RYB";}
        break;
        case 3: mmm = "MAR";
            if (ddd<20) {zodiacSign = "RYB";}
            else {zodiacSign = "BAR";}
        break;
        case 4: mmm = "APR";
            if (ddd<20) {zodiacSign = "BAR";}
            else {zodiacSign = "BYK";}
        break;
        case 5: mmm = "MAY";
            if (ddd<21) {zodiacSign = "BYK";}
            else {zodiacSign = "BLI";}
        break;
        case 6: mmm = "JUN";
            if (ddd<21) {zodiacSign = "BLI";}
            else {zodiacSign = "RAK";}
        break;
        case 7: mmm = "JUL";
            if (ddd<22) {zodiacSign = "RAK";}
            else {zodiacSign = "LEW";}
        break;
        case 8: mmm = "AUG";
            if (ddd<23) {zodiacSign = "LEW";}
            else {zodiacSign = "PAN";}
        break;
        case 9: mmm = "SEP";
            if (ddd<23) {zodiacSign = "PAN";}
            else {zodiacSign = "WAG";}
        break;
        case 10: mmm = "OCT";
            if (ddd<23) {zodiacSign = "WAG";}
            else {zodiacSign = "SKO";}
        break;
        case 11: mmm = "NOV";
            if (ddd<22) {zodiacSign = "SKO";}
            else {zodiacSign = "STR";}
        break;
        case 12: mmm = "DEC";
            if (ddd<21) {zodiacSign = "STR";}
            else {zodiacSign = "KOZ";}
        break;
    }

    // console.log(zodiacSign);  

    let yyy = curDate.getFullYear();
    let hhh = curDate.getHours();
    let min = curDate.getMinutes();
    let sek = curDate.getSeconds();

    //if (ddd < 10) ddd = "0"+ddd;
    switch (ddd) {
        case 1: ddd = "1st";
            break;
        case 2: ddd = "2nd";
            break;
        case 3: ddd = "3rd";
            break;
        default:
            ddd = ddd + "th";
            break;
    }
    if (hhh < 10) hhh = "0" + hhh;
    if (min < 10) min = "0" + min;
    if (sek < 10) sek = "0" + sek;

    document.getElementById("display").innerHTML = ddd + " of " + mmm + " '" + yyy + " || " + hhh + ":" + min + ":" + sek;
    //
    setTimeout("czasomierz()", 1000); 
}

console.log(zodiacSign);

function sprawdz() {
    let liczto = document.getElementById("liczbaIn").value;
    console.log(liczto);
    setTimeout("", 3000);
    // ifNumberwhat = () => {
    if (liczto > 0) console.log("dodatnia")
    else if (liczto < 0) console.log("ujemna")
    else if (liczto == "") console.log("NaN"), alert("Wpisz liczbę")
    else console.log("ZERO");

    //     setTimeout(ifNumberwhat(), 3000)

    // // console.log(liczto);
};

