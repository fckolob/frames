import './style.css';
import "./js/opening.mjs"
import Opening from './js/opening.mjs';
import * as utils from "./js/utils.mjs";
import calculateMaterials from './js/calculateMaterials.mjs';
import displayBars from './js/displayBars.mjs';

let traker = 0;

let buttonTraker = 0;
document.querySelector('#app').innerHTML = `
  <div id="container">

  <h1>Frames</h1>
  <h2 id="openings-added"></h2>
   <form id="add-opening-form" class="form-element" action="post">
  <label class="form-label" for="serie">Serie</label>
  <select required class="form-input" name="serie" id="serie">
    <option value="Select-an-option">Select an Option</option>
    <option value="s20">Serie 20</option>
    <option value="s25">Serie 25</option>
    <option value="s25TripleRiel">Serie 25 Triple Riel</option>
    <option value="probbaCorrediza">Probba Corrediza</option>
    <option value="probbaCorredizaTripleRiel">Probba Corrediza Triple Riel</option>
  </select>
  <label class="form-label" for="color">Color</label>
  <select required class="form-input" name="color" id="color">
    <option value="Select-an-option">Select an Option</option>
    <option value="anodizado">Anodizado</option>
    <option value="anolok">Anolok</option>
    <option value="blanco">Blanco</option>
    <option value="imitacionMadera">Imitacion Madera</option>
    <option value="pintadoNegro">Pintado de Negro</option>
  </select>
  <label class="form-label" for="vidrio">Vidrio</label>
  <select required class="form-input" name="vidrio" id="vidrio">
    <option value="Select-an-option">Select an Option</option>
    <option value="simple">Vidrio Simple</option>
    <option value="dvh">Vidrio DVH</option>
  </select>
   <label class="form-label" for="preframe">Premarco</label>
  <select required class="form-input" name="preframe" id="preframe">
    <option value="Select-an-option">Select an Option</option>
    <option value="preframeTrue">Con Premarco</option>
    <option value="preframeFalse">Sin Premarco</option>
  </select>
  <label class="form-label" for="width">Ancho</label>
  <input placeholder="Ancho en mm" required class="form-input" id="width" min="1" step="1" name="width" type="number">
  <label class="form-label" for="height">Alto</label>
  <input placeholder="Alto en mm" required class="form-input" id="height" name="height" min="1" step="1" type="number">
  <label class="form-label" for="quantity">Cantidad</label>
  <input required class="form-input" min="1" step="1" id="quantity" name="quantity" type="number"> 
  
  <input class="form-submit" value="Agregar Abertura" id="add-opening" name="add-opening" type="submit">
</form>


  </div>
`
window.onload = async ()=> {
 if(traker < 1){ utils.setLocalStorage([]);}
 traker += 1;
  let productionButtonEventListenerFlag = true;
  let displayProductionFlag = true;
  const container = document.getElementById("container");
  const form = document.getElementById("add-opening-form");
  const submitButton = form.elements.namedItem("add-opening");
  const serieElement = document.getElementById("serie");
  const colorElement = document.getElementById("color");
  const vidrioElement = document.getElementById("vidrio");
  const preframeElement = document.getElementById("preframe");
  const widthElement = document.getElementById("width");
  const heightElement = document.getElementById("height");
  const quantityElement = document.getElementById("quantity");
  const openingsQuantityDisplay = document.getElementById("openings-added");
  const buttons = `<button id="production">Production</button>
<button id="calculate-materials">Calculate Materials</button>`
  submitButton.addEventListener("click",async function(event){
    event.preventDefault();
    
    let serie = form.elements.namedItem("serie").value;
    let color = form.elements.namedItem("color").value;
    let vidrio = form.elements.namedItem("vidrio").value;
    let preframeValue = form.elements.namedItem("preframe").value;
    let width = form.elements.namedItem("width").value;
    let height = form.elements.namedItem("height").value;
    let quantity = form.elements.namedItem("quantity").value;
    let dvh = false;
    let preframe = false;
    if(vidrio === "dvh"){
      dvh = true;
    }

    if(preframeValue === "preframeTrue"){
      preframe = true;
    }

    const opening = new Opening(width, height, serie, color, dvh, preframe, quantity);

    

    await opening.init();

    utils.addToLocalStorage(opening);
    console.log(opening);

    serieElement.value = "Select-an-option";
    colorElement.value = "Select-an-option";
    vidrioElement.value = "Select-an-option";
    preframeElement.value = "Select-an-option";
    vidrioElement.value = "Select-an-option";
    dvh = false;
    preframe = false;
    widthElement.value = "";
    heightElement.value = "";
    quantityElement.value = "";
    
    const openingsReturn = utils.getLocalStorage();

    let openingsQuantity = 0;

    openingsReturn.forEach(opening => {
      openingsQuantity += parseInt(opening.quantity);
    });

    openingsQuantityDisplay.textContent = `${openingsQuantity} Openings Added`

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if(buttonTraker === 0){await container.insertAdjacentHTML("afterend", buttons);}

    buttonTraker += 1;
    
    const calculateMaterialsButton = document.getElementById("calculate-materials");

    const productionButton = document.getElementById("production");

    

    if(productionButtonEventListenerFlag){productionButton.addEventListener("click", async ()=>{
      if(displayProductionFlag){
      let openings = [];

      let openingsData = await utils.getLocalStorage();

      for (const openingD of openingsData) {
        let opening = new Opening(
          openingD.width,
          openingD.height,
          openingD.serie,
          openingD.color,
          openingD.dvh,
          openingD.preframe,
          openingD.quantity
        );
        await opening.init();
        openings.push(opening);
      }

      let frameLists = "";

      const frameListsArray = await Promise.all(
        openings.map(opening => opening.getStringFrames())
      );

      frameListsArray.forEach(frameList => {
        frameLists += frameList;
      });

      container.innerHTML = "";
      container.insertAdjacentHTML('afterend', frameLists);
      // Remove any existing PRINT button before adding a new one
let oldPrint = document.getElementById("print");
if (oldPrint) oldPrint.remove();

container.insertAdjacentHTML('afterend', `<button id="print">PRINT</button>`);
let print = document.getElementById("print");
print.addEventListener("click", () => {
  window.print();
});
      
      displayProductionFlag = false;
    }})}

    productionButtonEventListenerFlag = false;

    calculateMaterialsButton.addEventListener("click", async () => {

      let openings = [];

      let openingsData = await utils.getLocalStorage();

      for (const openingD of openingsData) {
        let opening = new Opening(
          openingD.width,
          openingD.height,
          openingD.serie,
          openingD.color,
          openingD.dvh,
          openingD.preframe,
          openingD.quantity
        );
        await opening.init();
        openings.push(opening);
      }

      let calculateMaterials1 = new calculateMaterials(openings);

      let bars = await calculateMaterials1.getFrameBars();

      console.log(bars);

      let displayBars1 = new displayBars(bars);

      let barList = displayBars1.getBarsList();

      console.log(barList);

      container.innerHTML = "";

      container.innerHTML = `<h1>Frames</h1>
      <h2>Materials</h2>
      ${barList}
      <button id="home">Home</button>
      `;
      
      let oldPrint = document.getElementById("print");
if (oldPrint) oldPrint.remove();

container.insertAdjacentHTML('afterend', `<button id="print">PRINT</button>`);
let print = document.getElementById("print");
print.addEventListener("click", () => {
  window.print();
});

      let home = document.getElementById("home");

      print = document.getElementById("print");

      home.addEventListener("click", async()=>{
        location.reload();

      });

      

    })
  })
}
