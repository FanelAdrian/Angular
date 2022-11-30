
export class Libro {
    public Id_libro: number
    public Id_usuario: number
    public titulo: string
    public tipoLibro: string
    public autor: string
    public precio: number
    public photo: string

    constructor(titulo: string, tipoLibro: string, autor: string, precio: number, photo: string, Id_libro: number=0, Id_usuario: number=0) {
        this.Id_libro = Id_libro;
        this.Id_usuario = Id_usuario;
        this.titulo = titulo;
        this.tipoLibro = tipoLibro;
        this.autor = autor,
        this.precio = precio; 
        this.photo = photo;
    }
}