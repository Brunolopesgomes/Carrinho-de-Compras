
  let totalDoCarrinho = 0;

function adicionar(){

  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let precoProduto = produto.split('$')[1];
  
  let quantidade = document.getElementById('quantidade').value;
  
  let totalProduto = precoProduto * quantidade;

  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x </span>${nomeProduto}<span class="texto-azul">R$${precoProduto}</span> </section>` + carrinho.innerHTML;

totalDoCarrinho = totalDoCarrinho + totalProduto;

let somaDosProdutos = document.getElementById('valor-total');
somaDosProdutos.innerHTML = `R$${totalDoCarrinho}`;
document.getElementById('quantidade').value = '';
  
}
function limpar(){
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML = '';

let somaDosProdutos = document.getElementById('valor-total');
somaDosProdutos.innerHTML = 0;

}
