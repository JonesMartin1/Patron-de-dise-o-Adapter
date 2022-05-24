
//Aplicacion que envia correos
//Implementación del metodo send (Target)

interface Emailer{
    enviar(): String;
}


export class EmailProvider implements Emailer{
    public enviar(): String {
        return("Enviar un mail por EmailProvider");  
    }
}