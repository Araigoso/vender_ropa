const productos = [
  {
    nombre: "Buzo Manga Larga Brillo - Le utthe",
    precio: 10000,
    talle: "M",
    img: "img/BuzoBrillo.png",
    vendido: false
  },
  {
    nombre: "Conjunto Gris - Shein",
    precio: 5000,
    talle: "M",
    img: "img/Conjunto.png",
    vendido: false
  },
  {
    nombre: "Jean Beige",
    precio: 10000,
    talle: "42",
    img: "img/JeanBeige.png",
    vendido: false
  },
  {
    nombre: "Jean Blanco",
    precio: 10000,
    talle: "42",
    img: "img/JeanBlanco.png",
    vendido: false
  },
  {
    nombre: "Malla Amarilla - Nueva",
    precio: 15000,
    talle: "L",
    img: "img/Malla.png",
    vendido: false
  }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${p.img}">
    <h3>${p.nombre}</h3>
    <p>Talle: ${p.talle}</p>
    <p>$${p.precio}</p>
    ${
      p.vendido
        ? "<span>VENDIDO</span>"
        : `<a href="https://wa.me/5492944516029?text=Quiero ${p.nombre}">Comprar</a>`
    }
  `;

  contenedor.appendChild(div);
});
