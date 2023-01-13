// variaveis para selecionar o botao finaliza pedido
let slcomida;
let slbebida;
let slsobremesa;

// Marcar a caixa Comida
function selecionandoitemcomida(caixasuporteitemNOthis) {
  const botaoselecionadoAnterior = document.querySelector(".escondido");

  if (botaoselecionadoAnterior !== null) {
    botaoselecionadoAnterior.classList.remove("escondido");
  }

  caixasuporteitemNOthis.classList.add("escondido");

  lscomida = 5;

  botaodefinalizar();
}

// Marca a caixa Bebida
function selecionandoitembebida(caixasuporteitemNOthis) {
  const botaoselecionadoAnterior = document.querySelector(".escondido2");

  if (botaoselecionadoAnterior !== null) {
    botaoselecionadoAnterior.classList.remove("escondido2");
  }

  caixasuporteitemNOthis.classList.add("escondido2");

  lsbebida = 5;

  botaodefinalizar();
}

//Marca a caixa Sobremesa
function selecionandoitemsobremesa(caixasuporteitemNOthis) {
  const botaoselecionadoAnterior = document.querySelector(".escondido3");

  if (botaoselecionadoAnterior !== null) {
    botaoselecionadoAnterior.classList.remove("escondido3");
  }

  caixasuporteitemNOthis.classList.add("escondido3");

  lssobremesa = 5;

  botaodefinalizar();
}

// Mudar para Finalizar pedido
function botaodefinalizar() {
  if (lscomida !== undefined) {
    if (lsbebida !== undefined) {
      if (lssobremesa !== undefined) {
        const verdeverde = document.querySelector(".finalizarpedidoverde");
        verdeverde.classList.remove("oculto2");
      }
    }
  }
}

function verdenovo(verdenovoaba) {
  const botaofinal = document.querySelector(".outraaba");

  verdenovoaba.classList.add("xyz");
}
