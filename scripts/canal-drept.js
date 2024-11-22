let canaleDrepte = JSON.parse(localStorage.getItem('canaleDrepte')) || [];
console.log(canaleDrepte);
let counter = [];

function renderCanaleDrepte (){
  let canaleDrepteHTML = '';
  canaleDrepte.forEach((produs)=>{
    
    canaleDrepteHTML+=`
    <br> ID: ${produs.id} Sistem: ${produs.sistem} Cod: ${produs.cod} Eticheta: ${produs.sistem}-${produs.cod}- Eticheta dimensiuni: A=${produs.dimensiunea}, B=${produs.dimensiuneb}, L= ${produs.dimensiunel}, UM: Buc, Cant: ${produs.cantitate} Suprafata Unitara: ${Number(produs.dimensiunea*produs.dimensiuneb*produs.dimensiunel)}, Suprafata Totala(m2): ${Number(produs.dimensiunea*produs.dimensiuneb*produs.dimensiunel)*produs.cantitate}, Observatii: ${produs.observatii} <button class="quantity-update css-quantity-update js-quantity-update" data-productid="${Number(produs.id)}">Modifica Cantitate</button> <button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid="${Number(produs.id)}">Sterge Cantitate</button>
    `
  })
  document.querySelector('.show-table').innerHTML=canaleDrepteHTML;

}

renderCanaleDrepte();
stergeCantitate();

let produs = {};

document.querySelector('.add-item').addEventListener('click', ()=>{
  document.querySelector('.input-table').innerHTML=`
  
  Sistem: <input class="sistem css-sistem js-sistem">
  Cod: <p class="cod css-cod js-cod">RTD</p>
  Dimensiune A <input class="dimensiunea css-dimensiunea js-dimensiunea">
  Dimensiune B <input class="dimensiuneb css-dimensiuneb js-dimensiuneb">
  Dimensiune L <input class="dimensiunel css-dimensiunel js-dimensiunel">
  Cantitate: <input class="cantitate css-cantitate js-cantitate">
  Observatii: <input class="observatii css-observatii js-observatii">
  <button class="add-to-list css-add-to-list js-add-to-list">Adauga</button>
  `
  
  document.querySelector('.js-add-to-list').addEventListener('click', ()=>{
    
   
    canaleDrepte.push({
    id : canaleDrepte.length,
    sistem : document.querySelector('.js-sistem').value,
    cod: "RTD",
    dimensiunea : document.querySelector('.js-dimensiunea').value,
    dimensiuneb : document.querySelector('.js-dimensiuneb').value,
    dimensiunel : document.querySelector('.js-dimensiunel').value,
    cantitate : document.querySelector('.js-cantitate').value,
    observatii : document.querySelector('.js-observatii').value,
    });
    localStorage.setItem('canaleDrepte', JSON.stringify(canaleDrepte));

    


    renderCanaleDrepte();
    stergeCantitate();
  
  });

});


document.querySelector('.js-delete-order').addEventListener('click', ()=>{
  canaleDrepte=[];
  localStorage.removeItem('canaleDrepte');
  renderCanaleDrepte();
});


function modificaCantitate(){
document.querySelectorAll('.js-quantity-update').forEach((item)=>{
item.addEventListener('click', ()=>{
  let spliceCount = item.dataset.productid;
  canaleDrepte.splice(item.dataset.productid, 1);
  alert('test');
  const test = item.dataset.productid;
  console.log(test);
  renderCanaleDrepte();
  modificaCantitate();
})
});
}


function stergeCantitate (){
  document.querySelectorAll('.js-quantity-delete').forEach((item)=>{
    item.addEventListener('click', ()=>{
      
      canaleDrepte.splice(item.dataset.productid, 1);
      localStorage.removeItem('canaleDrepte');
      localStorage.setItem('canaleDrepte', JSON.stringify(canaleDrepte));
      renderCanaleDrepte();
      stergeCantitate();
      
    })
    });
}