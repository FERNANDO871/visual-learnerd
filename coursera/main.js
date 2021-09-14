


function edad1(){

    let edad = prompt("cual es tu edad?");
    edad = parseInt(edad);
    
    if (edad <18 ) {
        document.write("no puedes pasar por meco");

    }else {
        let hora = prompt("que horas traes?");
        hora = parseInt(hora);
        if ( hora<7 && hora>=2) {
         document.write("adelante caminante.");
        
        } else {
        edad = prompt("con cuanto paga?");
        edad = parseInt(edad);
        if(edad >= 50 ){
           alert("adelante caminante.");
        }else{
            alert("no puedes pasar por pobre.");
        }
        
     }
    }
}

edad1();
