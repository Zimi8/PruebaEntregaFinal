const carrito [];

function agregarAlCarrito(producto){
    //validar Stock
    //validar colores
    carrito.push(producto);
    console.log(carrito);
}
//citamos la funcion para mostrar en consola ()
//cuando sepa DOM voy a agregar esto al html. Ahora por consola.
agregarAlCarrito({id:1, name: "Gorra Naik", price:8990})  //deberia agregarlo el usuario al agregar un producto. 
agregarAlCarrito({id:1, name: "Gorra Naik", price:8990})

//simulamos que tenenos un carrito 
function borrarProductosDelCarrito(idDelProducto){
const index = carrito.findIndex((producto) => producto.id === idDelProducto);
console.log(index);
carrito.splice(inde, 1);
console.log(carrito);

}

/* function borrarProductosDelCarrito(idDelProducto){
     const index = carrito.findIndex ((producto) => producto.id === idDelProducto);
     if(index !== -1);
} 
console.log(carrito);
*/

// => funcion flecha repasar*
// este devolveria 0

borrarProductosDelCarrito(9123); // deberia llamarlo el usuario al hacer click en Btn borrar.


/* const index = carrito.indexOf(function otra manera con Function, la de arriba lleva FUNCION FLECHA (producto.id === idDelProducto);
   */