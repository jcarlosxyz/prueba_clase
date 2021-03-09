let personas = {

    nombre: 'juan',
    apellido: 'molina',
    edad:   25,
    correo: 'coreo@gmail.com',
    completo: function(){

        return this.nombre + '  ' + this.apellido;
    }
}

console.log(personas.apellido);
console.log(personas.edad);

console.log(personas.completo());

