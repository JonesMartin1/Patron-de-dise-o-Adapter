//Para implementar un nuevo proveedor de correo utilizaremos el patron adapter para que esto se mas facil

//NUevo proveedor de mails que dispone de una interfaz diferente llamda mandarEmail (Adaptee)
export class EmailProvider2{
    public mandarEmail(): void{
        console.log("Enviar mail por nuevo proveedor");
    }
}
