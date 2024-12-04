let contentToPrint = JSON.parse(localStorage.getItem('canaleDrepteToPrint'));

document.querySelector('.toprint').innerHTML = contentToPrint;

/*document.querySelector('.js-print').addEventListener('click', ()=>{
  window.print();
})
*/
function print(){
  window.print();
}

print();