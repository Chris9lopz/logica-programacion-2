// Convertir grados Celsius a Farenheit y Kelvin
function convertirTemp(gradoCelcius) {
    let gradoFarenheit = (gradoCelcius * 9/5) + 32;
    let gradoKelvin = gradoCelcius + 273.15;
    return [gradoFarenheit, gradoKelvin];
    
}

document.getElementById("btn-enviar").addEventListener("click", function(e){
    e.preventDefault();
    let numero = parseInt(document.getElementById("numero").value, 10);
    let [farenheit, kelvin] = convertirTemp(numero);
    let texto = document.createElement("h3");
    texto.textContent = "La conversión "+ numero + "°C a grados Farenheit es " + farenheit + "° y a grados Kelvin es " + kelvin + "°";
    document.getElementById("formulario").appendChild(texto);
});
