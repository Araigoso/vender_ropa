const productos = [
  {
    nombre: "Remera blanca",
    precio: 5000,
    talle: "M",
    img: "img/remera.jpg",
    vendido: false
  },
  {
    nombre: "Remera blanca",
    precio: 5000,
    talle: "M",
    img: "img/remera.jpg",
    vendido: false
  },
  {
    nombre: "Remera blanca",
    precio: 5000,
    talle: "M",
    img: "img/remera.jpg",
    vendido: false
  },
  {
    nombre: "Remera blanca",
    precio: 5000,
    talle: "M",
    img: "img/remera.jpg",
    vendido: false
  },
  {
    nombre: "Remera blanca",
    precio: 5000,
    talle: "M",
    img: "img/remera.jpg",
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
