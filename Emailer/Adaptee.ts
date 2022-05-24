//Para implementar un nuevo proveedor de correo utilizaremos el patron adapter para que esto se mas facil

//Nuevo proveedor de mails que dispone de una interfaz diferente mandarEmail (Adaptee)
export class EmailProvider2{
    public mandarEmail(): string{
       return("Enviar mail por nuevo proveedor");
    }
}
