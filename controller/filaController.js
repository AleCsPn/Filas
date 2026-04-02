const minhaFila = new Fila(5);

function adicionarElemento() {
  const nome =  document.getElementById("txtnovoNome");
  const cpf = document.getElementById("txtnovoCPF");
  const data = obterDataAtual();
  const hora = obterHoraAtual();
  const novoAtendimento = new Atendimento(nome.value,cpf.value,data,hora);

  if (minhaFila.enqueue(novoAtendimento) === true) {
    mostrarFila(); // mostrar a fila
    nome.value = ""; //clear
    cpf.value = "";
    nome.focus();
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
  const buscado = document.getElementById("txtnovoCPF");//valor do input
  let encontrado = false;
  i = 1; //conta as posições da fila para a exibição no alert
  for(let atendimento of minhaFila){//percorrer a fila
       if(buscado.value === atendimento.cpf){
      alert(atendimento.nome +" encontrado na fila, posição: "+i)
      encontrado = true;
    }
    i++;
  }
  if(!encontrado){
    alert("não encontrado na fila")
  }
}