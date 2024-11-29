let order = JSON.parse(localStorage.getItem('canaleDrepte-oop'));


console.log(order)
function renderItemId(){
  let i=1;
  order.forEach((item)=>{
    item.id=i;
    i++
  })
  localStorage.setItem('canaleDrepte-oop', JSON.stringify(order));
}
function renderTableContent(){
  let tableContentHTML= "";
  renderItemId();
  order.forEach((item)=>{
    tableContentHTML+=`
    <tr>
                  <th scope="row">ID:${item.id}</th>
                  <td>Cod:${item.cod}</td>
                  <td>Cantitate:${item.cantitate}</td>
                </tr>
    `
    })
return tableContentHTML;
}


let tableContent = renderTableContent();
document.querySelector('.js-tablecontent').innerHTML= tableContent
