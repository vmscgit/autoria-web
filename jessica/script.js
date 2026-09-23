console.log("O JavaScript está funcionando corretamente!");

const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("botao");
const remover = document.getElementById("remover");
const alterar = document.getElementById("alterar");
const alterarTitulo = document.getElementById("alterarTitulo");
const aviso = document.getElementById("aviso");
const modoEscuro = document.getElementById("modoEscuro");

botao.addEventListener("click", function () {
    mensagem.classList.add("destaque");
});

remover.addEventListener("click", function () {
    mensagem.classList.remove("destaque");
});

alterar.addEventListener("click", function () {
    mensagem.textContent = "Status alterado com sucesso!";
});

alterarTitulo.addEventListener("click", function () {
    titulo.textContent = "DOM atualizado";
    document.title = "DOM atualizado";
});

aviso.addEventListener("click", function () {
    mensagem.classList.toggle("aviso");
});

modoEscuro.addEventListener("click", function () {
    document.body.classList.toggle("escuro");
});