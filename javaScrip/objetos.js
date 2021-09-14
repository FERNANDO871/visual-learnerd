var c,p,pa,c,r,co;

class celular {
    constructor(color,peso,pantalla,camara,RAM,costo){
        this.color = color;
        this.peso = peso;
        this.pantalla = pantalla;
        this.camara = camara;
        this.RAM = RAM;
        this.costo = costo;
        this.info = this.color + '<br>' + this.peso + '<br>' + this.pantalla + '<br>' + this.camara + '<br>' + this.RAM + '<br>' + this.costo
        this.encendido = true;
    }
    mostrarInfo(){
        document.write(this.info)
    }
    apagar(){
        if(this.encendido == true){
            alert('celular apagado');
            this.encendido = false;
        }else{
            alert('el celular ya esta apagado');
        }
    }
    encender(){
        if(this.encendido == false){
            alert('celular encendido');
            this.encendido = true;
        }else{
            alert('el celular ya esta encendido');
        }
    }
    reiniciar(){
        if(this.encendido == true){
            this.apagar();
            this.encender();

        }else{
            alert('el celular esta apagado');
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.camara}`);
    }
    grabar(){
        alert(`grabando video en una resolucion de: ${this.camara}`)
    }
    metodos(){
        do{
            var opcion = prompt('que quieres hacer reiniciar, encender, apagar, tomar fotos, grabar video  o salir? ');
            
            switch(opcion){
                case "encender":
                    this.encender();
                    break;
                case "apagar":
                    this.apagar();
                    break;
                case "reiniciar":
                    this.reiniciar();
                    break;
                case "tomar fotos":
                    this.tomarFoto();
                    break;
                case "grabar video":
                    this.grabar();
                    break;
                case 'salir':
                    break;
                default:
                    alert('escriba alguna de las opcione mostradas en minisculas');
            }
            
            
            }while(opcion != 'salir');

    }

}

const huaweiNote = new celular("negro","300 gramos", "1080x720 px","15MPx","2GB",2500 );
const samsungGalaxy = new celular("plateado","250 gramos","2340x1080","20MPx","3GB",8000);
const iphoneX = new celular("azul","100 gramos","2436x1125 px", "50MPx","4GB",20000);



do{
    var opcion = prompt('cual celular quieres escoger Huawei(h), Samsung(s) o iphoneX(i) o quieres salir(sa) ?');
    
    switch(opcion){
        case "h":
            huaweiNote.metodos();
            break;
        case "s":
            samsungGalaxy.metodos();
            break;
        case "i":
            iphoneX.metodos();
            break;
        case 'sa':
            break;
        default:
            alert('escriba alguna de las letras en parentesis mostrada, en minisculas.');
    }
    
    
    }while(opcion != 'sa');