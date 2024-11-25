let canaleDrepte = JSON.parse(localStorage.getItem('canaleDrepte')) || [];
console.log(canaleDrepte);
let counter = [];

function renderCanaleDrepte (){
  let canaleDrepteHTML = '';
  renderItemId();
  canaleDrepte.forEach((produs)=>{
    
    canaleDrepteHTML+=`
    <div class="css-item"><br> ID: ${produs.id} Sistem: ${produs.sistem} Cod: ${produs.cod} Eticheta: ${produs.sistem}-${produs.cod}- Eticheta dimensiuni: A=${produs.dimensiunea}, B=${produs.dimensiuneb}, L= ${produs.dimensiunel}, UM: Buc, Cant: ${produs.cantitate} Suprafata Unitara: ${Number(produs.dimensiunea*produs.dimensiuneb*produs.dimensiunel/1000000).toFixed(2)}, Suprafata Totala(m2): ${Number((produs.dimensiunea*produs.dimensiuneb*produs.dimensiunel)*produs.cantitate/1000000).toFixed(2)}, Observatii: ${produs.observatii} <button class="quantity-increase css-quantity-increase js-quantity-increase" data-productid="${Number(produs.id)}">+</button> <button class="js-quantity-decrease quantity-decrease css-quantity-decrease" data-productid="${Number(produs.id)}">-</button><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid="${Number(produs.id)}">Sterge produs</button></div> 
    `
  })
  document.querySelector('.show-table').innerHTML=canaleDrepteHTML;

}

renderCanaleDrepte();
stergeCantitate();
cresteCantitate();
scadeCantitate();

let produs = {};

document.querySelector('.add-item').addEventListener('click', ()=>{
  document.querySelector('.input-table').innerHTML=`
  
  Sistem: <input class="sistem css-sistem js-sistem">
  Cod: <p class="cod css-cod js-cod">RTD</p>
  Dimensiune A <input class="dimensiunea css-dimensiunea js-dimensiunea" type="number" min="0">
  Dimensiune B <input class="dimensiuneb css-dimensiuneb js-dimensiuneb" type="number" min="0">
  Dimensiune L <input class="dimensiunel css-dimensiunel js-dimensiunel" type="number" min="0">
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

    

    renderItemId();
    renderCanaleDrepte();
    stergeCantitate();
    cresteCantitate();
    scadeCantitate();
  
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
      
      canaleDrepte.splice(item.dataset.productid-1, 1);
      localStorage.removeItem('canaleDrepte');
      renderItemId();
      localStorage.setItem('canaleDrepte', JSON.stringify(canaleDrepte));
      renderCanaleDrepte();
      stergeCantitate();
      
    })
    });
}

function renderItemId(){
  let i=1;
  canaleDrepte.forEach((item)=>{
    item.id=i;
    i++
  })
}

function cresteCantitate (){
  document.querySelectorAll('.js-quantity-increase').forEach((item)=>{
    item.addEventListener('click', ()=>{
      
      canaleDrepte.forEach((entity)=>{
        if (Number(item.dataset.productid) === Number(entity.id)){
          entity.cantitate++;
        }else (console.log('not working'));
      })
      localStorage.removeItem('canaleDrepte');
      renderItemId();
      localStorage.setItem('canaleDrepte', JSON.stringify(canaleDrepte));
      renderCanaleDrepte();
      stergeCantitate();
      cresteCantitate();
      scadeCantitate();
    })
    });
}

function scadeCantitate (){
  document.querySelectorAll('.js-quantity-decrease').forEach((item)=>{
    item.addEventListener('click', ()=>{
      
      canaleDrepte.forEach((entity)=>{
        if (Number(item.dataset.productid) === Number(entity.id) && entity.cantitate>0 ){
          entity.cantitate--;
        }else (console.log('not working'));
      })
      localStorage.removeItem('canaleDrepte');
      renderItemId();
      localStorage.setItem('canaleDrepte', JSON.stringify(canaleDrepte));
      renderCanaleDrepte();
      stergeCantitate();
      cresteCantitate();
      scadeCantitate();
      
      
    })
    });
}


function adaugaCanalDrept(){
 
}