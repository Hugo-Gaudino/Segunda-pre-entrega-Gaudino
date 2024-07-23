let celulares = [
  {
    modelo: "xiaomi mi A2",
    precio: 350,
    marca: "xiaomi",
    bateria: "3000mah",
    procesador: "Snapdragon 660",
    pantalla: "IPS Full HD+",
    almacenamiento: "32/64 GB",
  },

  {
    modelo: "xiaomi redmi note 13",
    precio: 500,
    marca: "xiaomi",
    bateria: "5000mah",
    procesador: "Snapdragon 685",
    pantalla: "Amoled Full HD+",
    almacenamiento: "256 GB",
  },
  {
    modelo: "Samsung galaxy s24",
    precio: 1000,
    marca: "Samsung",
    bateria: "4000mah",
    procesador: "Exynos 2400",
    pantalla: "DYNAMIC AMOLED 2X",
    almacenamiento: "256 GB",
  },
  {
    modelo: "Samsung galaxy A15",
    precio: 300,
    marca: "Samsung",
    bateria: "5000mah",
    procesador: "Mediatek MT6789V/CD",
    pantalla: "Super Amoled Full HD+",
    almacenamiento: "128 GB",
  },
  {
    modelo: "Iphone 15",
    precio: 1200,
    marca: "Apple",
    bateria: "4900mah",
    procesador: "A16 Bionic",
    pantalla: "OLED",
    almacenamiento: "128 GB/257 GB/512 GB",
  },
  {
    modelo: "Iphone 14",
    precio: 1000,
    marca: "Apple",
    bateria: "3279mah",
    procesador: "A15 Bionic",
    pantalla: "OLED",
    almacenamiento: "128 GB/257 GB/512 GB",
  },
];

console.log(celulares);

alert("bienvenido");

let elegir = prompt("desea ver las marcas de nuestros celulares?");

if (elegir === "no") {
  alert("Vuelva pronto");
  elegir = prompt("desea ver las marcas de nuestros celulares?");
}

while (elegir !== "si" && elegir !== "no") {
  alert("debe seleccionar si o no");
  elegir = prompt("desea ver las marcas de nuestros celulares?");
}

let seccion = document.createElement("section");
document.body.append(seccion);

celulares.forEach((celular) => {
  const cuadro = document.createElement("section");
  cuadro.innerHTML = `<h3>Modelo: ${celular.modelo}</h3>
        <h3>Almacenamiento: ${celular.almacenamiento}</h3>
        <h3>Bateria: ${celular.bateria}</h3>
        <h3>Pantalla: ${celular.pantalla}</h3>
        <h3>Procesador: ${celular.procesador}</h3>
        <h3>Marca: ${celular.marca}</h3>
        <h3>Precio: ${celular.precio}</h3>`;

  seccion.appendChild(cuadro);

  cuadro.className = "tabla";
});

let elegirCelular = prompt("Que modelo de los que estan a la vista desea?");
let precio = 0;

if (elegirCelular === "xiaomi mi A2") {
  let precio = +350;
  alert("su precio es " + precio);
} else if (elegirCelular === "xiaomi redmi note 13") {
  let precio = +500;
  alert("su precio es " + precio);
} else if (elegirCelular === "Samsung galaxy s24") {
  let precio = +1000;
  alert("su precio es " + precio);
} else if (elegirCelular === "Samsung galaxy A15") {
  let precio = +300;
  alert("su precio es " + precio);
} else if (elegirCelular === "iphone 15") {
  let precio = +1200;
  alert("su precio es " + precio);
} else if (elegirCelular === "iphone 14") {
  let precio = +1000;
  alert("su precio es " + precio);
} else {
  alert("no tenemos ese modelo");
}
