var vacua = "nombrevacuna 1";
var vacub = "nombrevacuna 2";
var vacuc = "nombrevacuna 3";
var vacud = "nombrevacuna 4";

var contadorTot = 0;
var contadorVac0 = 0;
var contadorVac1 = 0;
var contadorVac2 = 0;
var contadorVac3 = 0;
var contadorVac4 = 0;

var d0 = "despe0";
var d1 = "despe1";
var d2 = "despe2";
var d3 = "despe3";
var d4 = "despe4";

var iv0 = "vacu0";
var iv1 = "vacu1";
var iv2 = "vacu2";
var iv3 = "vacu3";
var iv4 = "vacu4";

var listadoDNI = [];


function fn() {

    var ingreso = document.getElementById("ingreso").value;
    var dniValue = document.getElementById("ingDNI").value;

    listadoDNI.push(dniValue);

    contadorTot = contadorTot + 1;

    if (ingreso >= 0 && ingreso <= 3) {
        contadorVac0++;
        document.getElementById("vacu0").innerHTML = contadorVac0;
        var mesj = "usted no debe recibir vacuna";
        document.getElementById("alertaOK").innerHTML = mesj;
        fnAlertaOK(mesj);
    } else if (ingreso >= 4 && ingreso <= 12) {
        contadorVac1++;
        fn2(contadorVac1, iv1, vacua);
    } else if (ingreso >= 13 && ingreso <= 17) {
        contadorVac2++;
        fn2(contadorVac2, iv2, vacub);
    } else if (ingreso >= 18 && ingreso <= 60) {
        contadorVac3++;
        fn2(contadorVac3, iv3, vacuc);
    } else if (ingreso >= 60) {
        contadorVac4++;
        fn2(contadorVac4, iv4, vacud);
    } else {
        document.getElementById("alertaNO").classList.remove("d-none");
        setTimeout(() => { document.getElementById("alertaNO").classList.add("d-none") }, 7000);
    };

    updateTable();
    document.getElementById("showTV").innerHTML = contadorTot;
    document.getElementById("ingreso").value = "";
    document.getElementById("ingDNI").value = "";

};

function fn2(inp1, inp2, inp3) {

    document.getElementById(inp2).innerHTML = inp1;
    var mesj = "usted debe recibir la vacuna " + inp3;
    document.getElementById("alertaOK").innerHTML = mesj;
    fnAlertaOK(mesj);

};

function fnAlertaOK() {

    document.getElementById("alertaOK").classList.remove("d-none");
    setTimeout(function() { document.getElementById("alertaOK").classList.add("d-none") }, 7000);

};

function updateTable() {

    fnDesperdicios(d1, vacua, contadorVac1);
    fnDesperdicios(d2, vacub, contadorVac2);
    fnDesperdicios(d3, vacuc, contadorVac3);
    fnDesperdicios(d4, vacud, contadorVac4);

};

function showTable() {

    document.getElementById("listaDesperdicios").classList.toggle("d-none");

};
function showTable2() {

    document.getElementById("listaDNI").classList.toggle("d-none");
    cleanTable2();
    fn3();

};

function fnDesperdicios(par1, par2, par3) {

    if (par3 == 0) {
        document.getElementById(par1).innerHTML = "Nadie utilizo la vacuna " + par2 + ", el frasco de 5 esta sin abrir";
    } else if (par3 > 5) {
        document.getElementById(par1).innerHTML = "se desperdiciaron de la vacuna " + par2 + ": " + masDesp(par3) + " vacunas";
    } else {
        document.getElementById(par1).innerHTML = "se desperdiciaron de la vacuna " + par2 + ": " + (5 - par3) + " vacunas";
    };

};

function masDesp(x) {

    if ((5 - (x % 5)) == 5) {
        x = 0;
    } else {
        5 - (x % 5);
    };

};

function fn3() {

    if (listadoDNI.length === 0){
        document.getElementById("listaDNI").innerHTML = "Aun no se cargo ningun DNI.";
    } else {
        var ol = document.getElementById("listaDNI");
        for (let i = 0; i < listadoDNI.length; i++) {
            let li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerHTML = listadoDNI[i];
            ol.appendChild(li);
        };
    };

};

function cleanTable2() {

    var myNode = document.getElementById("listaDNI");
    myNode.innerHTML = "";

};

function cleanLists() {

    contadorTot = 0;
    contadorVac0 = 0;
    contadorVac1 = 0;
    contadorVac2 = 0;
    contadorVac3 = 0;
    contadorVac4 = 0;
    document.getElementById("despe1").innerHTML = "Nadie utilizo la vacuna " + vacua + ", el frasco de 5 esta sin abrir";
    document.getElementById("despe2").innerHTML = "Nadie utilizo la vacuna " + vacub + ", el frasco de 5 esta sin abrir";
    document.getElementById("despe3").innerHTML = "Nadie utilizo la vacuna " + vacuc + ", el frasco de 5 esta sin abrir";
    document.getElementById("despe4").innerHTML = "Nadie utilizo la vacuna " + vacud + ", el frasco de 5 esta sin abrir";
    document.getElementById("vacu0").innerHTML = "0";
    document.getElementById("vacu1").innerHTML = "0";
    document.getElementById("vacu2").innerHTML = "0";
    document.getElementById("vacu3").innerHTML = "0";
    document.getElementById("vacu4").innerHTML = "0";
    document.getElementById("ingreso").value = "";
    document.getElementById("showTV").innerHTML = "0";
    document.getElementById("addV1").innerHTML = vacua;
    document.getElementById("addV2").innerHTML = vacub;
    document.getElementById("addV3").innerHTML = vacuc;
    document.getElementById("addV4").innerHTML = vacud;
    listadoDNI = [];
    cleanTable2();

};

window.onload = function () {

    cleanLists();
    
};
