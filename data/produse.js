export let produseBrute = [["Canal Drept", "Reductie", "Ramificatie laterala", "Ramificatie bilaterala", "Cot rectangular", "Teu", "Ramificatie pantalon", "Schimbare de sectiune excentrica", "Cot drept", "piesa de deviatie (Etaj)", "Yaka", "Schimbare de sectiune concentrica", "Cot cu dirijori", "Capac", "Plenum"],["Canal Drept","Reductie","Ramificatie laterala","Ramificatie bilaterala","Tub spiro","Teu Circular","Sa circulara","Cot rectangular","Teu","Ramificatie Pantalon","Schimbare de sctiune concentrica","Cot circular","Niplu","Stut cu plasa de sarma","Cot drept","Piesa de deviatie(Etaj)","YAKA","Plenum grile","Reductie Circulara","Capac Circular","Clapeta de reglaj circulara","Capac","Plenum","Plenum VCV","Schimbare de sectiune excentrica","Stut","Priza de aer la 45 AVL"]]

export let dimParticulare =[
  {
    nume:"Canal Drept",
    cod:"RTD",
    dimensiuni:{
      dimensiuneA:"A",
      dimensiuneB:"B",
      dimensiuneC:"C"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = (param[0]*param[1]*param[2])/100000000
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
    suprafata:(param)=>{
      console.log(param)
      let result = (((2*(param[0]+param[3])*(param[1]+param[3])+param[2]*Math.PI*(param[3]+Math.max(param[0],param[1])/2))*param[4]/90)/1000000).toFixed(2)
      return result
    } 
    // (A,B,C)=>{
     // return ((2*A*C+2*B*C)/1000000).toFixed(2) < 0.1 ? 0.1 : ((2*A*C+2*B*C)/1000000).toFixed(2)}
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
    },
    suprafata:(param)=>{
      const F6 = param[0];
      const G6 = param[1];
      const H6 = param[2];
      const I6 = param[3];
      const J6 = param[4];
      const K6 = param[5];
      const L6 = param[6];

      const term1 = (G6 + I6)*(Math.sqrt(Math.pow(L6, 2)+Math.pow(J6, 2)))/2
      const term2 = (G6 + I6)*(Math.sqrt(Math.pow(L6,2)+Math.pow(F6-H6-J6, 2)))/2
      const term3 = (F6+H6)*(Math.sqrt(Math.pow(L6, 2)+Math.pow(K6, 2)))/2
      const term4 = (F6+H6)*Math.sqrt(Math.pow(L6,2)+Math.pow(G6-I6-K6, 2))
      
      const sum = term1+term2+term3+term4
      const normalizedResult = sum / Math.pow(10,6);
      if(L6 <= 250){
        return (normalizedResult*1.1).toFixed(2)
      }else return normalizedResult.toFixed(2)
    }
  },
  {
    nume:"Ramificatie laterala",
    cod:"RLAT",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:",
      dimensiuneC:"C:",
      dimensiuneD:"D:",
      dimensiunee:"e:",
      dimensiunef:"f:",
      dimensiunel:"L:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Cot Rectangular Drept",
    cod:"RCP",
    dimensiuni:{
      dimensiuneA:"A1:",
      dimensiuneB:"A2:",
      dimensiuneC:"B:",
      dimensiuneD:"R:",
      dimensiunee:"<:",
    },
    suprafata:(param)=>{
      const F = param[0]
      const G = param[1]
      const H = param[2]
      const I = param[3]
      const J = param[4]

     const result = ((F/1000+I/1000)*(G/1000+I/1000)*2+(F/1000+G/1000+4*I/1000)*H/1000)*J/90
      return result.toFixed(2)
    } 
  },
  {
    nume:"Cot Rectangular cu dirijori",
    cod:"RCd",
    dimensiuni:{
      dimensiuneA:"A1:",
      dimensiuneB:"A2:",
      dimensiuneC:"B:",
      dimensiuneD:"R:",
      dimensiunee:"<():",
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"TEU",
    cod:"RTE",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:",
      dimensiuneC:"C:",
      dimensiuneD:"R:",
      dimensiunee:"L:",
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Piesa de deviatie (Etaj)",
    cod:"RSD",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:",
      dimensiuneC:"F:",
      dimensiuneD:"L:",
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"YAKA",
    cod:"RPRR",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:",
      dimensiuneC:"C:",
      dimensiuneD:"L:",
      dimensiuneD:"G:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Ram. Bilat. 2 Coturi",
    cod:"RRB",
    dimensiuni:{
      dimensiuneA:"C1:",
      dimensiuneB:"C2:",
      dimensiuneC:"B:",
      dimensiuneD:"R:",
      dimensiuneD:"D1:",
      dimensiuneF:"D2:",
      dimensiuneG:"<():"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Ram. Bilat. Cot + Canal",
    cod:"RRL",
    dimensiuni:{
      dimensiuneA:"D1:",
      dimensiuneB:"D2:",
      dimensiuneC:"B:",
      dimensiuneD:"R:",
      dimensiuneD:"C1:",
      dimensiuneF:"C2:",
      dimensiuneG:"<():",
      dimensiuneH:"L:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Ramificatie pantalon",
    cod:"RRP",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:",
      dimensiuneC:"C:",
      dimensiuneD:"D:",
      dimensiuneD:"E:",
      dimensiuneF:"H:",
      dimensiuneH:"L:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Capac",
    cod:"RCA",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Schimbare Sectiune Concentrica",
    cod:"RCSS",
    dimensiuni:{
      dimensiuneA:"fiD:",
      dimensiuneB:"A:",
      dimensiuneC:"B:",
      dimensiuneD:"L:",
      dimensiuneD:"alfa:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Schimbare Sectiune Excentrica",
    cod:"SSE",
    dimensiuni:{
      dimensiuneA:"fiD:",
      dimensiuneB:"A:",
      dimensiuneC:"B:",
      dimensiuneD:"L:",
      dimensiuneD:"alfa:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  },
  {
    nume:"Plenum",
    cod:"PL",
    dimensiuni:{
      dimensiuneA:"A:",
      dimensiuneB:"B:",
      dimensiuneC:"H:",
      dimensiuneD:"fi:",
      dimensiuneD:"Nr. Stut:"
    },
    suprafata:(param)=>{
      console.log(param)
      let result = param[0]+param[1]+param[2]+param[3]+param[4]
      return result
    } 
  }
]
