document.querySelector('.print').addEventListener('click', ()=>{
  
 function renderPrintTable(){
    let tableInput = JSON.parse(localStorage.getItem('test2')) // to fix later!
    let tableHTML='';
    let counter=1
    if(tableInput){
    
  tableInput.forEach(element => {
    tableHTML+=` <tr>
        <td>${counter}</td> 
        <td>${element.sistem}</td>
        <td>${element.cod}</td>
        <td>${element.sistem}-${element.cod}-${counter}</td>
        <td>${element.etichetaDim}</td><td>Buc</td>
        <td>${element.cantitate}</td>
        <td>${element.suprafata}</td>
        <td>${element.flansa}</td>
        <td>${element.observatii}</td>
        </tr>`
        counter++
  
  });
      }else {tableHTML=''}
  
  return tableHTML
  }
  let contentToPrint = renderPrintTable()
  const newWindow = window.open("", "_blank");
  const content = `
<!DOCTYPE html>
<html>
  <head>
    <title>table</title>
  <link rel="stylesheet" href="./css/genprod.css">
  
  </head>
    <body>
      <div class="table table-scrollable">

      <table>
  <thead>
      <tr>
       <th scope="col">ID</th>
          <th scope="col">Sistem</th>
          <th scope="col">Cod</th>
          <th scope="col">Eticheta</th>
          <th scope="col">Dimensiuni</th>
          <th scope="col">UM</th>
          <th scope="col">Cant.</th>
          <th scope="col">S</th>
          <th scope="col">FL</th>
          <th scope="col">Obs</th>
      </tr>
  </thead>
  <tbody class="tdata">${contentToPrint}
  </tbody>

  <script>setTimeout(window.print(), 2000)</script>
</body>
</html>`





  newWindow.document.open();
  newWindow.document.write(content);
  
})

console.log(localStorage.getItem('test2'))


`
<!DOCTYPE html>
<html>
  <head>
    <title>table</title>
  <link rel="stylesheet" href="./css/genprod.css">
  
  </head>
    <body>
      <div class="table table-scrollable">

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
      </tr>
  </thead>
  <tbody class="tdata">${contentToPrint}
  </tbody>
</table>
      </div>
      
    </body>
  </head>
</html>`