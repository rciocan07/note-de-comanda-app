
import { dimParticulare, produseBrute } from "../data/produse.js"
import { Comanda } from "../data/comandacurenta.js"


export const comanda = new Comanda('test2')

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
          document.querySelector('.dimensions').innerHTML+= `${produs.dimensiuni[dimensiune]}<input class="css-et-dim et-dim ${dimensiune}"type="number" min="0" placeholder="${produs.dimensiuni[dimensiune]}"></input>`;
        }

      }
  })
})})

function creareDim(){
  let dimList={}
  let i=1;
  document.querySelectorAll('.et-dim').forEach((dimensiune)=>{
    const dimensiuneName= `dimensiune${i}`;
    const dimToPush = dimensiune.value;
    i++;
    dimList[dimensiuneName]=dimToPush
  })
  return dimList
}

function calculSuprafata(){
  let dimToParse=[]
  let suprafata;
  document.querySelectorAll('.et-dim').forEach((dimensiune)=>{
    dimToParse.push(Number(dimensiune.value))
    }
  )
    console.log(dimToParse)
  dimParticulare.forEach((tip)=>{
    if (tip.cod === document.querySelector('.cod').innerHTML){
      suprafata = tip.suprafata(dimToParse)
    }
  })
  return suprafata
}
document.querySelector('.add-button').addEventListener('click',()=>{
 
  dimParticulare.forEach((tip)=>{
    
    if(tip.cod === document.querySelector('.cod').innerHTML){
      
      const deAdaugat = {
        id: Math.random(),
        sistem: document.querySelector('.sistem').value,
        cod: tip.cod,
        dimensiuni: creareDim(),
        suprafata: calculSuprafata(),
        cantitate: document.querySelector('.cantitate').value
      }
      comanda.adaugaLaComanda(deAdaugat);

    }else{console.log(`not working`)}
  })
  console.log(comanda.comanda)
})

document.querySelector('.delete-button').addEventListener('click', ()=>{
  comanda.stergeComanda()
  console.log(comanda.comanda)
})