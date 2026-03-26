const minhaFila = new Fila(5);

function adicionarElemento() {
  const novoElemento = document.getElementById("txtnovoNome");

  if (minhaFila.enqueue(novoElemento.value) === true) {
    mostrarFila(); // mostrar a fila
    novoElemento.value = ""; //clear
    novoElemento.focus();
  } else {
    alert("Fila cheia!");
  }
}

function mostrarFila() {
  const filaElemento = document.getElementById("listFila");
  filaElemento.innerHTML="";
  for(let item of minhaFila){
    const listItem = document.createElement("li");
    listItem.textContent = item;
    filaElemento.appendChild(listItem);
  }
}

function removerElemento() {
  const removElemento = minhaFila.dequeue();
  if (removElemento == null) alert("fila vazia!");
  else {
    alert("elemento removido: " + removElemento)
      mostrarFila(); // mostrar a fila
      novoElemento.value = ""; //clear
      novoElemento.focus();
    return removElemento;
  }
}


function buscarElemento(){
  //valor do input
  const buscado = document.getElementById("txtnovoNome");
  let encontrado = false;
  //percorrer a fila
  i=0;
  for(let item of minhaFila){
    if(buscado.value===item){
      i++;
      alert(item +" encontrado na fila, posição: "+i)
      encontrado = true;
    }
  }
  if(!encontrado){
    alert("não encontrado na fila")
  }
}