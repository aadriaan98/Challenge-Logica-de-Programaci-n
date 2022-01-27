var inputTexto = document.getElementById("input-texto");
var inputMensaje = document.getElementById("input-mensaje");
var botonEncriptar = document.getElementById("button-encriptar");
var botonDesencriptar = document.getElementById("button-desencriptar");

function encriptar(){
    texto = inputTexto.value
    textoEncriptado = texto.replaceAll('e', 'enter')
                           .replaceAll('i', 'imes')
                           .replaceAll('a', 'ai')
                           .replaceAll('o', 'ober')
                           .replaceAll('u', 'ufat');
inputMensaje.value = textoEncriptado;
inputTexto.value = "";  
}
botonEncriptar.onclick = encriptar;

function desencriptar(){
    texto = inputTexto.value;
    textoDesencriptado = texto.replaceAll('enter', 'e')
                              .replaceAll('imes', 'i')
                              .replaceAll('ai', 'a')
                              .replaceAll('ober', 'o')
                              .replaceAll('ufat', 'uf');
inputMensaje.value = textoDesencriptado;
inputTexto.value = "";  
}
botonDesencriptar.onclick = desencriptar;