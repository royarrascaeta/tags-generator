const d = document;

//Guardo el input y el div donde se generan las etiquetas en variables
const $input = d.querySelector(".tags-container input");
const $tags = d.querySelector(".tags");
const $tagsMessage = d.querySelector(".tags-message");

//Añado el evento "keydown" al input, si el usuario presiona la tecla Espacio o Enter ejecuto la función createTag y le mando el valor sin espacios
$input.addEventListener("keydown",(e)=>{
  let regexp = /[a-zA-Z0-9ñÑ]/;

  if(!e.key.match(regexp) || ($input.value.length == 30 && e.keyCode !== 8)){
    e.preventDefault();
    $tagsMessage.style.display = "block";
    
    setTimeout(() => {
      $tagsMessage.style.display = "none";
    }, 5000);
  }else{
    $tagsMessage.style.display = "none";
  }

  if((e.keyCode == 32 || e.keyCode == 13) && $input.value !== ""){
    $tagsMessage.style.display = "none";
    let value = e.target.value;
    createTag(value.trim());
    $input.value = null;
  }
})

//Genero el span y el botón para eliminar la etiqueta, le añado un eventListener al click y ejecuto la función deleteTag
function createTag(text){
  const $span = d.createElement("span");
  const $btnDelete = d.createElement("button");
  $btnDelete.innerText = "x";
  $span.innerText = "#"+text;
  $span.appendChild($btnDelete);
  $tags.appendChild($span);

  $btnDelete.addEventListener("click",(e)=>deleteTag(e))
}

//Guardo en una variable el span que se va a eliminar, primero ejecuto la animación y luego de 500ms remuevo el span
function deleteTag(e){
  e.preventDefault();
  let $spanTarget = e.target.parentNode;

  $spanTarget.style.animationName = "scaleDown";

  setTimeout(() => {
    $spanTarget.remove();
  }, 500);
}