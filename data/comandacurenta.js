//export let comanda = JSON.parse(localStorage.getItem('comanda')) || []
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
    
   

    adaugaLaComanda(param){
        this.comanda.push(param)
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
    }

    stergeComanda(){
        localStorage.removeItem(this.localStorageKey)
        this.comanda = [];
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