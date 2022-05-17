
//Aplicacion que envia correos

interface Emailer{
    enviar(): void;
}

//Implementación del metodo send
class EmailProvider implements Emailer{
    public enviar(): void {
        console.log("Enviar un mail por EmailProvider");  
    }
}

//El sistema envia el correo
function enviarMail(emailer: Emailer){
    emailer.enviar();
}

//Se genera la instancia
const emailer = new EmailProvider();

//Se manda el correo
enviarMail(emailer);

//Para implementar un nuevo proveedor de correo utilizaremos el patron adapter para que esto se mas facil

//NUevo proveedor de mails que dispone de una interfaz diferente llamda mandarEmail
class EmailProvider2{
    public mandarEmail(): void{
        console.log("Enviar mail por nuevo proveedor");
    }
}

//Se crea un adaptador para que el nuevo proveedor pueda adaptarse al programa
class EmailProvider2Adapter implements Emailer{
    constructor(
        private emailProvider: EmailProvider2
    ){}
    public enviar(): void{
        this.emailProvider.mandarEmail();
    }
}

const emailer2 = new EmailProvider2Adapter(new EmailProvider2());