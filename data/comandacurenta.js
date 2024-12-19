//export let comanda = JSON.parse(localStorage.getItem('comanda')) || []
import { renderTable } from "../scripts/table.js"


let comandaInstance = null;
export class Comanda {
     localStorageKey;
     comanda = []
   constructor(localStorageKeyName, name){
        if (comandaInstance){
            return comandaInstance // return the existing instance
        }
    this.name = name
    comandaInstance = this;
    this.localStorageKey=localStorageKeyName
    this.comanda = localStorage.getItem(this.localStorageKey) ?  JSON.parse(localStorage.getItem(this.localStorageKey)) : [];
   }
    
   stergeProdus(param){
    this.comanda.forEach(element=>{
        if(element.id === param){
            this.comanda.splice(this.comanda.indexOf(element), 1);
            localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
            }
        })
    }

    cresteCantitate(param){
        this.comanda.forEach(element=>{
            if(element.id === param){
                element.cantitate++
                localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
            }
        })
    }

    cresteflansa(param){
        this.comanda.forEach(element=>{
            if(element.id === param){
                element.flansa++
                localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
            }
        })
    }

    scadeFlansa(param){
        this.comanda.forEach(element=>{
            if(element.id === param && element.flansa>=1){
                element.flansa--
                localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
            }
        })
    }

    scadeCantitate(param){
        this.comanda.forEach(element=>{
            if(element.id === param && element.cantitate>1){
                element.cantitate--
                localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
            }else {}
                
            }
        )
    }

    adaugaLaComanda(param){
        this.comanda.push(param)
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
        renderTable()
    }

    stergeComanda(){
        localStorage.removeItem(this.localStorageKey)
        this.comanda = [];
        renderTable()
    }

}

/*
export class Comanda {
    constructor(name) {
      if (comandaInstance) {
        return comandaInstance; // Return the existing instance
      }
      this.name = name;
      comandaInstance = this; // Save the instance for future access
    }
  }*/