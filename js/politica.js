function buscarMateria() {
  const termo = document.getElementById("searchInput").value;
  if (termo.trim() === "") {
    alert("Digite o nome da matéria!");
  } else {
    alert("Buscando por: " + termo);
  }
}
