//export let comanda = JSON.parse(localStorage.getItem('comanda')) || []

export class Comanda {
   constructor(localStorageKeyName){
    localStorage.setItem(localStorageKeyName, '')
    
   }
    
    comanda = JSON.parse(localStorage.getItem(`${this.localStorageKey}`)) || []

    adaugaLaComanda(param){
        this.comanda.push(param)
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.comanda))
    }

    salveazaLocal(){
        
    }

}