//Cuenta de variación de temperatura
var valor_masa2 = document.getElementById("masa2");
var valor_cal_especifico2 = document.getElementById("calor_especifico2")
var absor_calorias = document.getElementById("absorcion_calorias");
var boton_de_enviar_2 = document.getElementById("boton_enviar2");
boton_de_enviar_2.addEventListener("click", cuentaVarTemp);

//Cuenta Calorica
var valor_temp_inicial = document.getElementById("temperatura_inicial");
var valor_temp_final = document.getElementById("temperatura_final");
var boton_de_enviar = document.getElementById("boton_enviar");
var valor_masa = document.getElementById("masa");
var valor_cal_especifico = document.getElementById("calor_especifico");
boton_de_enviar.addEventListener("click", cuentaCalorica);

//Cuenta de f a c
var valor_temp_f = document.getElementById("temp_f");
var boton_enviar_3 = document.getElementById("boton_enviar3");
boton_enviar_3.addEventListener("click", pasoDeFaC)

//Cuanta de c a f
var valor_temp_c = document.getElementById("temp_c");
var boton_enviar_4 = document.getElementById("boton_enviar4");
boton_enviar_4.addEventListener("click", cuentaDeCaF);

//Funciones
function cuentaCalorica()
{
    var m = valor_masa.value;
    var ce = valor_cal_especifico.value;
    var ti = valor_temp_inicial.value;
    var tf = valor_temp_final.value;
    var q = m*ce*(tf-ti);
    alert("El resultado es " + q);
}

function cuentaVarTemp()
{
    var m2= valor_masa2.value;
    var ce2 = valor_cal_especifico2.value;
    var ac = absor_calorias.value;
    var varia_de_tem = (ac/ce2)/m2;
    varia_de_tem = varia_de_tem.toFixed(1);
    alert("El resultado es " + varia_de_tem + " °C");
}

function pasoDeFaC()
{
    var temp_en_f = valor_temp_f.value;
    var paso_de_f_a_c = (temp_en_f-32)*5/9;
    alert(temp_en_f + " °F son " + paso_de_f_a_c.toFixed(1) + " °C");
}

function cuentaDeCaF()
{
    var temp_en_c = valor_temp_c.value;
    var paso_de_c_a_f = (temp_en_c*9/5)+32;
    alert(temp_en_c + " °C son " + paso_de_c_a_f.toFixed(1) + " °F");
}