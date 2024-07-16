
const persona = {
    nombre: 'Jeff',
    apellido: 'Vivas',
    edad: 29,
    direccion:{
        ciudad:'Barcelona',
        zip:8028,
    }

};

const persona2={...persona};
persona2.nombre='Andres';

console.log(persona);
console.log(persona2);