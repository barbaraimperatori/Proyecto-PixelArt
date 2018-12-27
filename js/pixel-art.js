var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//variables para guardar los elementos paleta y grilla-pixeles
const paleta = document.getElementById('paleta');
const grillaPixeles = document.getElementById('grilla-pixeles');

//función para generar paleta de colores dinámicamente creando un div por cada color asignando un background color y una clase
function generarPaletaDeColores() {
  for (let i = 0; i < nombreColores.length; i++) {
    let coloresRecorridos = document.createElement('div');
    coloresRecorridos.className = 'color-paleta';
    coloresRecorridos.style.backgroundColor = nombreColores[i];
    paleta.appendChild(coloresRecorridos);
  }
}

//función para crear la grilla de pixeles
function generarGrillaDePixeles (){
  for (let i = 0; i < 1750; i++) {
    let grillaCreada = document.createElement('div');
    grillaPixeles.appendChild(grillaCreada);
  }
}

//función para mostrar color seleccionado en el indicador de color
let colorSeleccionado = document.getElementById('indicador-de-color');
paleta.addEventListener('click', mostrarColorSeleccionado);

function mostrarColorSeleccionado(e){
    colorSeleccionado.style.backgroundColor = e.target.style.backgroundColor;
}

//función para pintar un pixel de la grilla
grillaPixeles.addEventListener('click', pintarPixel);

function pintarPixel (e){
  e.target.style.backgroundColor = colorSeleccionado.style.backgroundColor;
}

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    colorSeleccionado.style.backgroundColor = colorActual;
  })
);

//función para detectar si el mouse está apretado o no
let detectarSiHayClick;

grillaPixeles.addEventListener('mousedown', hayClick);
grillaPixeles.addEventListener('mouseup', noHayClick);

function hayClick(e){
  detectarSiHayClick = true;
  //console.log('click');
}

function noHayClick (e){
  detectarSiHayClick = false;
  //console.log('no hay click');
}

//función para pintar en movimiento
grillaPixeles.addEventListener('mouseover', pintarEnMovimiento);

function pintarEnMovimiento (e){
  if(detectarSiHayClick){
    e.target.style.backgroundColor = colorSeleccionado.style.backgroundColor;
  }
}

//función para borrar la pantalla con un botón
function borrarGrilla(){
  $("#borrar").click(function(){
    const pixelesParaBorrar = $("#grilla-pixeles").find("div");
    $(pixelesParaBorrar).fadeOut(10);
    generarGrillaDePixeles();
    }
  );
  }

//función para cargar superhéroes en la grilla
  //prueba
  let superheroeEnElDOM = document.getElementsByTagName('img');
  for (let i = 0; i < superheroeEnElDOM.length; i++) {
    let element = superheroeEnElDOM[i];
  }


generarPaletaDeColores();
generarGrillaDePixeles();
borrarGrilla();