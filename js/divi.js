//variables 
var num1 
var num2 
var resultado = document.getElementById("resultado")  
//funcio del boton sumar 
function respuestaClick () {
   num1 = parseInt(document.getElementById("pri").value)
   num2 = parseInt(document.getElementById("seco").value)
    let total = num1 / num2
    if (isNaN(total)) {
        alert("Digite los Numeros")
    } else(
        resultado.innerHTML = total
    )
    setTimeout(comenzar, 1500)
}
function limpiaClick() {
    num1 = document.getElementById("pri").value=""
    num2 = document.getElementById("seco").value=""
}
function comenzar() {
    resultado.innerHTML =""
    
}
comenzar()