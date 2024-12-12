
import { dimParticulare, produseBrute } from "../data/produse.js"


dimParticulare.forEach((produs)=>{
  document.querySelector('.butoane-piese').innerHTML+=`
  <button class="js-button ${produs.cod}" data-cod=${produs.cod}>${produs.nume}</button>
  `
  
})

document.querySelectorAll('.js-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    dimParticulare.forEach((produs)=>{
      if(produs.cod === button.dataset.cod){
        document.querySelector('.dimensions').innerHTML= '';
        for (let dimensiune in produs.dimensiuni){
          
          document.querySelector('.dimensions').innerHTML+= `${produs.dimensiuni[dimensiune]}<input type="number" min="0" placeholder="${produs.dimensiuni[dimensiune]}"></input>`;
        }

      }
  })
})})

/*
dimParticulare.forEach((produs)=>{
  let inputHtml='';
  document.querySelector(`.${produs.cod}`).addEventListener('click',()=>{
    for (let property in produs.dimensiuni ){
      inputHtml +=`${produs.dimensiuni[property]} <button class="${property}" >Test</button>`
      console.log(inputHtml)
      document.querySelector(`${dimParticulare.cod}`).addEventListener('click',()=>{
      document.querySelector(".dimensions").innerHTML=inputHtml;
      console.log(inputHtml)
      })
    }
  })
})
  */