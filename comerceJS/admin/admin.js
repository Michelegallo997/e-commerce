function guardarAlmacenamienLocal(llave, valor_a_guardar){
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}

function obtenerAlmacenamientoLocal(llave){
    const datos= JSON.parse(localStorage.getItem(llave))
    return datos
}

let productos = obtenerAlmacenamientoLocal("productos") || [];

//ANADIR PRODUCTO
const anadirProducto= document.getElementById("NombreProducto");
const ValorProducto= document.getElementById("ValorProducto");
const Existencia= document.getElementById("Existencia");
const UrlImagen= document.getElementById("UrlImagen");

document.getElementById("anadir").addEventListener("click", ()=>{
    const anadirProducto= anadirProducto.value;
    const ValorProducto= ValorProducto.value;
    const Existencia= Existencia.value;
    const UrlImagen= UrlImagen.value;

    let van=true;
    if(anadirProducto=="" || ValorProducto=="" || Existencia=="" || UrlImagen==""){
    let mensaje= document.getElementById("mensaje");
    mensaje.textContent="Ingrese todos los Campos";
    setTimeout(()=>{mensaje.classList.remove("mensaje")}, 2500)
    van=false
    }
    else{
        for(let i=0; i< productos.length; i++ ){
            if (productos[i].nombre == anadirProducto){
                mensaje.textContent="ese producto ya esta registrado";
                setTimeout(()=>{mensaje.classList.remove("mensaje")}, 2500)
                van= false
            }
        }

    }

    if(van=true){
    productos.push({
        nombre: anadirProducto,
        valor: ValorProducto,
        existencia: Existencia,
        urlImagen: UrlImagen
    })
    mensaje.textContent="realizado";
    setTimeout(()=>{window.location.reload()},1500)
    }

   
}) 

