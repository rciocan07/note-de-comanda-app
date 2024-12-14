//export let comanda = JSON.parse(localStorage.getItem('comanda')) || []

export class Comanda {
     localStorageKey;
     comanda = []
   constructor(localStorageKeyName){
    localStorage.setItem(localStorageKeyName, '')
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