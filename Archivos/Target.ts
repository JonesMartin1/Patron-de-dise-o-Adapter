
//Aplicacion que envia correos
interface Emailer{
    enviar(): String;
}

//Implementación del metodo send (Target)
export class EmailProvider implements Emailer{
    public enviar(): String {
        return("Enviar un mail por EmailProvider");  
    }
}