let textAreaElement = document.getElementById ("ingreso_texto");
console.log(textAreaElement.value);
function desencriptar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");}
function encriptar(texto) {
        const mapeo = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };  
const textoEncriptado= textAreaElement.value.split('').map(char => mapeo[char] || char).join('');

textAreaElement.value = textoEncriptado;

}
