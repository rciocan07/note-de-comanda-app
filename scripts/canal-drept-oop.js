const order = {
   canaleDrepteItems : JSON.parse(localStorage.getItem('canaleDrepte-oop')) || [],

   counter : [],

   produs : {},

   renderCanaleDrepte(){
    let canaleDrepteHTML = '';
    this.renderItemId();
    this.canaleDrepteItems.forEach((produs)=>{
      
      canaleDrepteHTML+=`
      <div class="css-item"><br> ID: ${produs.id} Sistem: ${produs.sistem} Cod: ${produs.cod} Eticheta: ${produs.sistem}-${produs.cod}- Eticheta dimensiuni: A=${produs.dimensiunea}, B=${produs.dimensiuneb}, L= ${produs.dimensiunel}, UM: Buc, Cant: ${produs.cantitate} Suprafata Unitara: ${Number(produs.dimensiunea*produs.dimensiuneb*produs.dimensiunel/1000000).toFixed(2)}, Suprafata Totala(m2): ${Number((produs.dimensiunea*produs.dimensiuneb*produs.dimensiunel)*produs.cantitate/1000000).toFixed(2)}, Observatii: ${produs.observatii} <button class="quantity-increase css-quantity-increase js-quantity-increase" data-productid="${Number(produs.id)}">+</button> <button class="js-quantity-decrease quantity-decrease css-quantity-decrease" data-productid="${Number(produs.id)}">-</button><button class="quantity-delete css-quantity-delete js-quantity-delete" data-productid="${Number(produs.id)}">Sterge produs</button></div> 
      `
    })
    document.querySelector('.show-table').innerHTML=canaleDrepteHTML;
  },

  renderCanaleDrepteInput(){
    document.querySelector('.add-item').addEventListener('click', ()=>{
      document.querySelector('.input-table').innerHTML=`
      
      Sistem: <input class="sistem css-sistem js-sistem">
      Cod: <p class="cod css-cod js-cod">RTD</p>
      Dimensiune A <input class="dimensiunea css-dimensiunea js-dimensiunea" type="number" min="0">
      Dimensiune B <input class="dimensiuneb css-dimensiuneb js-dimensiuneb" type="number" min="0">
      Dimensiune L <input class="dimensiunel css-dimensiunel js-dimensiunel" type="number" min="0">
      Cantitate: <input class="cantitate css-cantitate js-cantitate">
      Observatii: <input class="observatii css-observatii js-observatii">
      <button class="add-to-list css-add-to-list js-add-to-list">Adauga</button>
      `
      
      document.querySelector('.js-add-to-list').addEventListener('click', ()=>{
        
       
        this.canaleDrepteItems.push({
        id : this.canaleDrepteItems.length,
        sistem : document.querySelector('.js-sistem').value,
        cod: "RTD",
        dimensiunea : document.querySelector('.js-dimensiunea').value,
        dimensiuneb : document.querySelector('.js-dimensiuneb').value,
        dimensiunel : document.querySelector('.js-dimensiunel').value,
        cantitate : document.querySelector('.js-cantitate').value,
        observatii : document.querySelector('.js-observatii').value,
        });
        localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems));
    
        
    
        this.renderItemId();
        this.renderCanaleDrepte();
        this.stergeCantitate();
        this.cresteCantitate();
        this.scadeCantitate();
      
      });
    });
    },

    addMinusQuantityButton(){
      document.querySelector('.js-delete-order').addEventListener('click', ()=>{
        this.canaleDrepteItems=[];
        localStorage.removeItem('canaleDrepte-oop');
        this.renderCanaleDrepte();
      });
      },

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
                }else (console.log('not working'));
              })
              localStorage.removeItem('canaleDrepte-oop');
              this.renderItemId();
              localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems));
              this.renderCanaleDrepte();
              this.stergeCantitate();
              this.cresteCantitate();
              this.scadeCantitate();
            })
            });
        } ,   
    scadeCantitate (){
        document.querySelectorAll('.js-quantity-decrease').forEach((item)=>{
          item.addEventListener('click', ()=>{
              
            this.canaleDrepteItems.forEach((entity)=>{
                if (Number(item.dataset.productid) === Number(entity.id) && entity.cantitate>0 ){
                  entity.cantitate--;
                }else (console.log('not working'));
              })
              localStorage.removeItem('canaleDrepte-oop');
              this.renderItemId();
              localStorage.setItem('canaleDrepte-oop', JSON.stringify(this.canaleDrepteItems));
              this.renderCanaleDrepte();
              this.stergeCantitate();
              this.cresteCantitate();
              this.scadeCantitate();
            })
            });
        }


};


console.log(order.canaleDrepteItems);




order.renderCanaleDrepte();
order.stergeCantitate();
order.cresteCantitate();
order.scadeCantitate();
