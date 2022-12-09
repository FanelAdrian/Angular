
export class Libro {
    public id_libro: number
    public id_usuario: number
    public titulo: string
    public tipo: string
    public autor: string
    public precio: number
    public foto: string

    constructor(titulo: string, tipoLibro: string, autor: string, precio: number, photo: string, Id_libro: number=0, Id_usuario: number=0) {
        this.id_libro = Id_libro;
        this.id_usuario = Id_usuario;
        this.titulo = titulo;
        this.tipo = tipoLibro;
        this.autor = autor,
        this.precio = precio; 
        this.foto = photo;
    }
}