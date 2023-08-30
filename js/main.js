let importeTotal = 0;

function sumarImporteTotal(preciomousepad) {
  importeTotal = importeTotal + preciomousepad;
  console.log("total a abonar $" + importeTotal);
}

let idmouspad = parseInt(
  prompt(
    "ROUSPAD - TU MOUSEPAD PERSONALIZADO\n1- MOUSPAD HYPERX(TALLE S) $10.000\n2- MOUSPAD HYPERX(TALLE m) $20.000\n3- MOUSPAD HYPERX(TALLE L) $35.000\n4- MOUSPAD PERSONALIZADO(TALLES XL) $40.000\n0- Para salir del sistema"
  )
);
while (idmouspad != 0) {
  switch (idmouspad) {
    case 1:
      alert(
        "Gracias! Tu Mouspad HYPERX (talle s) $10.000 se agrego al carrito 🛒"
      );
      sumarImporteTotal(10000);
      break;
    case 2:
      alert(
        "Gracias! Tu Mouspad HYPERX (talle M) $20.000 se agrego al carrito 🛒"
      );
      sumarImporteTotal(20000);
      break;
    case 3:
      alert(
        "Gracias! Tu Mouspad HYPERX (talle L) $35.000 se agrego al carrito 🛒"
      );
      sumarImporteTotal(35000);
      break;
    case 4:
      alert(
        "Gracias! Tu Mouspad personalizado(talle XL) $40.000 se agrego al carrito 🛒"
      );
      sumarImporteTotal(40000);
      break;
    default:
      alert("Código erroneo 🟥");
      break;
  }
  idmouspad = parseInt(
    prompt(
      "ROUSPAD - TU MOUSEPAD PERSONALIZADO\n1- MOUSPAD HYPERX(TALLE S) $10.000\n2- MOUSPAD HYPERX(TALLE m) $20.000\n3- MOUSPAD HYPERX(TALLE L) $35.000\n4- MOUSPAD PERSONALIZADO(TALLES XL) $40.000\n0- Para salir del sistema"
    )
  );
}

alert("El impoprte total de tu compra es de $" + importeTotal);
