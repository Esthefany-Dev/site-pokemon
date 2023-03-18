 //Botões:
 const btnEvolucaoPikachu = document.getElementById('verEvolucaoPikachu');
 const btnEvolucaoSquirtle = document.getElementById('verEvolucaoSquirtle');
 const btnEvolucaoCharmander = document.getElementById('verEvolucaoCharmander');
 const btnEvolucaoBulbasaur = document.getElementById('verEvolucaoBulbasaur');

 //Conteúdo após clicar no botão:
 const evolutionPikachu = document.getElementById('evolutionPikachu');
 const evolutionSquirtle = document.getElementById('evolutionSquirtle')
 const evolutionCharmander = document.getElementById('evolutionCharmander')
 const evolutionBulbasaur = document.getElementById('evolutionBulbasaur')

 //Eventos:
 btnEvolucaoPikachu.addEventListener('click', verEvolucaoPikachu);
 btnEvolucaoSquirtle.addEventListener('click', verEvolucaoSquirtle);
 btnEvolucaoCharmander.addEventListener('click', verEvolucaoCharmander);
 btnEvolucaoBulbasaur.addEventListener('click', verEvolucaoBulbasaur);

 //Funções
 function verEvolucaoPikachu(){
     if(evolutionPikachu.style.display === 'block') {    
         evolutionPikachu.style.display = 'none';
         btnEvolucaoPikachu.innerHTML = 'Ver Detalhes';
         btnEvolucaoPikachu.style.backgroundColor = '#005ff7';

     } else {
         evolutionPikachu.style.display = 'block';
         evolutionSquirtle.style.display = 'none';
         evolutionCharmander.style.display = 'none';
         evolutionBulbasaur.style.display = 'none';

         btnEvolucaoPikachu.innerHTML = 'Ver Menos';
         btnEvolucaoPikachu.style.backgroundColor='#5c9bff';
         btnEvolucaoPikachu.style.borderColor='#5c9bff';

         btnEvolucaoSquirtle.innerHTML = 'Ver Detalhes';
         btnEvolucaoSquirtle.style.backgroundColor = '#005ff7';
         btnEvolucaoCharmander.innerHTML = 'Ver Detalhes';
         btnEvolucaoCharmander.style.backgroundColor = '#005ff7';
         btnEvolucaoBulbasaur.innerHTML = 'Ver Detalhes';
         btnEvolucaoBulbasaur.style.backgroundColor = '#005ff7';     
     }
 }
 function verEvolucaoSquirtle(){
     if(evolutionSquirtle.style.display === 'block') {
         evolutionSquirtle.style.display = 'none';
         btnEvolucaoSquirtle.innerHTML = 'Ver Detalhes';
         btnEvolucaoSquirtle.style.backgroundColor = '#005ff7';

     } else {
         evolutionSquirtle.style.display = 'block';
         evolutionPikachu.style.display = 'none';
         evolutionCharmander.style.display = 'none';
         evolutionBulbasaur.style.display = 'none';

         btnEvolucaoSquirtle.innerHTML = 'Ver Menos';
         btnEvolucaoSquirtle.style.backgroundColor='#5c9bff';
         btnEvolucaoSquirtle.style.borderColor='#5c9bff';

         btnEvolucaoPikachu.innerHTML = 'Ver Detalhes';
         btnEvolucaoPikachu.style.backgroundColor = '#005ff7';
         btnEvolucaoCharmander.innerHTML = 'Ver Detalhes';
         btnEvolucaoCharmander.style.backgroundColor = '#005ff7';
         btnEvolucaoBulbasaur.innerHTML = 'Ver Detalhes';
         btnEvolucaoBulbasaur.style.backgroundColor = '#005ff7';
     }
 }
 function verEvolucaoCharmander(){
     if(evolutionCharmander.style.display === 'block') {
         evolutionCharmander.style.display = 'none';
         btnEvolucaoCharmander.innerHTML = 'Ver Detalhes';
         btnEvolucaoCharmander.style.backgroundColor = '#005ff7';
     } else {
         evolutionCharmander.style.display = 'block';
         evolutionPikachu.style.display = 'none';
         evolutionSquirtle.style.display = 'none';
         evolutionBulbasaur.style.display = 'none';

         btnEvolucaoCharmander.innerHTML = 'Ver Menos';
         btnEvolucaoCharmander.style.backgroundColor='#5c9bff';
         btnEvolucaoCharmander.style.borderColor='#5c9bff';

         btnEvolucaoPikachu.innerHTML = 'Ver Detalhes';
         btnEvolucaoPikachu.style.backgroundColor = '#005ff7';
         btnEvolucaoSquirtle.innerHTML = 'Ver Detalhes';
         btnEvolucaoSquirtle.style.backgroundColor = '#005ff7';
         btnEvolucaoBulbasaur.innerHTML = 'Ver Detalhes';
         btnEvolucaoBulbasaur.style.backgroundColor = '#005ff7';
     }
 }
 function verEvolucaoBulbasaur(){
     if(evolutionBulbasaur.style.display === 'block') {
         evolutionBulbasaur.style.display = 'none';
         btnEvolucaoBulbasaur.innerHTML = 'Ver Detalhes';
         btnEvolucaoBulbasaur.style.backgroundColor = '#005ff7';
     } else {
         evolutionBulbasaur.style.display = 'block';
         evolutionPikachu.style.display = 'none';
         evolutionSquirtle.style.display = 'none';
         evolutionCharmander.style.display = 'none';

         btnEvolucaoBulbasaur.innerHTML = 'Ver Menos';
         btnEvolucaoBulbasaur.style.backgroundColor='#5c9bff';
         btnEvolucaoBulbasaur.style.borderColor='#5c9bff';

         btnEvolucaoPikachu.innerHTML = 'Ver Detalhes';
         btnEvolucaoPikachu.style.backgroundColor = '#005ff7';
         btnEvolucaoSquirtle.innerHTML = 'Ver Detalhes';
         btnEvolucaoSquirtle.style.backgroundColor = '#005ff7';
         btnEvolucaoCharmander.innerHTML = 'Ver Detalhes';
         btnEvolucaoCharmander.style.backgroundColor = '#005ff7';
     }
 }