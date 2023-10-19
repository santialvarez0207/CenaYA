export class User {
    constructor(
      public nombre: string = "",
      public apellido: string = "",
      public email: string = "",
      public password: string = "",
      public telefono: string = "",
      public direccion: string = "",
      public age: number = 0,
      public _id: string = ""
    ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.telefono = telefono;
      this.direccion = direccion;
      this.age = age;
      this._id = _id;
    }
  
  }