import { comanda } from "./genprod.js";

document.querySelector('.table').innerHTML=`
<table>
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
  <tbody>
       <tr>
      <td>1</td> <td>Sistem</td><td>Cod</td><td>eticheta</td><td>Dimensiune</td><td>Buc</td><td>Cantitate</td><td>$Suprafata</td><td>Suprafata Totala</td><td>Flansa</td><td>Observatii</td><td><button class="quantity-increase css-quantity-increase js-quantity-increase">+</button> <button class="js-quantity-decrease quantity-decrease css-quantity-decrease">-</button></td><td><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid=>Sterge produs</button></td>
      </tr>
       <tr>
      <td>1</td> <td>Sistem</td><td>Cod</td><td>eticheta</td><td>Dimensiune</td><td>Buc</td><td>Cantitate</td><td>$Suprafata</td><td>Suprafata Totala</td><td>Flansa</td><td>Observatii</td><td><button class="quantity-increase css-quantity-increase js-quantity-increase">+</button> <button class="js-quantity-decrease quantity-decrease css-quantity-decrease">-</button></td><td><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid=>Sterge produs</button></td>
      </tr>
  </tbody>
</table>`