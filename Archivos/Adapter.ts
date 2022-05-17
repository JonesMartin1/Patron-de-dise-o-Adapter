import {EmailProvider2} from "../Archivos/Adaptee"

interface Emailer{
    enviar(): String;
}


//Se crea un adaptador para que el nuevo proveedor pueda adaptarse al programa (Adapter)
export class EmailProvider2Adapter implements Emailer{
    constructor(
        private emailProvider: EmailProvider2
    ){}
    public enviar(): String{
        this.emailProvider.mandarEmail();
        return("Enviar un mail por EmailProvider2");
    }
}