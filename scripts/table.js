import { comanda } from "./genprod.js";

document.querySelector('.table').innerHTML=`
<div class="area"><table>
  <th>
      <tr>
       <th scope="col">ID</th>
          <th scope="col">Sistem</th>
          <th scope="col">Cod</th>
          <th scope="col">Eticheta</th>
          <th scope="col">Dimensiuni</th>
          <th scope="col">UM</th>
          <th scope="col">Cantitate</th>
          <th scope="col">Suprafata</th>
          <th scope="col">Suprafata totala</th>
          <th scope="col">Flansa Libera</th>
          <th scope="col">Observatii</th>
          <th scope="col">Modifica cantitate</th>
          <th scope="col">Stergere</th>
      </tr>
  </th>
  <tbody class="tdata">
  </tbody>
</table></div>`


export function renderTable(){
  let tableInput = JSON.parse(localStorage.getItem('test2')) // to fix later!
  let tableHTML='';
  let counter=1
  if(tableInput){
  
tableInput.forEach(element => {
  tableHTML+=` <tr>
      <td>${counter}</td> <td>${element.sistem}</td><td>${element.cod}</td><td>eticheta</td><td>Dimensiune</td><td>Buc</td><td>${element.cantitate}</td><td>${element.suprafata}</td><td>${element.suprafata}</td><td>${element.flansa}</td><td>${element.observatii}</td><td><button class="quantity-increase css-quantity-increase js-quantity-increase" data-productid="${element.id}">+</button> <button class="js-quantity-decrease quantity-decrease css-quantity-decrease" data-productid="${element.id}">-</button></td><td><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid="${element.id}">Sterge produs</button></td>
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


}

renderTable()