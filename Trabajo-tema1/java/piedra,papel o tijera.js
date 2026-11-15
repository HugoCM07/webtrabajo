const opciones = {
  piedra: { nombre: "Piedra", icono: "✊" },
  papel: { nombre: "Papel", icono: "✋" },
  tijera: { nombre: "Tijera", icono: "✌️" },
};

const marcador = {
  partidas: 0,
  ganadas: 0,
  empatadas: 0,
  perdidas: 0,
};

const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

function jugar(jugador) {
  if (!Object.prototype.hasOwnProperty.call(opciones, jugador)) {
    return;
  }

  const jugadas = Object.keys(opciones);
  const maquina = jugadas[Math.floor(Math.random() * jugadas.length)];
  let estado;
  let texto;

  marcador.partidas++;

  if (jugador === maquina) {
    estado = "draw";
    texto = "¡Empate!";
    marcador.empatadas++;
  } else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "papel" && maquina === "piedra") ||
    (jugador === "tijera" && maquina === "papel")
  ) {
    estado = "win";
    texto = "¡Has ganado!";
    marcador.ganadas++;
  } else {
    estado = "loss";
    texto = "Esta vez gana la máquina";
    marcador.perdidas++;
  }

  resultado.dataset.result = estado;
  document.getElementById("jugada-jugador").textContent = opciones[jugador].nombre;
  document.getElementById("jugada-maquina").textContent = opciones[maquina].nombre;
  document.getElementById("icono-jugador").textContent = opciones[jugador].icono;
  document.getElementById("icono-maquina").textContent = opciones[maquina].icono;
  mensaje.textContent = texto;
  actualizarMarcador();
}

function actualizarMarcador() {
  for (const [clave, valor] of Object.entries(marcador)) {
    document.getElementById(clave).textContent = valor;
  }
}

function reiniciar() {
  for (const clave of Object.keys(marcador)) {
    marcador[clave] = 0;
  }

  resultado.dataset.result = "none";
  document.getElementById("jugada-jugador").textContent = "Por jugar";
  document.getElementById("jugada-maquina").textContent = "Por jugar";
  document.getElementById("icono-jugador").textContent = "?";
  document.getElementById("icono-maquina").textContent = "?";
  mensaje.textContent = "Elige una opción para empezar";
  actualizarMarcador();
}

document.querySelectorAll("[data-choice]").forEach((boton) => {
  boton.addEventListener("click", () => jugar(boton.dataset.choice));
});

document.getElementById("reiniciar").addEventListener("click", reiniciar);