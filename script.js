const productos = [
  {
    nombre: "Sweater Manga Larga Brillo - Le utthe",
    precio: 10000,
    talle: "M",
    categoria: "Sweaters",
    img: "img/BuzoBrillo.png",
    vendido: false
  },
  {
    nombre: "Sweater Manga Larga Blanco con Perlas - Viaressa",
    precio: 10000,
    talle: "L",
    categoria: "Sweaters",
    img: "img/SweterBlanco.png",
    vendido: false
  },
  
   {
    nombre: "Top Verde - ZARA",
    precio: 8000,
    talle: "L",
    categoria: "Top",
    img: "img/RemeraZara.png",
    vendido: false
  },
  {
    nombre: "Conjunto Gris - Shein",
    precio: 5000,
    talle: "M",
    categoria: "Remeras",
    img: "img/Conjunto.png",
    vendido: false
  },
    {
    nombre: "Short Deportivo - Urb Sport",
    precio: 10000,
    talle: "L",
    categoria: "Short",
    img: "img/ShortDeportivo.png",
    vendido: false
  },
      {
    nombre: "Vestido Largo rojo",
    precio: 10000,
    talle: "L",
    categoria: "Vestidos",
    img: "img/VestidoLargoRojo.png",
    vendido: false
  },
     {
    nombre: "Remera Negra - AbsolutelyNot - Shein",
    precio: 5000,
    talle: "L",
    categoria: "Remeras",
    img: "img/RemeraAbsolutelynot.png",
    vendido: false
  },
       {
    nombre: "Top Beige",
    precio: 5000,
    talle: "L",
    categoria: "Tops",
    img: "img/topBeige.png",
    vendido: false
  },
    {
    nombre: "Vestido Negro al Cuerpo",
    precio: 8000,
    talle: "M/L",
    categoria: "Vestidos",
    img: "img/VestidoNegroAlCuerpo.png",
    vendido: false
  },
  {
    nombre: "Jean Beige - Maitry",
    precio: 10000,
    talle: "42",
    categoria: "Pantalones",
    img: "img/JeanBeige.png",
    vendido: false
  },
  {
    nombre: "Jean Blanco - Maitry",
    precio: 12000,
    talle: "42",
    categoria: "Pantalones",
    img: "img/JeanBlanco.png",
    vendido: false
  },
   {
    nombre: "Short/Pollera Beige - Kill",
    precio: 12000,
    talle: "42",
    categoria: "Short",
    img: "img/ShortKilii.png",
    img2: "img/ShorKill.png",
    vendido: false
  },
  {
    nombre: "Malla Amarilla - Le Blue - Nueva",
    precio: 15000,
    talle: "L",
    categoria: "Malla",
    img: "img/Malla.png",
    vendido: false
  },
  {
    nombre: "Malla Amarilla - Le Blue - Nueva",
    precio: 15000,
    talle: "L",
    categoria: "Malla",
    img: "img/Malla.png",
    vendido: false
  },
  {
    nombre: "Borcegos Negros",
    precio: 10000,
    talle: "40",
    categoria: "Zapatillas/Borcegos/Tacos",
    img: "img/BorcegosNegros.png",
    img2: "img/BorcegosNegros2.png",
    vendido: false
  }
  ,
  {
    nombre: "Borcegos Verde",
    precio: 10000,
    talle: "40",
    categoria: "Zapatillas/Borcegos/Tacos",
    img: "img/Botas.png",
    vendido: false
  }
   ,
  {
    nombre: "Buzo Corto - Sybilla",
    precio: 5000,
    talle: "S",
    categoria: "Sweaters",
    img: "img/BuzoCorto.png",
    img: "img/BuzoCorto1.png",
    vendido: false
  }
  ,
  {
    nombre: "Calzas deportivas Adidas",
    precio: 8000,
    talle: "M",
    categoria: "Deportivo",
    img: "img/CalzasAdidas.png",
    vendido: false
  }
  ,
  {
    nombre: "Camisa Blanca Manga Larga - Sweet",
    precio: 10000,
    talle: "L",
    categoria: "Camisa",
    img: "img/CamisaBlanca.png",
    vendido: false
  },
  {
    nombre: "Campera Fina Jean",
    precio: 10000,
    talle: "L",
    categoria: "Campera",
    img: "img/CamperaJean.png",
    img2: "img/ CamperaJean1.png",
    vendido: false
   } ,
  {
    nombre: "Campera Negra Reversible",
    precio: 10000,
    talle: "L",
    categoria: "Campera",
    img: "img/CamperaNegra.png",
    img2: "img/CamperaNegra1.png",
    vendido: false
  }
  ,
  {
    nombre: "Cartera Blanca - PRUNE",
    precio: 15000,
    talle: "L",
    categoria: "Cartera",
    img: "img/CarteraBlanca.png",
    vendido: false
  }
   ,
  {
    nombre: "Chaleco Rojo",
    precio: 15000,
    talle: "L",
    categoria: "Cartera",
    img: "img/ChalecoRoko.png",
    vendido: false
  }
  ,
  {
    nombre: "Chupin Negro",
    precio: 15000,
    talle: "L",
    categoria: "Cartera",
    img: "img/ChupinNegro.png",
    vendido: false
  }
  ,
  {
    nombre: "Chupin Negro",
    precio: 15000,
    talle: "L",
    categoria: "Cartera",
    img: "img/ChupinNegro.png",
    vendido: false
  }
];

const contenedor = document.getElementById("productos");

function mostrarProductos(lista) {
  contenedor.innerHTML = "";

  lista.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${p.img}" 
           onmouseover="this.src='${p.img2}'" 
           onmouseout="this.src='${p.img}'">

      <h3>${p.nombre}</h3>
      <p>Talle: ${p.talle}</p>
      <p>$${p.precio}</p>

      ${
        p.vendido
          ? "<span>VENDIDO</span>"
          : `<a href="https://wa.me/549XXXXXXXXX?text=Quiero ${p.nombre}">Comprar</a>`
      }
    `;

    contenedor.appendChild(div);
  });
}

function filtrar(categoria) {
  if (categoria === "todos") {
    mostrarProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria === categoria);
    mostrarProductos(filtrados);
  }
}

// mostrar todo al inicio
mostrarProductos(productos);
