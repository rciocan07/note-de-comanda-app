
import { dimParticulare, rcCorect } from "../data/produse.js"
import { Comanda } from "../data/comandacurenta.js"

export let content;
export const comanda = new Comanda('test2')

dimParticulare.forEach((produs)=>{
  document.querySelector('.butoane-piese').innerHTML+=`
  <button class="js-button ${produs.cod}" data-cod=${produs.cod}>${produs.nume}</button>
  `
  
})

document.querySelectorAll('.js-button').forEach((button)=>{
  
  button.addEventListener('click',()=>{
    let i=1;
    dimParticulare.forEach((produs)=>{
      if(produs.cod === button.dataset.cod){
        document.querySelector('.dimensions').innerHTML= '';
        for (let dimensiune in produs.dimensiuni){
          document.querySelector('.cod').innerHTML= produs.cod
          document.querySelector('.dimensions').innerHTML+= `<input class="css-et-dim add focus${i} input-field et-dim ${dimensiune}" data-eticheta="${produs.dimensiuni[dimensiune]}"type="number" min="0" placeholder="${produs.dimensiuni[dimensiune]}"></input>`;
          i++
        }
        i=1
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

function creareEtDim(){
  let dimList=''
  document.querySelectorAll('.et-dim').forEach((dimensiune)=>{
    dimList+=`${dimensiune.dataset.eticheta}=${dimensiune.value} `
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
  return suprafata>0.1? suprafata:0.1
}

document.querySelector('.add-button').addEventListener('click',()=>{
 
  dimParticulare.forEach((tip)=>{
    
    if(tip.cod === document.querySelector('.cod').innerHTML){
      let codRC = tip.cod
      if (tip.cod === "DRC"){
        let dimToParseloc=[]
        document.querySelectorAll('.et-dim').forEach(dimensiune=>{
          dimToParseloc.push(Number(dimensiune.value))
          })
        codRC = rcCorect(dimToParseloc)
        
      }
      const deAdaugat = {
        id: Math.random(),
        sistem: document.querySelector('.sistem').value,
        cod: codRC,
        dimensiuni: creareDim(),
        suprafata: calculSuprafata(),
        cantitate: document.querySelector('.cantitate').value,
        flansa: document.querySelector('.flansa').value,
        observatii: document.querySelector('.observatii').innerText,
        etichetaDim: creareEtDim()
      }
      comanda.adaugaLaComanda(deAdaugat);
      document.querySelector('.focus1').focus()
      
    }
  })
  document.querySelector('.form').reset()
})

document.querySelector('.delete-button').addEventListener('click', ()=>{
  comanda.stergeComanda()
  console.log(comanda.comanda)
})

