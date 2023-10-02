let productos = [
    { id: 1, nombre: "Mouspad HYPERX (Talle S)", precio: 10000, imagen:"https://http2.mlstatic.com/D_NQ_NP_791920-MLA43091250694_082020-O.webp" },
    { id: 2, nombre: "Mouspad HYPERX (Talle M)", precio: 20000, imagen:"https://row.hyperx.com/cdn/shop/products/hyperx_fury_s_mouse_pad_speed_addition_cloth_m_1_main_900x.jpg?v=1662421090"},
    { id: 3, nombre: "Mouspad HYPERX (Talle L)", precio: 35000, imagen:"https://row.hyperx.com/cdn/shop/products/hyperx_fury_s_gaming_mouse_pad_speed_edition_cloth_l_1_main_900x.jpg?v=1662421090"},
    { id: 4, nombre: "Mouspad Personalizado (Talles XL)", precio: 40000, imagen:"https://imagenes.compragamer.com/productos/compragamer_Imganen_general_29717_Mouse_Pad_Logitech_300x700mm_Deskpad_Lavanda_a5d7039f-grn.jpg" },
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);

const renderProductos = () => {
    const productos = cargarProductosLS();
    let contenidoHTML = "";

    productos.forEach(producto => {
        contenidoHTML += `<div class="col-md-7 mb-5 text-center"
        <div class="card">
        <a href="producto.html" onclick="guardarProductoLS(${producto.id})"><img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"></a>
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">$${producto.precio}</p>
          <a href="#" class="btn btn-danger" onclick="agregarAlCarrito(${producto.id})">Agregar (+)</a>
        </div>
        </div>
        </div>`;
    });

    document.getElementById("contenido").innerHTML = contenidoHTML;
}
// ...funciones para el carrito
const guardarCarritoLS = (carrito) => {
   localStorage.setItem("carrito", JSON.stringify(carrito));
}

const cargarCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const agregarAlCarrito = (id) => {
    const carrito = cargarCarritoLS();
    const producto = buscarProducto(id);
    carrito.push(producto);
    guardarCarritoLS(carrito);
    console.log(id)}
    
   
const buscarProducto = (id) => {
    const productos = cargarProductosLS();
    let producto = productos.find(item => item.id === id);

    return producto;
}

const estaEnElCarrito = (id) => {
    const productos = cargarProductosLS();

    return productos.some (item => item.id ===id)
}


const renderCarrito = () => {
    const productos = cargarCarritoLS();
    console.log(productos)
    let contenidoHTML = `<table class="table"`;

        productos.forEach(producto => {
            contenidoHTML += `<tr>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" width="64"></td>
            <td >${producto.nombre}</td>
            <td >$${producto.precio}</td>
            <td><img src="img/trash.jpeg" alt="Eliminar" width="24" onclick="eliminarDelCarrito(${producto.id})"></td>
            </tr>`;
        });

    contenidoHTML +=`</table>`;
    document.getElementById("contenido").innerHTML = contenidoHTML;

    }
    const eliminarDelCarrito = (id) => {
        const carrito = cargarCarritoLS();
        
        // Encuentra el índice del producto con el ID dado en el carrito
        const index = carrito.findIndex(producto => producto.id === id);
    
        if (index !== -1) {
            // Si se encontró el producto, elimínalo del carrito usando splice
            carrito.splice(index, 1);
            // Guarda el carrito actualizado en el almacenamiento local
            guardarCarritoLS(carrito);
            // Vuelve a renderizar el carrito para mostrar los cambios
            renderCarrito();
        }
    }
    
    