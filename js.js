// animaciones, tocadiscos, etc ------------

// function escribir(b, a){
// 	document.getElementById('cont1').innerHTML= b;
// 	document.getElementById('cont2').innerHTML= a;
// }

function escribir(b, a){
  $('#cont1').html(b);
  $('#cont2').html(a);
}

// boton 1, Cómo usarlo
function cargarImagen(){
  var xhr = new XMLHttpRequest();
  var imagen = "img/CimagenMisteriosa.GIF";
  xhr.responseType = "blob";
  xhr.onload = function(){
    var blob = xhr.response;
    var imagen = URL.createObjectURL(blob);
    var img = document.createElement('img');
    img.src = imagen;
    // document.body.appendChild(img);
    document.getElementById("cargaaa").appendChild(img);
    img.setAttribute("id","imagenNueva")
    document.getElementById("botonMisterioso").setAttribute("onclick","quitarImagen()")
  };
  xhr.open("GET", imagen);
  xhr.send();
};
function quitarImagen(){
  document.getElementById("imagenNueva").remove();
  document.getElementById("botonMisterioso").setAttribute("onclick","cargarImagen()")
};


// Botón 2, Link Misterioso
function cargarInfo(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("uso").innerHTML =
      this.responseText;
      document.getElementById("boton1").setAttribute("onclick","quitarInfo()")
    }
    xhttp.open("GET", "info.html");
    xhttp.send();
}; // DEsCOMENTAR ESTA  LÏNEA----------------------------------------------------------------------------------
function quitarInfo(){
  var A = document.getElementById("info")
  A.parentNode.removeChild(A);
  document.getElementById("boton1").setAttribute("onclick","cargarInfo()")
}

function correrAnimacion(alb_2, alb_1, alb_3){

  document.getElementById("boton").style.margin = '0 0 0 625px';

    const imageA = document.createElement('img')
    imageA.src  = alb_2
    document.querySelector('.footer').appendChild(imageA )
    imageA.setAttribute("id","disco")

    const imageB = document.createElement('img')
    imageB.src  = '155.png'
    document.querySelector('.footer').appendChild(imageB)
    imageB.setAttribute("id","disco_1")

    const flipA = document.createElement('div')
    document.querySelector('.footer_3').appendChild(flipA)
    flipA.setAttribute("class","flip-box")

    const flipB = document.createElement('div')
    document.querySelector('.flip-box').appendChild(flipB)
    flipB.setAttribute("class","flip-box-inner")

    const flipBA = document.createElement('div')
    document.querySelector('.flip-box-inner').appendChild(flipBA)
    flipBA.setAttribute("class","flip-box-front")

    const flipBB = document.createElement('div')
    document.querySelector('.flip-box-inner').appendChild(flipBB)
    flipBB.setAttribute("class","flip-box-back")

    const imageC = document.createElement('img')
    imageC.src  = alb_1
    document.querySelector('.flip-box-front').appendChild(imageC)
    imageC.setAttribute("id","sleeve")

    const imageD = document.createElement('img')
    imageD.src  = alb_3
    document.querySelector('.flip-box-back').appendChild(imageD)
    imageD.setAttribute("id","sleeve")

        document.getElementById("disco").animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(359deg)' }
        ], {
        delay: 1000,
        duration: 1900,
        iterations: Infinity
        });
        document.getElementById("pluma").animate([
        { transform: 'rotate(0deg)' },
        { transform: 'rotate(15deg)' }
        ], {
        duration: 1000,
        iterations: 1
        });
        document.getElementById("pluma").style.transform = 'rotate(15deg)';
}

function detener(){
  var elementA = document.getElementById("disco_1");
  var elementB = document.getElementById("disco");
  var elementC = document.getElementById("sleeve");

  const flipA = document.querySelector('.flip-box');
  const flipB = document.querySelector('.flip-box-inner');
  const flipC = document.querySelector('.flip-box-front');
  const flipD = document.querySelector('.flip-box-back');

	document.getElementById("disco").animate([
	  { transform: 'rotate(0deg)' },
	  { transform: 'rotate(0deg)' }
	], {
	  duration: 1000,
	  iterations: Infinity
	});
	document.getElementById("pluma").animate([
	  { transform: 'rotate(15deg)' },
	  { transform: 'rotate(0deg)' }
	], {
	  duration: 1000,
	  iterations: 1
	});
  document.getElementById("boton").style.margin = '235px 0 0 625px';
	document.getElementById("pluma").style.transform = 'rotate(0deg)';

        elementA.parentNode.removeChild(elementA);
        elementB.parentNode.removeChild(elementB);
        elementC.parentNode.removeChild(elementC);

	document.getElementById('cont1').innerHTML='';
	document.getElementById('cont2').innerHTML='';
	document.getElementById('cont2').style.color = '#011e0d';

	flipA.remove();
	flipB.remove();
	flipC.remove();
	flipD.remove();

}
