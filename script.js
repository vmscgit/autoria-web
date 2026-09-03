const mensagem = document.getElementById('Menssagem');

const botao = document.getElementById('botao');
const remover = document.getElementById('remover');
const alterar = document.getElementById('alterar');
const alterarTitulo = document.getElementById('AlterarTitulo');
const aviso = document.getElementById('aviso');
const modoEscuro = document.getElementById('modoEscuro');

botao.addEventListener('click', () => {
  mensagem.classList.add('destaque');
});

remover.addEventListener('click', () => {
  mensagem.classList.remove('destaque', 'aviso');
});

alterar.addEventListener('click', () => {
  mensagem.textContent = 'Status alterado com sucesso!';
});

alterarTitulo.addEventListener('click', () => {
  document.title = 'DOM alterado';
});

aviso.addEventListener('click', () => {
  mensagem.classList.add('aviso');
});

modoEscuro.addEventListener('click', () => {
  document.body.classList.toggle('escuro');
});
