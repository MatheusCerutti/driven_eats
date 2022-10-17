let prato;
let valorcomida;

function selecionarcomida(comida){
   comidaanterior = document.querySelector(".opcoes1.selecionado");

   if(comidaanterior !== null){
      comidaanterior.classList.remove("selecionado");
   }

   comida.classList.add("selecionado");
   prato = comida.innerHtml;
   alterar();
}

let drink;
let valordrink;

function selecionarbebida(bebida){
   bebidaanterior = document.querySelector(".opcoes2.selecionado");

   if(bebidaanterior !== null){
     bebidaanterior.classList.remove("selecionado");
   }

   bebida.classList.add("selecionado");
   drink = bebida.innerHtml;
   alterar();
}

let desert;
let valorsobremesa;

function selecionarsobremesa(sobremesa){
   sobremesaanterior = document.querySelector(".opcoes3.selecionado");

   if(sobremesaanterior !== null){
     sobremesaanterior.classList.remove("selecionado");
   }

   sobremesa.classList.add("selecionado");
   desert = sobremesa.innerHtml;

   alterar();
}

function pedidopronto(){

   if(prato !== undefined){
      if (drink !== undefined) {
         if (desert !== undefined){
            let mudanca = document.querySelector(".botao");
            mudanca.innerHtml = "Continuar";
         }
      }
   }
}


function alterar() {
   comidaanterior = document.querySelector(".opcoes1.selecionado");
   bebidaanterior = document.querySelector(".opcoes2.selecionado");
   sobremesaanterior = document.querySelector(".opcoes3.selecionado");

   if(comidaanterior !== null && bebidaanterior !== null && sobremesaanterior !== null){
      let mudanca = document.querySelector(".botao");
      mudanca.classList.add("fecharPedido");
      mudanca.innerHTML = "Fechar pedido";
   }


}


