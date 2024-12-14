export let produseBrute = [["Canal Drept", "Reductie", "Ramificatie laterala", "Ramificatie bilaterala", "Cot rectangular", "Teu", "Ramificatie pantalon", "Schimbare de sectiune excentrica", "Cot drept", "piesa de deviatie (Etaj)", "Yaka", "Schimbare de sectiune concentrica", "Cot cu dirijori", "Capac", "Plenum"],["Canal Drept","Reductie","Ramificatie laterala","Ramificatie bilaterala","Tub spiro","Teu Circular","Sa circulara","Cot rectangular","Teu","Ramificatie Pantalon","Schimbare de sctiune concentrica","Cot circular","Niplu","Stut cu plasa de sarma","Cot drept","Piesa de deviatie(Etaj)","YAKA","Plenum grile","Reductie Circulara","Capac Circular","Clapeta de reglaj circulara","Cot cu dirijori","Capac","Plenum","Plenum VCV","Schimbare de sectiune excentrica","Stut","Priza de aer la 45 AVL"]]

export let dimParticulare =[
  {
    nume:"Canal Drept",
    cod:"RTD",
    dimensiuni:{
      dimensiuneA:"Dimensiunea A",
      dimensiuneB:"Dimensiunea B",
      dimensiuneC:"Dimensiunea C"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]*param[1]*param[2]
      console.log(result)
      return result
    }
  },
  {
    nume:"Cot Rectangular",
    cod:"RC",
    dimensiuni:{
      dimensiunea1: "A1",
      dimensiunea2: "A2",
      dimensiunea3: "B",
      dimensiunea4: "Raza",
      dimensiunea5: "Unghi"
    },
    suprafata: (A,B,C)=>{
      return ((2*A*C+2*B*C)/1000000).toFixed(2) < 0.1 ? 0.1 : ((2*A*C+2*B*C)/1000000).toFixed(2)}
  },
  {
    nume:"Reductie",
    cod:"RR",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:",
      dimensiuneC:"C:",
      dimensiuneD:"D:",
      dimensiunee:"e:",
      dimensiunef:"f:",
      dimensiunel:"L:"
    }
  }
]
