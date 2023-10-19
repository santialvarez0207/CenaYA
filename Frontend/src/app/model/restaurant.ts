export class Restaurant {
  public nombre: string
    public direccion: string
    public tipoDeCocina: string
    public horaApertura: string
    public horaCierre: string
    public descripcion: string
    public imagen: string
    public menu: MenuItem[]
    public _id: string

    constructor(
      nombre: string = "",
      direccion: string = "",
     tipoDeCocina: string = "",
    horaApertura: string = "",
      horaCierre: string = "",
      descripcion: string = "",
      imagen: string = "",
    menu: MenuItem[] = [],
      _id: string = ""
    ) {

      this.nombre = nombre;
      this.direccion = direccion;
      this.tipoDeCocina = tipoDeCocina;
      this.horaApertura = horaApertura;
      this.horaCierre = horaCierre;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.menu = menu;
      this._id = _id;
    }
  }
  
  export class MenuItem {

    public nombre: string = ""
    public precio: number = 0
    public descripcion: string = ""

    constructor(
       nombre: string = "",
       precio: number = 0,
       descripcion: string = ""
    ) {
      this.nombre = nombre;
      this.precio = precio;
      this.descripcion = descripcion;
    }
  }