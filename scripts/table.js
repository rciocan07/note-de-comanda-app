import { comanda } from "./genprod.js";

document.querySelector('.table').innerHTML=`
<table>
  <thead>
      <tr>
       <th scope="col">ID</th>
          <th scope="col">Sistem</th>
          <th scope="col">Cod</th>
          <th scope="col">Eticheta</th>
          <th scope="col">Dimensiuni</th>
          <th scope="col">UM</th>
          <th scope="col">Cantitate</th>
          <th scope="col">Suprafata</th>
          <th scope="col">Flansa Libera</th>
          <th scope="col">Observatii</th>
          <th scope="col">Stergere</th>
      </tr>
  </thead>
  <tbody class="tdata">
  </tbody>
</table>`


export function renderTable(){
  let tableInput = JSON.parse(localStorage.getItem('test2')) // to fix later!
  let tableHTML='';
  let counter=1
  if(tableInput){
  
tableInput.forEach(element => {
  tableHTML+=` <tr>
      <td>${counter}</td> <td>${element.sistem}</td><td>${element.cod}</td><td>${element.sistem}-${element.cod}-${counter}</td><td>${element.etichetaDim}</td><td>Buc</td>
      <td><button class="quantity-increase css-quantity-increase js-quantity-increase" data-productid="${element.id}">+</button>${element.cantitate}<button class="js-quantity-decrease quantity-decrease css-quantity-decrease" data-productid="${element.id}">-</button></td>
      <td>${element.suprafata}</td>
      <td><button class="js-flansa-increase" data-productid="${element.id}">+</button>${element.flansa}<button class="js-flansa-decrease" data-productid="${element.id}">-</button></td>
      <td>${element.observatii}</td><td><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid="${element.id}">Sterge produs</button></td>
      </tr>`
      counter++

});
    }else {tableHTML=''}

document.querySelector('.tdata').innerHTML=tableHTML

document.querySelectorAll(".js-quantity-delete").forEach((button) =>{
  button.addEventListener('click', ()=>{
    comanda.stergeProdus(Number(button.dataset.productid))
    renderTable()
    console.log('sters')
  })
})

document.querySelectorAll(".js-quantity-increase").forEach((button) =>{
  button.addEventListener('click', ()=>{
    comanda.cresteCantitate(Number(button.dataset.productid))
    renderTable()
    console.log('adaugat 1')
  })
})

document.querySelectorAll(".js-quantity-decrease").forEach((button) =>{
  button.addEventListener('click', ()=>{
    comanda.scadeCantitate(Number(button.dataset.productid))
    renderTable()
    console.log('scazut 1')
  })
})

document.querySelectorAll(".js-flansa-increase").forEach((button) =>{
  button.addEventListener('click', ()=>{
    comanda.cresteflansa(Number(button.dataset.productid))
    renderTable()
    console.log('flansa+1')
  })
})

document.querySelectorAll(".js-flansa-decrease").forEach((button) =>{
  button.addEventListener('click', ()=>{
    comanda.scadeFlansa(Number(button.dataset.productid))
    renderTable()
    console.log('flansa-1')
  })
})

}

renderTable()