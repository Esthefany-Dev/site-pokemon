//Descrição do Pokemon
const nome = document.querySelector('.nome-pokemon');
const tipo = document.querySelector('.tipos');
const habilidade = document.querySelector('.habilidade-text');
const habilidadeOculta = document.querySelector('.habilidade-oculta-text');
const pontoForte = document.querySelector('.ponto-forte-text');
const pontoFraco = document.querySelector('.ponto-fraco-text');

//Sub-Images
const pikachu = document.querySelector('.img-pikachu');
const squirtle = document.querySelector('.img-squirtle');
const charmander = document.querySelector('.img-charmander');
const bulbasaur = document.querySelector('.img-bulbasaur');

pikachu.addEventListener('click', ()=> {
    nome.style.color="#e7b100";
    nome.innerHTML="Pikachu";
    tipo.innerHTML="Elétrico";
    tipo.id='tipo-eletrico';
    habilidade.innerHTML ="Estático";
    habilidadeOculta.innerHTML="Pára-Raios";
    pontoForte.innerHTML = `
        <span class="tipos" id="tipo-agua">Água</span>
        <span class="tipos" id="tipo-voador">Voador</span>
    `;
    pontoFraco.innerHTML=`
        <span class="tipos" id="tipo-eletrico">Elétrico</span>
        <span class="tipos" id="tipo-grama">Grama</span>
        <span class="tipos" id="tipo-dragao">Dragão</span>
    `
});

squirtle.addEventListener('click', ()=> {
    nome.style.color="#61dbfa";
    nome.innerHTML="Squirtle";
    tipo.innerHTML="Água";
    tipo.id="tipo-agua";
    habilidade.innerHTML="Torrente";
    habilidadeOculta.innerHTML="Prato de Chuva";
    pontoForte.innerHTML = `
        <span class="tipos" id="tipo-fogo">Fogo</span>
        <span class="tipos" id="tipo-terra">Terra</span>
        <span class="tipos" id="tipo-pedra">Pedra</span>
    `;
     pontoFraco.innerHTML=`
        <span class="tipos" id="tipo-agua"> Água </span>
        <span class="tipos" id="tipo-grama">Grama</span>
        <span class="tipos" id="tipo-dragao">Dragão</span>
        <span class="tipos" id="tipo-eletrico">Elétrico</span>
     `;
});

charmander.addEventListener('click', ()=> {
    nome.style.color="#faa82d";
    nome.innerHTML="Charmander";
    tipo.innerHTML="Fogo";
    tipo.id="tipo-fogo";
    habilidade.innerHTML="Chamas";
    habilidadeOculta.innerHTML="Energia Solar";
    pontoForte.innerHTML=`
        <span class="tipos" id="tipo-grama">Grama</span>
        <span class="tipos" id="tipo-gelo">Gelo</span>
        <span class="tipos" id="tipo-inseto">Inseto</span>
        <span class="tipos" id="tipo-aco">Aço</span>
        <span class="tipos" id="tipo-fada">Fada</span>
    `;
    pontoFraco.innerHTML=`
        <span class="tipos" id="tipo-fogo">Fogo</span>
        <span class="tipos" id="tipo-agua"> Água </span>
        <span class="tipos" id="tipo-pedra">Pedra</span>
        <span class="tipos" id="tipo-dragao">Dragão</span>
    `;    
});

bulbasaur.addEventListener('click', ()=> {
    nome.style.color="#008059";
    nome.innerHTML="Bulbasaur";
    tipo.innerHTML="Planta";
    tipo.id="tipo-planta";
    habilidade.innerHTML="Crescimento rápido de plantas (Overgrow)";
    habilidadeOculta.innerHTML="Clorofila";
    pontoForte.innerHTML =`
        <span class="tipos" id="tipo-agua"> Água </span>
        <span class="tipos" id="tipo-terra">Terra</span>
        <span class="tipos" id="tipo-pedra">Pedra</span>
        <span class="tipos" id="tipo-grama">Grama</span>
        <span class="tipos" id="tipo-inseto">Inseto</span>
        <span class="tipos" id="tipo-fada">Fada</span>
    ` ;
    pontoFraco.innerHTML=`
        <span class="tipos" id="tipo-fogo">Fogo</span>
        <span class="tipos" id="tipo-grama">Grama</span>
        <span class="tipos" id="tipo-voador"> Voador </span>
        <span class="tipos" id="tipo-dragao">Dragão</span>
        <span class="tipos" id="tipo-veneno">Veneno</span>
        <span class="tipos" id="tipo-inseto">Inseto</span>
        <span class="tipos" id="tipo-pedra">Pedra</span>
        <span class="tipos" id="tipo-terra">Terra</span>
        <span class="tipos" id="tipo-fantasma">Fantasma</span>
    
    `;
});
function mudarCorCirculo(color){
    const circulo = document.querySelector('.conteudo-circulo-dinamico');
    circulo.style.background = color;
}
function imgSlider(anything){
    document.querySelector('.img-dinamica').src=anything;
}