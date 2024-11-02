let div_camiseta = document.getElementById("contenedor_camiseta");

// funcion para comprobar que input radio esta seleccionado y cambiar color de la camiseta

function cambiarColor() {
  let radio_blanco = document.getElementById("radio_blanco");
  let radio_negro = document.getElementById("radio_negro");
  if (radio_blanco.checked) {
    div_camiseta.style.backgroundImage = "url(img/white.png)";
  } else if (radio_negro.checked) {
    div_camiseta.style.backgroundImage = "url(img/black.png)";
  }
}

// añadir evento de click a cada uno de los input radio para cambiar el color de la camiseta

document.getElementById("radio_blanco").addEventListener("click", cambiarColor);
document.getElementById("radio_negro").addEventListener("click", cambiarColor);

// añadimos un evento de tecla al input del titulo para insertar el titulo en la camiseta

document.getElementById("input_titulo").addEventListener("keyup", function () {
  let titulo = document.getElementById("parrafo_titulo");
  titulo.textContent = input_titulo.value;
  // uso de regex para comprobar que no se introducen mas de 10 caracteres
  let expresion = /^[a-zA-Z0-9]{0,10}$/;
  if (!expresion.test(input_titulo.value)) {
    input_titulo.maxLength = 10;
    alert("El título no puede contener más de 10 caracteres.");
  }
});

// funcion para mover el titulo de la camiseta segun los sliders
function moverTitulo() {
  // obtenemos los sliders para mover el titulo
  let sliderX = document.getElementById("posicionX");
  let sliderY = document.getElementById("posicionY");
  let ejeX = sliderX.value;
  let ejeY = sliderY.value;
  let titulo = document.getElementById("parrafo_titulo");
  titulo.style.left = ejeX + "px";
  titulo.style.top = ejeY + "px";
}

// añadimos eventos mouesemove a los slider para mover el titulo en el eje x e eje y

document.getElementById("posicionX").addEventListener("mousemove", moverTitulo);
document.getElementById("posicionY").addEventListener("mousemove", moverTitulo);

// funcion para añadir el evento drag start a las imagenes
function imagenDragStart() {
  // obtener las imagenes que vamos a usar
  let imagenGoku = document.getElementById("GOKU");
  let imagenSuperSayan = document.getElementById("SUPERSAIYAN");
  let imagenPicolo = document.getElementById("PICCOLO");
  let imagenVegeta = document.getElementById("VEGETA");

  // añadir evento dragstart a todas las imagenes
  imagenGoku.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.dataTransfer.setData("id", event.target.id);
  });

  imagenSuperSayan.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.dataTransfer.setData("id", event.target.id);
  });
  imagenPicolo.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.dataTransfer.setData("id", event.target.id);
  });
  imagenVegeta.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.src);
    event.dataTransfer.setData("id", event.target.id);
  });
}

// llamamos a la funcion para agregar los eventos dragstart a las imagenes
imagenDragStart();

// obtenemos el div de la camiseta y le añadimos un evento de drop
let contenedorCamiseta = document.getElementById("contenedor_camiseta");
contenedorCamiseta.addEventListener("drop", (event) => {
  event.preventDefault();

  //obtenemos los elementos que vamos a necesitar
  let divImagenTexto = document.getElementById("imagen_texto");
  let divImagenGrande = document.getElementById("imagen_grande");

  let tituloImagen = document.getElementById("titulo_imagen"); // elemento donde se va a insertar el texto de la imagen

  //comprobar si hay una imagen en la camiseta para eliminarla
  let imagenExistente = divImagenTexto.querySelector("img");
  // condicion para comprobar que la variable tiene algun valor
  if (imagenExistente != null) {
    imagenExistente.remove();
  }
  // Eliminar el texto por defecto
  let texto = document.getElementById("parrafo1");
  texto.textContent = "";

  // Añadir imagen a la camiseta
  let imagenGrande = document.createElement("img");
  imagenGrande.src = event.dataTransfer.getData("text/plain");

  imagenGrande.style.width = "100px";
  imagenGrande.style.marginLeft = "70px";
  // añadir la imagen creada al div
  divImagenGrande.appendChild(imagenGrande);

  //Añadir el id de la imagen
  imagenGrande.id = event.dataTransfer.getData("id");
  tituloImagen.textContent = imagenGrande.id;

  // Añadir la imagen en el logo
  let imagenLogo = document.createElement("img");
  imagenLogo.setAttribute("class", "rotarImagen"); // añadir a la imagen la clase rotar imagen
  imagenLogo.src = event.dataTransfer.getData("text/plain");
  imagenLogo.style.width = "40px";
  imagenLogo.style.marginRight = "20px";

  // comprobamos si hay alguna imagen en el logo para eliminarla y añadir la nueva
  let divLogo = document.getElementById("div_logo");
  let imagenExistenteLogo = divLogo.querySelector("img");
  if (imagenExistenteLogo != null) {
    imagenExistenteLogo.remove();
  }

  // añadimos la imagen del logo al div
  divLogo.appendChild(imagenLogo);
});

// añadir un evento dragover a la camiseta para cuando termina de arrastrar la imagen
contenedorCamiseta.addEventListener("dragover", (event) => {
  event.preventDefault();
});
