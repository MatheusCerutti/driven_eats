let prato;
let valorcomida;

function selecionarcomida(comida){
   comidaanterior = document.querySelector(".opcoes1.selecionado");
   iconeanterior = document.querySelector(".opcoes1 .iconeon");
   iconeatual = comida.querySelector(".iconeoff")

   if(comidaanterior !== null && iconeanterior !== null){
      comidaanterior.classList.remove("selecionado");
      iconeanterior.classList.remove("iconeon");
      iconeanterior.classList.add("iconeoff");
   }

   comida.classList.add("selecionado");
   iconeatual.classList.add("iconeon");
   iconeatual.classList.remove("iconeoff");

   prato = comida.querySelector(".nomeitem");
   valorcomida = comida.querySelector(".valor");
   alterar();
}

function selecionarvalor(comida){
   
}

let drink;
let valordrink;

function selecionarbebida(bebida){
   bebidaanterior = document.querySelector(".opcoes2.selecionado");
   iconeanterior = document.querySelector(".opcoes2 .iconeon");
   iconeatual = bebida.querySelector(".iconeoff")

   if(bebidaanterior !== null){
     bebidaanterior.classList.remove("selecionado");
     iconeanterior.classList.remove("iconeon");
      iconeanterior.classList.add("iconeoff");
   }

   bebida.classList.add("selecionado");
   iconeatual.classList.add("iconeon");
   iconeatual.classList.remove("iconeoff");
   drink = bebida.querySelector(".nomeitem");
   valordrink = bebida.querySelector(".valor2");
   alterar();
}

let desert;
let valorsobremesa;

function selecionarsobremesa(sobremesa){
   sobremesaanterior = document.querySelector(".opcoes3.selecionado");
   iconeanterior = document.querySelector(".opcoes3 .iconeon");
   iconeatual = sobremesa.querySelector(".iconeoff")

   if(sobremesaanterior !== null){
     sobremesaanterior.classList.remove("selecionado");
     iconeanterior.classList.remove("iconeon");
      iconeanterior.classList.add("iconeoff");
   }

   sobremesa.classList.add("selecionado");
   iconeatual.classList.add("iconeon");
   iconeatual.classList.remove("iconeoff");
   desert = sobremesa.querySelector(".nomeitem");
   valorsobremesa = sobremesa.querySelector(".valor2");

   alterar();
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

let url;

function fazerpedido() {

   let dishes = prato.innerHTML;
   let alcool = drink.innerHTML;
   let delicia = desert.innerHTML;
   let valorc = Number(((valorcomida.innerHTML).replace('R$ ','')).replace(',', '.'));
   let valorb = Number(((valordrink.innerHTML).replace('R$ ','')).replace(',', '.'));
   let valors = Number(((valorsobremesa.innerHTML).replace('R$ ','')).replace(',', '.'));
   let total = valorc + valorb + valors;

   let text = "Olá, gostaria de fazer o pedido:/n" + "- Prato:"+dishes+"<br> - Bebida:"+alcool+"<br> - Sobremesa:"+delicia+"<br> Total:"+total;
   url = "https://wa.me/5527995321426?text="+encodeURIComponent(text);
   console.log(url);
}
