const botao = document.getElementById('botao');
const texto = Document.getElementById('texto');

botao.addEventListener('click', function(){
    texto.textContent = 'Oba! Você clicou no botão!';


    texto.style.color = 'red';
    texto.style.fontSize = '24px';
    texto.style.fontWeight = 'bold';

});