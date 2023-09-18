let importeTotal = 0;

function sumarImporteTotal(preciomousepad) {
  importeTotal = importeTotal + preciomousepad;
  console.log("Total a abonar: $" + importeTotal);
}

const productos = [
  { id: 1, nombre: "Mouspad HYPERX (Talle S)", precio: 10000 },
  { id: 2, nombre: "Mouspad HYPERX (Talle M)", precio: 20000 },
  { id: 3, nombre: "Mouspad HYPERX (Talle L)", precio: 35000 },
  { id: 4, nombre: "Mouspad Personalizado (Talles XL)", precio: 40000 },
];

function obtenerProductoPorId(id) {
  return productos.find((producto) => producto.id === id);
}

function realizarCompra() {
  const productosComprados = [];

  let idMousepad = parseInt(
    prompt(
      "ROUSPAD - TU MOUSEPAD PERSONALIZADO\n1- MOUSPAD HYPERX(TALLE S) $10.000\n2- MOUSPAD HYPERX(TALLE M) $20.000\n3- MOUSPAD HYPERX(TALLE L) $35.000\n4- MOUSPAD PERSONALIZADO(TALLES XL) $40.000\n0- Para salir del sistema"
    )
  );

  while (idMousepad !== 0) {
    const producto = obtenerProductoPorId(idMousepad);

    if (producto) {
      alert(`Gracias! Tu ${producto.nombre} se agregó al carrito 🛒`);
      productosComprados.push(producto);
      sumarImporteTotal(producto.precio);
    } else {
      alert("Código erroneo 🟥");
    }

    idMousepad = parseInt(
      prompt(
        "ROUSPAD - TU MOUSEPAD PERSONALIZADO\n1- MOUSPAD HYPERX(TALLE S) $10.000\n2- MOUSPAD HYPERX(TALLE M) $20.000\n3- MOUSPAD HYPERX(TALLE L) $35.000\n4- MOUSPAD PERSONALIZADO(TALLES XL) $40.000\n0- Para salir del sistema"
      )
    );
  }

  if (productosComprados.length >= 3) {
    // Si se compraron al menos 3 productos, aplicar el descuento del 20%
    importeTotal = importeTotal * 0.8;
    alert("¡Felicidades! Has obtenido un 20% de descuento en tu compra.");
  }

  const seguirComprando = confirm(
    `El importe total de tu compra es de $${importeTotal}. ¿Deseas seguir comprando?`
  );

  if (seguirComprando) {
    realizarCompra(); // Llamamos realizarCompra para continuar comprando.
  } else {
    alert(
      `Gracias por tu compra. El total con descuento es de $${importeTotal}. Hasta luego.`
    );
  }
}

realizarCompra(); // Iniciamos el proceso de compra.
