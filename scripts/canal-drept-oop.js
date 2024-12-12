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
    let canaleDreptToPrint = '';
    this.renderItemId();
    this.canaleDrepteItems.forEach((produs)=>{

        canaleDrepteHTML+=`
        
        <tr>
      <td>${produs.id}</td> <td>${produs.sistem}</td><td>${produs.cod}</td><td>${produs.sistem}-${produs.cod}-${produs.id}</td><td>A=${produs.dimensiunea}, B=${produs.dimensiuneb}, L= ${produs.dimensiunel}</td><td>Buc</td><td>${produs.cantitate}</td><td>${produs.suprafata}</td><td>${produs.suprafataTotala}</td><td>${produs.flansa}</td><td>${produs.observatii}</td><td><button class="quantity-increase css-quantity-increase js-quantity-increase" data-productid="${Number(produs.id)}">+</button> <button class="js-quantity-decrease quantity-decrease css-quantity-decrease" data-productid="${Number(produs.id)}">-</button></td><td><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid="${Number(produs.id)}">Sterge produs</button></td>
      </tr>
      `
      canaleDreptToPrint+=`<tr><td>${produs.id}</td> <td>${produs.sistem}</td><td>${produs.cod}</td><td>${produs.sistem}-${produs.cod}-${produs.id}</td><td>A=${produs.dimensiunea}, B=${produs.dimensiuneb}, L= ${produs.dimensiunel}</td><td>Buc</td><td>${produs.cantitate}</td><td>${produs.suprafata}</td><td>${produs.suprafataTotala}</td><td>${produs.flansa}</td><td>${produs.observatii}</td></tr>`
    }
  )
    document.querySelector('.show-table').innerHTML=canaleDrepteHTML;
    localStorage.setItem('canaleDrepteToPrint', JSON.stringify(canaleDreptToPrint));
    
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
     
      document.querySelector('.input-table').innerHTML=`
      
      
      <div class="css-sitem">Sistem: <input class="sistem css-sistem js-sistem css-inputfield"></div>
      <form id="inputform">
      Dimensiune A <input required class="dimensiunea css-inputfield css-dimensiunea js-dimensiunea" type="number" min="0">
      Dimensiune B <input required class="dimensiuneb css-inputfield css-dimensiuneb js-dimensiuneb" type="number" min="0">
      Dimensiune L <input required class="dimensiunel css-inputfield css-dimensiunel js-dimensiunel" type="number" min="0">
      Cantitate: <input class="cantitate css-inputfield css-cantitate js-cantitate " type="number" onfocus="this.value" min="1" value="1">
      Flansa libera: <input class="flansaLibera css-inputfield css-flansa-libera js-flansa-libera" type="number" min="0" value="0">
      Observatii: <input class="observatii css-inputfield css-observatii js-observatii"></form>
      <button type="submit" class="add-to-list css-add-to-list js-add-to-list">Adauga</button>
      
      `
     
      document.querySelector('.js-add-to-list').addEventListener('click', ()=>{

        if(document.querySelector('.js-dimensiunea').value != "" && document.querySelector('.js-dimensiuneb').value != 0 && document.querySelector('.js-dimensiunel').value != 0){

        
        
        this.produsul = {
          id : this.canaleDrepteItems.length,
        sistem : document.querySelector('.js-sistem').value,
        cod: "RTD",
        dimensiunea : Number(document.querySelector('.js-dimensiunea').value),
        dimensiuneb : Number(document.querySelector('.js-dimensiuneb').value),
        dimensiunel : Number(document.querySelector('.js-dimensiunel').value),
        cantitate : Number(document.querySelector('.js-cantitate').value),
        flansa: Number(document.querySelector('.js-flansa-libera').value),
        observatii : document.querySelector('.js-observatii').value,
        suprafata: this.calculSuprafata(),
        suprafataTotala: this.calculSuprafata()*document.querySelector('.js-cantitate').value,
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
        document.querySelector('.js-dimensiunea').focus();}
        else {alert('Te rugam sa completezi toate dimensiunile canalului')}
      });
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

document.querySelector('.js-homebutton').addEventListener('click',()=>{window.open('./index.html', "_self")});

document.querySelector('.print').addEventListener('click', ()=>{
  window.open('./toprint.html')
})