document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".filtros button");
  const cards = document.querySelectorAll(".card");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {

     
      botones.forEach(b => b.classList.remove("activo"));
      boton.classList.add("activo");

      const filtro = boton.dataset.filtro;

      cards.forEach(card => {
        if (filtro === "todos" || card.dataset.categoria === filtro) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

    });
  });
});

document.addEventListener("DOMContentLoaded", activarFiltros);
