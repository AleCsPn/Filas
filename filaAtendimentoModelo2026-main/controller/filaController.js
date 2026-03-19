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
  const filaElemento = document.getElementById("lblPessoasFila");
  filaElemento.textContent = minhaFila.toString();
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
