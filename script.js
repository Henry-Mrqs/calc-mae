function calcular() {
  var valorProduto = parseFloat(document.getElementById("valorProduto").value);
  var porcentagem = parseFloat(document.getElementById("porcentagem").value);

  if (isNaN(valorProduto) || isNaN(porcentagem)) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  var valorTotal = valorProduto * (1 + porcentagem / 100);

  document.getElementById("resultado").innerText =
    "O valor total é: R$ " + valorTotal.toFixed(2);
}
