let carritoCompras =  {
    productos:  [],
    agregarProducto: function(producto) {
        this.productos.push(producto)
    },
    eliminarProducto: function(indice) {
        this.productos.splice(indice, 1)
    }
}

carritoCompras.agregarProducto("Manzanas")
carritoCompras.agregarProducto("Platanos")
console.log(carritoCompras.productos)

carritoCompras.eliminarProducto(1)
console.log(carritoCompras.productos)