
document.getElementById("bottonMenu").addEventListener("click", () => {
    document.getElementById("MenuDesplegable").classList.toggle("hidden");
});



function limpiarCampos(formularioId) {
    document.querySelectorAll(`#${formularioId} input`).forEach(input => input.value = '');
}


document.getElementById("calcular").addEventListener("click", () => {
    const Meta = parseFloat(document.getElementById("Meta").value);
    const Tiempo = parseFloat(document.getElementById("Tiempo").value);
    const ahorroInicial = parseFloat(document.getElementById("ahorroInicial").value);

    const mensaje = isNaN(Meta) || isNaN(Tiempo) || isNaN(ahorroInicial) || Meta < 0 || Tiempo <= 0 || ahorroInicial < 0 
        ? "Ingrese datos válidos"
        : `Debes ahorrar $${((Meta - ahorroInicial) / Tiempo).toFixed(2)} cada mes`;
    alert(mensaje);
    

    limpiarCampos('form1');
});


document.getElementById("Cambio").addEventListener("click", () => {
    const MontoOriginal = parseFloat(document.getElementById("MontoOriginal").value);
    const TasaDeCambio = parseFloat(document.getElementById("TasaDeCambio").value);

    document.getElementById("resultado").textContent = isNaN(MontoOriginal) || isNaN(TasaDeCambio) || MontoOriginal < 0 || TasaDeCambio < 0 
        ? "Ingrese datos válidos" 
        : `El monto convertido es ${(MontoOriginal * TasaDeCambio).toFixed(2)}`;
    
   
    limpiarCampos('form2'); 
});


document.getElementById("CalcularPresupuesto").addEventListener("click", () => {
    const Ingresos = parseFloat(document.getElementById("IngresosMensuales").value);
    const Alimento = parseFloat(document.getElementById("GastosAlimento").value);
    const Transporte = parseFloat(document.getElementById("GastosTrasporte").value);

    document.getElementById("resultado1").textContent = isNaN(Ingresos) || isNaN(Alimento) || isNaN(Transporte) || Ingresos < 0 || Alimento < 0 || Transporte < 0 
        ? "Ingrese datos válidos" 
        : `Tu presupuesto restante es de ${(Ingresos - (Alimento + Transporte)).toFixed(2)}`;


    limpiarCampos('form3'); 
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarAlCarrito(producto) {
    const existe = carrito.some(item => item.id === producto.id);
    
    existe 
        ? carrito = carrito.map(item => item.id === producto.id ? {...item, cantidad: item.cantidad + 1} : item)
        : carrito.push({...producto, cantidad: 1});
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function mostrarCarrito() {
    const carritoItems = document.getElementById("carritoItems");
    carritoItems.innerHTML = carrito.length ? "" : "Tu carrito está vacío.";
    
    carrito.forEach(producto => {
        carritoItems.innerHTML += `
            <div class="producto">
                <p>Producto: ${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <button onclick="eliminarDelCarrito(${producto.id})" class="bg-red-500 text-white py-1 px-2 rounded">Eliminar</button>
            </div>
        `;
    });
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(producto => producto.id !== id);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


window.addEventListener("scroll", () => {
    document.getElementById("navbar1").style.backgroundColor = document.getElementById("seccionCard").getBoundingClientRect().top < 10 ? '#363739' : '#cbcaca';
});


mostrarCarrito();
