const textoEntrada = document.querySelector(".texto-entrada");
const textoSalida = document.querySelector(".texto-salida");
const image = document.querySelector(".imagen-salida");
const infoSalida = document.querySelector(".ingresar-texto");

function botonEncriptar(){
    const textoEncriptado = encriptar(textoEntrada.value);
    textoSalida.value = textoEncriptado.replace(/[^a-zA-Z ]/g, '');
    image.style.display = "none";
    infoSalida.style.display = "none";
    textoEntrada.value = "";
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textoEntrada.value);
    textoSalida.value = textoEncriptado.replace(/[^a-zA-Z ]/g, '');
    image.style.display = "none";
    infoSalida.style.display = "none";
    textoEntrada.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function copiar(){
    textoSalida.select();
    document.execCommand('copy');
}