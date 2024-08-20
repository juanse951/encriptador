let textArea1 = document.querySelector(".block1_encriptar");
let textArea2 = document.querySelector(".block2_desencriptar");
let reglasImagen = document.querySelector(".block1_reglas_imagen");
let reglasTexto = document.querySelector(".block1_reglas");
let encriptado = false;
let reglaAplicada = true;

function noTexto1(){
    if(textArea1.value.trim() === ""){

        alert("Por favor, ingresa texto en el área de texto.");
    }else{
        botonEncriptar();
    }

}

function noTexto2(){
    if(textArea1.value.trim() === ""){

        alert("Por favor, ingresa texto en el área de texto.");
    }else{
        botonDesencriptar();
    }

}

textArea1.addEventListener("input", function(){
    restringirCaracteres(textArea1);
});

function restringirCaracteres(textArea1){ 
    let valor = textArea1.value;
    let valorLimpio = valor.replace(/[^a-zA-Z0-9\s]/g,"");
    textArea1.value = valorLimpio;

    if(valor !== valorLimpio){
        reglasImagen.style.width = "1.3rem";
        reglasImagen.style.height = "1.3rem";
        reglasTexto.style.fontSize = "1.3rem";
        reglaAplicada = false ;
    }else{
        if(!reglaAplicada){
        reglasImagen.style.width = "";
        reglasImagen.style.height = "";
        reglasTexto.style.fontSize = "";
        reglaAplicada = true ; 
     }
    }
}

function botonEncriptar(){
    encriptado = true ;
    document.querySelector(".block1_boton_Encrip").setAttribute("disabled","true");
    document.querySelector(".block1_boton_Desencrip").setAttribute("disabled","true");

    ocultarImagen();
    mostrarTextArea2();
    let textoEncriptado = encriptar(textArea1.value);
    textArea2.value = textoEncriptado;
    textArea1.value = "Copia el texto\nPégalo aquí\nHaz clic en: desencriptar\nMira el resultado";
}

function botonDesencriptar(){
    encriptado = false ;
    document.querySelector(".block1_boton_Desencrip").setAttribute("disabled","true");
    document.querySelector(".block1_boton_Encrip").setAttribute("disabled","true");

    ocultarImagen();
    mostrarTextArea2();
    let textoDesencriptado = desEncriptar(textArea1.value);
    textArea2.value = textoDesencriptado;
    textArea1.value = "Copia el texto\nPégalo aquí\nHaz clic en: Encriptar\nMira el resultado";
}

function encriptar(stringEncriptada){
    let matrizCodigo1 = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0 ; i < matrizCodigo1.length ; i++){ // for recorre toda la array
        if(stringEncriptada.includes(matrizCodigo1[i][0])){ // verifica el primer elemento del par del indique 0 del array
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo1[i][0] , [matrizCodigo1[i][1]]);
        }
    }
    return stringEncriptada;
}

function desEncriptar(stringDesencriptada){
    let matrizCodigo2 = [["enter" , "e"] , ["imes" , "i"] , ["ai" , "a"] , ["ober" , "o"] , ["ufat" , "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0 ; i < matrizCodigo2.length ; i++){ // for recorre toda la array
        if(stringDesencriptada.includes(matrizCodigo2[i][0])){ // verifica el primer elemento del par del indique 0 del array
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo2[i][0] , [matrizCodigo2[i][1]]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    let textoCopiado = document.querySelector(".block2_desencriptar");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoCopiado.value);

    textArea2.value = "";
    textArea1.value = "";
    ocultarTextArea2();
    mostrarImagen();

    if(encriptado){
        document.querySelector(".block1_boton_Desencrip").removeAttribute("disabled"); 
    }else {
        document.querySelector(".block1_boton_Encrip").removeAttribute("disabled"); 
    }
        
}

function mostrarImagen(){
    let imagen = document.querySelector(".block2_resultado_imagen");

    if(imagen.style.display === "bloack"){
        imagen.style.display = "none";
    } else {
        imagen.style.display = "block";
    }
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

function ocultarTextArea2(){
    let textAreaDiv2 = document.querySelector(".block2_area_imagen");
    
        if(textAreaDiv2.style.display === "none"){
            textAreaDiv2.style.display = "block";
        }else{
            textAreaDiv2.style.display = "none";
        }
}

