
document.addEventListener("DOMContentLoaded", () => {
    const pasta = document.getElementById("pasta");
    const fechar = document.getElementById("fechar");
    const historico = document.querySelector(".pag-historico");

    pasta.addEventListener("click", () => {
        historico.classList.add("ativo");
    });

    
    fechar.addEventListener("click", () => {
        historico.classList.remove("ativo");
    });
});