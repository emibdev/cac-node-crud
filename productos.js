const productos = [
    {id: 1, name: 'Producto Nro 1'},
    {id: 2, name: 'Producto Nro 2'},
    {id: 3, name: 'Producto Nro 3'},
    {id: 4, name: 'Producto Nro 4'},
]

const all = () => {
    return productos
}

const find = (id) => {
    return productos.find(function(producto) {
        if(producto.id == id) {
            return true
        }
    })
}

module.exports = {
    all: all, 
    find: find
}