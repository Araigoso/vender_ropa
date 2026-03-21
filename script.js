const productos = [
  {
    nombre: "Sweater Manga Larga Brillo - Le utthe",
    precio: 10000,
    talle: "M",
    img: "img/BuzoBrillo.png",
    vendido: false
  },
  {
    nombre: "Sweater Manga Larga Blanco con Perlas - Viaressa",
    precio: 10000,
    talle: "L",
    img: "img/SweterBlanco.png",
    vendido: false
  },
  
   {
    nombre: "Top Verde - ZARA",
    precio: 8000,
    talle: "L",
    img: "img/RemeraZara.png",
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
    nombre: "Short Deportivo - Urb Sport",
    precio: 10000,
    talle: "L",
    img: "img/ShortDeportivo.png",
    vendido: false
  },
      {
    nombre: "Vestido Largo rojo",
    precio: 10000,
    talle: "L",
    img: "img/VestidoLargoRojo.png",
    vendido: false
  },
     {
    nombre: "Remera Negra - AbsolutelyNot - Shein",
    precio: 5000,
    talle: "L",
    img: "img/RemeraAbsolutelynot.png",
    vendido: false
  },
       {
    nombre: "Top Beige",
    precio: 5000,
    talle: "L",
    img: "img/topBeige.png",
    vendido: false
  },
    {
    nombre: "Vestido Negro al Cuerpo",
    precio: 8000,
    talle: "M/L",
    img: "img/VestidoNegroAlCuerpo.png",
    vendido: false
  },
  {
    nombre: "Jean Beige - Maitry",
    precio: 10000,
    talle: "42",
    img: "img/JeanBeige.png",
    vendido: false
  },
  {
    nombre: "Jean Blanco - Maitry",
    precio: 12000,
    talle: "42",
    img: "img/JeanBlanco.png",
    vendido: false
  },
   {
    nombre: "Short/Pollera Beige - Kill",
    precio: 12000,
    talle: "42",
    img: "img/ShortKilii.png",
    img2: "img/ShorKill.png",
    vendido: false
  },
  {
    nombre: "Malla Amarilla - Le Blue - Nueva",
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
