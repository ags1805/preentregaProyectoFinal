const productos = [
    {
        nombre: "Pelota Adidas Champions League Azul", 
        alt: "Pelota Adidas Champions League Azul",
        imagen: "img/Productos/pelotaAdidasChampionsLeague1.jpg",
        precio: "100,000"
    },
    {
        nombre: "Pelota Adidas Mundial Qatar 2022 Final", 
        alt: "Pelota Adidas Mundial Qatar 2022 Final",
        imagen: "img/Productos/pelotaAdidasMundialQatar1.jpg",
        precio: "110,000"
    },
    {
        nombre: "Pelota Adidas Tango", 
        alt: "Pelota Adidas Tango",
        imagen: "img/Productos/pelotaAdidasTango.jpg",
        precio: "200,000"
    },
    {
        nombre: "Pelota Basquet Spalding NBA", 
        alt: "Pelota Basquet Spalding NBA",
        imagen: "img/Productos/pelotaDeBasquetSpaldingNBA2.jpg",
        precio: "90,000"
    },
    {
        nombre: "Pelota Basquet Spalding NBA", 
        alt: "Pelota Basquet Spalding NBA",
        imagen: "img/Productos/pelotaSpaldingNBA1.jpg",
        precio: "95,000"
    },
    {
        nombre: "Pelota Basquet Jordan NBA", 
        alt: "Pelota Basquet Jordan NBA",
        imagen: "img/Productos/pelotaDeBasquetSpaldingNBA3.jpg",
        precio: "120,000"
    },
    {
        nombre: "Pelota Rugby UAR Pumas", 
        alt: "Pelota Rugby UAR Pumas",
        imagen: "img/Productos/pelotaRugbyUAR.jpg",
        precio: "180,000"
    },
    {
        nombre: "Pelota Rugby All Blacks", 
        alt: "Pelota Rugby All Blacks",
        imagen: "img/Productos/pelotaRugbyAllBlacks.jpg",
        precio: "250,000"
    },
    {
        nombre: "Tubo de pelotas de Tenis Wilson", 
        alt: "Tubo de pelotas de Tenis Wilson",
        imagen: "img/Productos/pelotaTenisWilson.jpg",
        precio: "100,000"
    }
];

let productosHTML = "";

for (let i = 0; i < productos.length; i++){
productosHTML += `
                <div class="producto">
                    <img src= ${productos[i].imagen} alt= ${productos[i].alt}
                        width="150" height="150">
                    <h5>${productos[i].nombre}</h5>
                    <p>$ ${productos[i].precio}</p>
                    <input class = "agregarCarrito" type="button" value="Agregar al Carrito">
                </div>
`;
};

const contenedorProductos = document.getElementById("contenedorProductos");

contenedorProductos.innerHTML = productosHTML;


/* Carrito */
const botonesAgregar = document.querySelectorAll(".agregarCarrito");

const listaCarrito = document.querySelector("#carritoDeCompras ul");

const totalCarrito = document.querySelector("#carritoDeCompras p");

let totalAPagar = 0;

/* Agregamos un listener a los botones de los productos */
for (let i = 0; i < botonesAgregar.length; i++) {

    function agregarElementoCarrito() {

        const elementoLi = document.createElement("li");
        
        elementoLi.innerText = `${productos[i].nombre} $${productos[i].precio}`;

        listaCarrito.appendChild(elementoLi);

        totalAPagar = totalAPagar + parseInt(productos[i].precio);

        totalCarrito.innerText = "Total a pagar: $" + totalAPagar;
       
    }

    botonesAgregar[i].addEventListener("click", agregarElementoCarrito);
};

// Agregar listener al boton borrar

const botonBorrar = document.getElementById("botonBorrar");

function borrarCarrito () {
    listaCarrito.innerHTML = "";
    totalAPagar = 0;
    totalCarrito.innerText = "Total a pagar: $" + totalAPagar; 
}

botonBorrar.addEventListener("click", borrarCarrito);