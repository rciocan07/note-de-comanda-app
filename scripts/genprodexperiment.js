
import { dimParticulare, produseBrute } from "../data/produse.js"
import { Comanda } from "../data/comandacurenta.js"

export let content;
export const comanda = new Comanda('test2')

dimParticulare.forEach((produs)=>{
  document.querySelector('.butoane-piese').innerHTML+=`
  <button class="js-button ${produs.cod}" data-cod=${produs.cod}>${produs.nume}</button>
  `
  
})

document.querySelectorAll('.js-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    let i=1;
    dimParticulare.forEach((produs)=>{
      if(produs.cod === button.dataset.cod){
        document.querySelector('.dimensions').innerHTML= '';
        for (let dimensiune in produs.dimensiuni){
          document.querySelector('.cod').innerHTML= produs.cod
          document.querySelector('.dimensions').innerHTML+= `<input class="css-et-dim add focus${i} input-field et-dim ${dimensiune}" data-eticheta="${produs.dimensiuni[dimensiune]}"type="number" min="0" placeholder="${produs.dimensiuni[dimensiune]}"></input>`;
          i++
        }

      }
  })
})})

function creareDim(){
  let dimList={}
  let i=1;
  document.querySelectorAll('.et-dim').forEach((dimensiune)=>{
    const dimensiuneName= `dimensiune${i}`;
    const dimToPush = dimensiune.value;
    i++;
    dimList[dimensiuneName]=dimToPush
  })
  return dimList
}

function creareEtDim(){
  let dimList=''
  document.querySelectorAll('.et-dim').forEach((dimensiune)=>{
    dimList+=`${dimensiune.dataset.eticheta}=${dimensiune.value} `
  })
  return dimList
}

function calculSuprafata(){
  let dimToParse=[]
  let suprafata;
  document.querySelectorAll('.et-dim').forEach((dimensiune)=>{
    dimToParse.push(Number(dimensiune.value))
    }
  )
    console.log(dimToParse)
  dimParticulare.forEach((tip)=>{
    if (tip.cod === document.querySelector('.cod').innerHTML){
      suprafata = tip.suprafata(dimToParse)
    }
  })
  return suprafata>0.1? suprafata:0.1
}
document.querySelector('.add-button').addEventListener('click',()=>{
 
  dimParticulare.forEach((tip)=>{
    
    if(tip.cod === document.querySelector('.cod').innerHTML){
      
      const deAdaugat = {
        id: Math.random(),
        sistem: document.querySelector('.sistem').value,
        cod: tip.cod,
        dimensiuni: creareDim(),
        suprafata: calculSuprafata(),
        cantitate: document.querySelector('.cantitate').value,
        flansa: document.querySelector('.flansa').value,
        observatii: document.querySelector('.observatii').innerText,
        etichetaDim: creareEtDim()
      }
      comanda.adaugaLaComanda(deAdaugat);
      document.querySelector('.focus1').focus()
      
    }else{console.log(`not working`)}
  })
  document.querySelector('.form').reset()
})

document.querySelector('.delete-button').addEventListener('click', ()=>{
  comanda.stergeComanda()
  console.log(comanda.comanda)
})

        // Path to your local Excel file in the source code (it needs to be hosted on a server or packaged in the project)
        const excelFilePath = "../data/desfumare.xlsm" // Change this to the correct path

        // Load the Excel file
        async function loadExcelFile() {
            const response = await fetch(excelFilePath);
            const arrayBuffer = await response.arrayBuffer();
            const wb = XLSX.read(arrayBuffer, { type: 'array' });

            return wb;
        }

        // Function to write to B6 and C6, and set formula in M6
        async function processExcel() {
            try {
                const wb = await loadExcelFile();

                // Access the first sheet (Sheet1)
                const ws = wb.Sheets['Canaldrept'];

                // Write to B6 and C6
                ws['F6'] = { t: 'n', v: 2000 }; // Example: Writing 200 to F6
                ws['G6'] = { t: 'n', v: 3000 }; // Example: Writing 300 to G6
                ws['H6'] = { t: 'n', v: 4000 }; // Example: Writing 300 to H6

                // Write the formula to M6 (B6 + C6)
                //ws['M6'] = { t: 's', v: '=B6+C6' }; // Formula in M6: B6 + C6

                // Trigger Excel to calculate the formula by writing it to the sheet
                XLSX.utils.sheet_add_aoa(ws, [[null]], { origin: 'M6' }); // Refresh the formula

                // After modification, you can now read the result from M6
                const m6Value = ws['M6'].v; // This should contain the value of B6 + C6

                // Output the result
                console.log('Result of M6 (B6 + C6):', m6Value); // 500 in this case (200 + 300)

               /*// Optionally, save the updated Excel file
                const updatedWb = XLSX.write(wb, { bookType: 'xlsx', type: 'blob' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(updatedWb);
                link.download = 'updated_note-de-comanda.xlsx';
                link.click();*/
            } catch (error) {
                console.error('Error processing Excel file:', error);
            }
        }

        // Add event listener to process the Excel file when the button is clicked
        document.getElementById('process').addEventListener('click', processExcel);