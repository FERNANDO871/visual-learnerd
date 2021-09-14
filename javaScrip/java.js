let x = prompt("cuantos alumnos son?");
let No = [];



for (let i=0; i < x; i++ ){
    
    No[i] = [prompt( " nombre del alumno:" + (i+1)),0];
};
let y,j ;

for ( i=0; i < 5; i++ ){
    for(j = 0; j< x; j++){
        y  = prompt("esta precente "+ No[j][0]);
        if (y == "p"|| y == "P"){
        No[j][1]++;
        };
   } 
};

for ( i=0; i < x; i++ ){
    if (No[i][1]<4){
        if (No[i][1]<1){
        document.write("El alumno: " + No[i][0] + " esta reprobado, solo tiene: "+ No[i][1] + "  asistencia <br>");
        }else{
            document.write("El alumno: " + No[i][0] + " esta reprobado, solo tiene : "+ No[i][1] + "  asistencias <br>");
        }
    }else{
        document.write("El alumno: " + No[i][0] + " puede aprobar, tiene : " + No[i][1] + "  asistencias <br>" );
    };

};