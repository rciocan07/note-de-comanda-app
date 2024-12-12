
import { dimParticulare, produseBrute } from "../data/produse.js"
import { Comanda } from "../data/comandacurenta.js"

const comanda = new Comanda('test2')

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
          document.querySelector('.cod').innerHTML= produs.cod
          document.querySelector('.dimensions').innerHTML+= `${produs.dimensiuni[dimensiune]}<input class="et-dim ${dimensiune}"type="number" min="0" placeholder="${produs.dimensiuni[dimensiune]}"></input>`;
        }

      }
  })
})})


document.querySelector('.add-button').addEventListener('click',()=>{
  dimParticulare.forEach((tip)=>{
    
    if(tip.cod === document.querySelector('.cod').innerHTML){
      
      const deAdaugat = {
        sistem: document.querySelector('.sistem').value,
        suprafata: tip.suprafata(document.querySelector('.dimensiunea'), document.querySelector('.dimensiuneb'), document.querySelector('.dimensiunec'))
      }

      comanda.adaugaLaComanda(deAdaugat);

    }else{console.log(`not working`)}
  })
 
  console.log(comanda.comanda)
})
