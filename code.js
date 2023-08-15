
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');
let materiasGeneradas = false;

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


function obtenerDatosDelUsuario() {
    datosPersona.nombre = prompt("Ingrese su nombre:");
    datosPersona.edad =new Date().getFullYear() - parseInt(prompt("Ingrese su año de nacimiento:"));
    datosPersona.ciudad = prompt("Ingrese su ciudad:");
    datosPersona.interesPorJs = confirm("¿Le interesa JavaScript?");
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();
    document.getElementById("nombre").textContent = datosPersona.nombre;
    document.getElementById("edad").textContent = datosPersona.edad;
    document.getElementById("ciudad").textContent = datosPersona.ciudad;
    document.getElementById("javascript").textContent = datosPersona.interesPorJs ? 'Sí' : 'No';
}


function recorrerListadoYRenderizarTarjetas() {
    if(!materiasGeneradas){
      const materias = document.getElementById("fila")

      listado.forEach(materia => {
          const card = document.createElement("article")
          card.innerHTML = `
              <img src="${materia.imgUrl}" alt="">
              <p>${materia.lenguajes}</p>
              <p>${materia.bimestre}</p>
          `;
          card.classList.add("caja"); 

          materias.appendChild(card)
      });
      materiasGeneradas = true  
    }
}

function alternarColorTema() {
  const pagina = document.getElementById("sitio")
  pagina.classList.toggle("dark");
}

document.addEventListener("keydown", function(event) {
  if (event.key === "f" || event.key === "F") {
    const sobreMiParrafo = document.getElementById("sobre-mi");
    sobreMiParrafo.classList.remove("oculto"); 
  }
});
