const minhaFila = new Fila(5);

function adicionarElemento() {
  const nome = document.getElementById("txtnovoNome");
  const cpf = document.getElementById("txtnovoCPF");
  const data = obterDataAtual();
  const hora = obterHoraAtual();
  const novoAtendimento = new Atendimento(nome.value, cpf.value, data, hora);

  novoAtendimento.horaEntrada = new Date();

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
  //mostra a fila em lista
  const filaElemento = document.getElementById("listFila");
  filaElemento.innerHTML = "";
  for (let item of minhaFila) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    filaElemento.appendChild(listItem);
  }
}

function removerElemento() {
  const removElemento = minhaFila.dequeue();
  if (removElemento == null)
    alert("fila vazia!"); //nao da pra remover um elemento se a fila estiver vazia
  else {
    const momentoSaida = new Date();
    const tempoEsperaMs = momentoSaida - removElemento.momentoEntrada;

    const minutos = Math.floor(tempoEsperaMs / 60000);
    const segundos = Math.floor((tempoEsperaMs % 60000) / 1000);
    const tempoTotalFormatado = `${minutos}m ${segundos}s`;
    const horaSaidaFormatada = momentoSaida.toLocaleTimeString("pt-BR");

    
    const divMensagem = document.getElementById("mensagem-remocao");
    
    divMensagem.innerHTML = `
    <h4 class="alert-heading">Chamando para atendimento:</h4>
    <hr>
    <p class="mb-0">
      <strong>Nome:</strong> ${removElemento.nome} <br>
      <strong>Entrada:</strong> ${removElemento.hora} | <strong>Saída:</strong> ${horaSaidaFormatada} <br>
      <strong>Tempo Total de Espera:</strong> <span class="badge bg-dark">${tempoTotalFormatado}</span>
    </p>
  `;
    divMensagem.style.display = "block";
    alert("elemento removido: " + removElemento);
    mostrarFila();
    localStorage.setItem("ultimoAtendido", removElemento); //salva no local storage os dados da ultima pessoa atendida
    console.log(`\nAtendido: ${removElemento.nome}`); //o nome de quem foi atendido no console
    console.log(`Local Storage: ${localStorage.getItem("ultimoAtendido")}`); //mostra o que foi salvo no local storage no console
    return removElemento;
  }
}

function buscarElemento() {
  const buscado = document.getElementById("txtnovoCPF"); //valor do input do cpf
  let encontrado = false;
  i = 1; //conta as posições da fila para a exibição no alert
  for (let atendimento of minhaFila) {
    //percorrer a fila
    if (buscado.value === atendimento.cpf) {
      //se o cpf for igual o de alguem da fila, ele passará nesse teste lógico
      alert(atendimento.nome + " encontrado na fila, posição: " + i);
      encontrado = true;
    }
    i++;
  }
  if (!encontrado) {
    //caso ele falhe, esse alerta aparecerá
    alert("não encontrado na fila");
  }
}
