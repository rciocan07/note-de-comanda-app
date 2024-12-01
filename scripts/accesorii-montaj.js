const accesoriiMontaj = {
    produse: JSON.parse(localStorage.getItem('canaleDrepte-oop')),
    accMontaj: [],

    log(){
        console.log(this.produse);
    },

    generareMaterialeMontaj(){
        this.produse.forEach((produs) => {
            const clipsuri = this.calculClipsuri(produs);
            const silicon = this.calculSilicon(produs);
            const piulitaExpandabila = this.calculPiulitaExpandabila(produs);
            const tijaFiletata = this.calculTijaFiletata(produs);
            const profil4141 = this.calculProfil4141(produs);

            this.accMontaj.push(
                {
                    clipsuri,
                    silicon,
                    piulitaExpandabila,
                    tijaFiletata,
                    profil4141
                }
            )
            console.log(this.accMontaj);
            /*this.accMonTotale.push(
                {
                    clipsuri: this.calculClipsuri(this.element),
                    silicon: this.calculSilicon(this.element),
                    piulitaExpandabila: this.calculPiulitaExpandabila(this.element),
                    tijaFiletata: this.calculTijaFiletata(this.element),
                    profil4141: this.calculProfil4141(this.element)
                }*/}
            )
        },

    calculClipsuri(entity){
        let clipsuri = 0;
        clipsuri = (((entity.dimensiunea + entity.dimensiuneb)*2)*entity.cantitate)/200;
       return clipsuri;
      },
    
    calculSilicon(entity){
        let silicon = 0;
        silicon= (((entity.dimensiunea+entity.dimensiuneb)*2*entity.cantitate)/1000/14).toFixed(2);
       return silicon;
      },
    
    calculPiulitaExpandabila(entity){
        let piulitaExpandabila = 0;
        piulitaExpandabila = (entity.dimensiunea*entity.cantitate*2/1500).toFixed(1);
        return piulitaExpandabila;
      },

    calculTijaFiletata(entity){
        let tijaFiletata = 0;
        tijaFiletata = ((entity.dimensiunea/1000).toFixed(2)+0.5)*this.calculPiulitaExpandabila(entity);
        return tijaFiletata;
      },
    
    calculProfil4141(entity){
        let profil4141 = 0;
        profil4141 = (((entity.dimensiunea/1000).toFixed(2)+0.1)*(this.calculPiulitaExpandabila(entity)/2)).toFixed(2);
        return profil4141
      },

}

accesoriiMontaj.log();
accesoriiMontaj.generareMaterialeMontaj();