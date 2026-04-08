function atualizarAtendimento(){
    const ultimo = localStorage.getItem('ultimoAtendido');
    const exibicao = document.getElementById('ultimoAtendimento');

    if(ultimo){
        const partes = ultimo.split(' | '); 
        const nome = partes[0];

        exibicao.textContent = nome;
    }else{
        exibicao.textContent = "Aguardando..."
    }
}

atualizarAtendimento();

setInterval(atualizarAtendimento, 1000);