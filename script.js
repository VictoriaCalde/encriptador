const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  // Verificar si el mensaje está vacío
  if (stringEncriptada.trim() === "") {
    alert("Error: El mensaje está vacío.");
    return null;
  }

  // Verificar si contiene caracteres mayúsculas o acentuados
  const regex = /[A-Záéíóú]/;
  if (regex.test(stringEncriptada)) {
    alert("Error: Solo se permiten palabras minúsculas y sin acentos.");
    return null;
  }

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";

}
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.style.backgroundImage = "none";
    mensaje.value = textoEncriptado;
    textArea.value = "";
   
  }
  
function btnCopiar() {
  let mensaje = document.getElementById("mensaje");
  mensaje.select();
  mensaje.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  if (stringDesencriptada.trim() === "") {
    alert("Error: El mensaje está vacío.");
    return null;
  }
  const regex = /[A-Záéíóú]/;
  if (regex.test(stringDesencriptada)) {
    alert("Error: Solo se permiten palabras minúsculas y sin acentos.");
    return null;
  }

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}
