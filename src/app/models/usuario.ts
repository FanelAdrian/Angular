// export class Usuario {
//     constructor(public Id_usuario: number,
//                 public nombre: string,
//                 public apellidos: string,
//                 public correo: string,
//                 public url: string,
//                 public password: string){}

//                 public nombreCompleto():string{
//                     return this.nombre + " " + this.apellidos;
//                 }
//     }



// ///
////// LO DE ARRIBA ES LO MISMO QUE:



export class Usuario {
    public Id_usuario: number
    public nombre: string
    public apellidos: string
    public correo: string
    public url: string
    public password: string

    constructor(Id_usuario: number, nombre: string, apellidos: string, correo: string, url: string, password: string) {
        this.Id_usuario = Id_usuario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.url = url,
            this.password = password;
    }
    public nombreCompleto(): string {
        return this.nombre + " " + this.apellidos;
    }
}