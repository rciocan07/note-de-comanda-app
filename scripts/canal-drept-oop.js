const order = {
   canaleDrepteItems : JSON.parse(localStorage.getItem('canaleDrepte-oop')) || [],
   accesoriiMontaj : JSON.parse(localStorage.getItem('accesoriiMontaj')) || [],


   produsul : {},

   addFunctionalityToPage(){
    this.renderItemId();
    this.renderCanaleDrepte();
    this.renderCanaleDrepteInput();
    this.stergeCantitate();
    this.cresteCantitate();
    this.scadeCantitate();
    this.stergeComanda();
   },


   renderCanaleDrepte(){
    let canaleDrepteHTML = '';
    this.renderItemId();
    this.canaleDrepteItems.forEach((produs)=>{

        canaleDrepteHTML+=`
        
        <tr>
      <td>${produs.id}</td> <td>${produs.sistem}</td><td>${produs.cod}</td><td>${produs.sistem}-${produs.cod}-${produs.id}</td><td>A=${produs.dimensiunea}, B=${produs.dimensiuneb}, L= ${produs.dimensiunel}</td><td>Buc</td><td>${produs.cantitate}</td><td>${produs.suprafata}</td><td>${produs.suprafataTotala}</td><td>${produs.flansa}</td><td>${produs.observatii}</td><td><button class="quantity-increase css-quantity-increase js-quantity-increase" data-productid="${Number(produs.id)}">+</button> <button class="js-quantity-decrease quantity-decrease css-quantity-decrease" data-productid="${Number(produs.id)}">-</button></td><td><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid="${Number(produs.id)}">Sterge produs</button></td>
      </tr>
      `
      
    })
    document.querySelector('.show-table').innerHTML=canaleDrepteHTML;

  },

  calculGrosime(){
    const grosime= document.querySelector('.js-dimensiunea').value>1000 || document.querySelector('.js-dimensiuneb').value > 1000 ? 1.0 : 0.8
    return (grosime)
   },
   calculSuprafata(){
    const suprafata = Math.max(0.1, Number((2*document.querySelector('.js-dimensiunea').value/1000+2*document.querySelector('.js-dimensiuneb').value/1000)*document.querySelector('.js-dimensiunel').value/1000).toFixed(2)) 
    return suprafata
   },

   resetForm() {
    requestAnimationFrame(function() {
      document.getElementById('inputform').reset();
    });
  },

  renderCanaleDrepteInput(){
    // document.querySelector('.add-item').addEventListener('click', ()=>{
      document.querySelector('.input-table').innerHTML=`
      
      
      <div class="css-sitem">Sistem: <input class="sistem css-sistem js-sistem css-inputfield"></div>
      <form id="inputform">
      Dimensiune A <input class="dimensiunea css-inputfield css-dimensiunea js-dimensiunea" type="number" min="0">
      Dimensiune B <input class="dimensiuneb css-inputfield css-dimensiuneb js-dimensiuneb" type="number" min="0">
      Dimensiune L <input class="dimensiunel css-inputfield css-dimensiunel js-dimensiunel" type="number" min="0">
      Cantitate: <input class="cantitate css-inputfield css-cantitate js-cantitate " type="number" onfocus="this.value" min="1" value="1">
      Flansa libera: <input class="flansaLibera css-inputfield css-flansa-libera js-flansa-libera" type="number" min="0" value="0">
      Observatii: <input class="observatii css-inputfield css-observatii js-observatii">
      <button type="button" class="add-to-list css-add-to-list js-add-to-list">Adauga</button>
      </form>
      `
      
      document.querySelector('.js-add-to-list').addEventListener('click', ()=>{
        
        this.produsul = {
          id : this.canaleDrepteItems.length,
        sistem : document.querySelector('.js-sistem').value,
        cod: "RTD",
        dimensiunea : document.querySelector('.js-dimensiunea').value,
        dimensiuneb : document.querySelector('.js-dimensiuneb').value,
        dimensiunel : document.querySelector('.js-dimensiunel').value,
        cantitate : document.querySelector('.js-cantitate').value,
        flansa: document.querySelector('.js-flansa-libera').value,
        observatii : document.querySelector('.js-observatii').value,
        suprafata: this.calculSuprafata(),
        suprafataTotala: this.calculSuprafata()*document.querySelector('.js-cantitate').value,
        conectare:"F30",
        grosime: this.calculGrosime(),
        piulitaSurubM10: document.querySelector('.js-cantitate').value*4,
        clipsuri: this.calculClipsuri(),
        silicon: this.calculSilicon(),
        piulitaExpandabilaM10: this.calculPiulitaExpandabila(),
        tijaFiletata: this.calculTijaFiletata(),
        profil4141: this.calculProfil4141(),
        }

        this.canaleDrepteItems.push(this.produsul);
        localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems))
        console.log(this.canaleDrepteItems);
       /* this.canaleDrepteItems.push({
        id : this.canaleDrepteItems.length,
        sistem : document.querySelector('.js-sistem').value,
        cod: "RTD",
        dimensiunea : document.querySelector('.js-dimensiunea').value,
        dimensiuneb : document.querySelector('.js-dimensiuneb').value,
        dimensiunel : document.querySelector('.js-dimensiunel').value,
        cantitate : document.querySelector('.js-cantitate').value,
        flansa: document.querySelector('.js-flansa-libera').value,
        observatii : document.querySelector('.js-observatii').value,
        suprafata: this.calculSuprafata(),
        suprafataTotala: this.calculSuprafata()*document.querySelector('.js-cantitate').value,
        conectare:"F30",
        grosime: this.calculGrosime(),
        });
        localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems));*/
    
        this.renderItemId();
        this.renderCanaleDrepte();
        this.stergeCantitate();
        this.cresteCantitate();
        this.scadeCantitate();
        this.resetForm();
        document.querySelector('.js-dimensiunea').focus();
      });
    },

    calculClipsuri(){
      let clipsuri = 0;
     clipsuri= (((Number(document.querySelector('.js-dimensiunea').value) + Number(document.querySelector('.js-dimensiuneb').value))*2)*document.querySelector('.js-cantitate').value)/200
     return clipsuri;
    },

    calculSilicon(){
      let silicon = 0;
     silicon = (((Number(document.querySelector('.js-dimensiunea').value) + Number(document.querySelector('.js-dimensiuneb').value))*2*document.querySelector('.js-cantitate').value)/1000/14).toFixed(2)
     return silicon;

    },

    calculPiulitaExpandabila(){
      let piulitaExpandabila = 0;
      piulitaExpandabila = (document.querySelector('.js-dimensiunel').value*document.querySelector('.js-cantitate').value*2/1500).toFixed(1);
      return piulitaExpandabila;
    },

    calculTijaFiletata(){
      let tijaFiletata = 0;
      tijaFiletata = (document.querySelector('.js-dimensiuneb').value/1000+0.5)*this.calculPiulitaExpandabila()
      return tijaFiletata
    },

    calculProfil4141(){
      let profil4141 = 0;
      profil4141 = ((document.querySelector('.js-dimensiunea').value/1000+0.1)*(this.calculPiulitaExpandabila()/2)).toFixed(2)
      return profil4141
    },

    addMinusQuantityButton(){
      document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.js-delete-order').addEventListener('click', ()=>{
          this.canaleDrepteItems=[];
          localStorage.removeItem('canaleDrepte-oop');
          this.renderCanaleDrepte();
        })
    })
     } ,
    

    renderItemId(){
        let i=1;
        this.canaleDrepteItems.forEach((item)=>{
          item.id=i;
          i++
        })
      },

   stergeCantitate (){
      document.querySelectorAll('.js-quantity-delete').forEach((item)=>{
        item.addEventListener('click', ()=>{
              
        this.canaleDrepteItems.splice(item.dataset.productid-1, 1);
          localStorage.removeItem('canaleDrepte-oop');
          this.renderItemId();
          localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems));
          this.renderCanaleDrepte();
          this.stergeCantitate();
              
         })
          });
        },


   cresteCantitate (){
          document.querySelectorAll('.js-quantity-increase').forEach((item)=>{
            item.addEventListener('click', ()=>{
              
              this.canaleDrepteItems.forEach((entity)=>{
                if (Number(item.dataset.productid) === Number(entity.id)){
                  entity.cantitate++;
                  entity.suprafataTotala= Number(entity.cantitate * entity.suprafata).toFixed(2);
                }else (console.log('not working'));
              })
              this.renderItemId();
              localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems));
              this.renderCanaleDrepte();
              this.stergeCantitate();
              this.cresteCantitate();
              this.scadeCantitate();
              this.calculGrosime();
              
            })
            });
        } ,   
    scadeCantitate (){
        document.querySelectorAll('.js-quantity-decrease').forEach((item)=>{
          item.addEventListener('click', ()=>{
              
            this.canaleDrepteItems.forEach((entity)=>{
                if (Number(item.dataset.productid) === Number(entity.id) && entity.cantitate>0 ){
                  entity.cantitate--;
                  entity.suprafataTotala= (entity.cantitate * entity.suprafata).toFixed(2);
                }else (console.log('not working'));
              })
              this.renderItemId();

              localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems));
              this.renderCanaleDrepte();
              this.stergeCantitate();
              this.cresteCantitate();
              this.scadeCantitate();
              
            })
            });
        },

  stergeComanda (){document.querySelector('.js-delete-order').addEventListener('click', ()=>{
          this.canaleDrepteItems=[];
          localStorage.removeItem('canaleDrepte-oop');
          this.renderCanaleDrepte();
        });},
};



order.addFunctionalityToPage();
export const test = order;


document.querySelector('.js-homebutton').addEventListener('click',()=>{window.open('../dashboard.html', "_self")})

