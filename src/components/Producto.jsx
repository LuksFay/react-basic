import React from "react";

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const{nombre, precio ,id} = producto

    //agreagar producto al carrito
    const seleccionarProducto = id=>{
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([...carrito, producto])
        // console.log('Comprando ', id, nombre)
    }
    //Elimina un producto del carrito 
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        //Colocar los prodcutose en el  state
        agregarProducto(productos)
    }
    return(
        <div>
            <h2>{producto.nombre}</h2>
            <p>precio $ {precio}</p>      
            {productos ? (<button type="button" onClick={()=> seleccionarProducto(id, nombre)}> Comprar </button>) : (<button type="button" onClick={()=>eliminarProducto(id)}> Eliminar </button>)}
        </div>
    );
    
}

export default Producto