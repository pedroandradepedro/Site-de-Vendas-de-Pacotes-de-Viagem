function atualizarValorTotal() {
  let precoTexto = document.querySelector(".price").textContent;

  let precoPorLugar = parseFloat(precoTexto.replace(/\D/g, ""));

  let quantidade = document.getElementById("quantos").value;

  let valorTotal = quantidade * precoPorLugar;

  const valorTotalStrong = document.querySelector("#valorTotal strong");
  valorTotalStrong.textContent = "";
}
