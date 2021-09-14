

function sumar(){
    let N2 = 0,N1;
    let nu = parseInt(prompt('cuantos numeros quieres sumar ?'));
    for(let x=1; x<=nu; x++ ){
        
        N1 = parseInt(prompt('cual es el numero '+ x + ' ?'));
        N2 = N2 + N1;
        document.write("el numero " + x + " es:" + N1 + "<br>");
    }  
    
    document.write('el resultado es: ' + N2 + "<br>");
}

function restar(){
    let N1;
    let p = parseInt(prompt('cual es el numero positivo ?'));
    document.write("el numero positivo es:" + p + "<br>");
    let nu = parseInt(prompt('cuantos numeros quieres sumar ?'));
    for(let x=1; x<=nu; x++ ){
        N1 = parseInt(prompt('cual es el numero '+ x + ' ?'));
        p = p + N1;
        document.write("el numero " + x + " es:" + N1 + "<br>");
    }  
    document.write('el resultado es: ' + p + "<br>");
}

function multiplicar(){
    let N2 = 1;
    let N1;
    let nu = parseInt(prompt('cuantos numeros quieres multiplicar ?'));
    for(let x=1; x<=nu; x++ ){
        
        N1 = parseInt(prompt('cual es el numero '+ x + ' ?'));
        N2 = N2 * N1;
        document.write("el numero " + x + " es:" + N1 + "<br>");
    }  
    document.write('el resultado es: ' + N2 + "<br>");
}


function dividir(){
    let N1;
    let d = parseInt(prompt('cual es el numero dividendo ?'));
    document.write("el dividendo  es:" + d + "<br>");
    let nu = parseInt(prompt('cuantos numeros quieres dividir ?'));
    for(let x=1; x<=nu; x++ ){
        N1 = parseInt(prompt('cual es el numero '+ x + ' ?'));
        d = d / N1;
        document.write("el numero " + x + " es:" + N1 + "<br>");
    }  
    document.write('el resultado es: ' + d + "<br>");
}



do{
var opcion = prompt('que quieres hacer sumar, restar, multiplicar, dividir o salir? ');

switch(opcion){
    case "sumar":
        sumar();
        break;
    case "restar":
        restar();
        break;
    case "multiplicar":
        multiplicar();
        break;
    case "dividir":
        dividir();
        break;
    case "salir":
        break;
    default:
        alert('escriba alguna de las opcione mostradas en minisculas');
}


}while(opcion != 'salir');