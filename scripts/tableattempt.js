
import { dimParticulare, produseBrute } from "../data/produse.js"


dimParticulare.forEach((produs)=>{
  document.querySelector('.butoane-piese').innerHTML+=`
  <button class=${produs.cod}>${produs.nume}</button>
  `
})

function test(){
  let inputHtml='';
  for(let property in dimParticulare.dimensiuni){
    inputHtml +=`${dimParticulare.dimensiuni[property]} <button class="${property}" >Test</button>`

    console.log(inputHtml)
  }}

  test()

  document.querySelector(`.${dimParticulare.cod}`).addEventListener('click',()=>{
    document.querySelector('.dimensions').innerHTML=inputHtml;
    })