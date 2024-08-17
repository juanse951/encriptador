let textArea1 = document.querySelector(".block1_encriptar");
let textArea2 = document.querySelector(".block2_desencriptar");

function botonEncriptar(){
    ocultarImagen();
    mostrarTextArea2();
    let textoEncriptado = encriptar(textArea1.value);
    textArea2.value = textoEncriptado;
    textArea1.value = "";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0 ; i < matrizCodigo.length ; i++){ // for recorre toda la array
        if(stringEncriptada.includes(matrizCodigo[i][0])){ // verifica el primer elemento del par del indique 0 del array
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0] , [matrizCodigo[i][1]]);
        }
    }
    return stringEncriptada;
}

function ocultarImagen(){
    let imagen = document.querySelector(".block2_resultado_imagen");

        if(imagen.style.display === "none"){
            imagen.style.display = "block";
        } else {
            imagen.style.display = "none";
        }
}

function mostrarTextArea2(){
    let textAreaDiv2 = document.querySelector(".block2_area_imagen");
    
        if(textAreaDiv2.style.display === "block"){
            textAreaDiv2.style.display = "none";
        }else{
            textAreaDiv2.style.display = "block";
        }
}