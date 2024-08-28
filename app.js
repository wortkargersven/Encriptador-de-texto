// La vocal "e" es convertida a "enter"
// La vocal "i" es convertida a "imes"
// La vocal "a" es convertida a "ai"
// La vocal "o" es convertida a "ober"
// La vocal "u" es convertida a "ufat"

const inputText = document.querySelector(".input_text");
const encryptedInputText = document.querySelector(".encrypted_output_result");
const noQuery = document.getElementById(".output_empty");
const queryResult = document.getElementById(".output_result");
const encryptionKey = [["e", "enter"],["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
const regex = new RegExp("[^abcdefghijklmnñopqrstuvwxyz!¡¿?,. ]");
const outputEmpty = document.getElementById('output_empty');
const encryptedOutputText = document.getElementById('encrypted_output_text');


function encryptButton() {
    if (entryValidation(inputText.value) == true){
        let encryptedOutput = encryptionProc(inputText.value);
        encryptedInputText.innerHTML = encryptedOutput;
        noQuery.style.display = "none";
        queryResult.style.display = "initial";
    }
    else {
        alert("Sólo se aceptan caracteres a-z , . ¡! y ¿?, revisa tu mensaje!");
        inputText.value = "";
        encryptedInputText.innerHTML = "";
    }
}

function encryptionProc(encryptInput) {
    for (let i = 0; i < encryptionKey.length; i++) {
        if (encryptInput.includes(encryptionKey[i][0])) {
            encryptInput = encryptInput.replaceAll(encryptionKey[i][0], encryptionKey[i][1]);
        }
    }
    outputEmpty.classList.add('hidden');
    encryptedOutputText.classList.add('encrypted_output_result_resize')
    console.log(encryptInput);
    return encryptInput;
}

function decryptButton() {
    if (entryValidation(inputText.value) == true) {
        let decryptedOutput = decryptionProc(inputText.value);
        encryptedInputText.innerHTML = decryptedOutput;
        noQuery.style.display = "none";
        queryResult.style.display = "initial";
    }
    else {
        outputEmpty.classList.remove('hidden');
        encryptedOutputText.classList.remove('encrypted_output_result_resize');
        alert("Sólo se aceptan caracteres a-z , . ¡! y ¿?,¿; ¡revisa tu mensaje!");
        inputText.value = "";
        encryptedInputText.innerHTML = "";
    }
}

function decryptionProc (decryptOutput) {
    for (let i = 0; i < encryptionKey.length; i++) {
        if (decryptOutput.includes(encryptionKey[i][1])) {
            decryptOutput = decryptOutput.replaceAll(encryptionKey[i][1], encryptionKey[i][0]);
        }
    }
    outputEmpty.classList.add('hidden');
    encryptedOutputText.classList.add('encrypted_output_result_resize')
    console.log(decryptOutput);
    return decryptOutput;
}

function entryValidation(inputText) {
    if (regex.test(inputText) == true) {
        outputEmpty.classList.remove('hidden');
        encryptedOutputText.classList.remove('encrypted_output_result_resize');
        console.log("Contiene caracteres no permitidos");
        return false;
    }
    return true;
}


function copyOutputText() {
    const copyText = document.getElementById("encrypted_output_text").textContent;
    navigator.clipboard.writeText(copyText);
    alert("Se ha copiado tu mensaje");
}
