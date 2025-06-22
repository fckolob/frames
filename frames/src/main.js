import './style.css';
import "./js/opening.mjs"
import Opening from './js/opening.mjs';
import * as utils from "./js/utils.mjs";




document.querySelector('#app').innerHTML = `
  <div id="container">

  <h1>Frames</h1>
   <form id="add-opening-form" class="form-element" action="post">
  <label class="form-label" for="serie">Serie</label>
  <select required class="form-input" name="serie" id="serie">
    <option value="Select-an-option">Select an Option</option>
    <option value="s20">Serie 20</option>
    <option value="s25">Serie 25</option>
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
  <select required class="form-input" name="preframe" id="preframe">
    <option value="Select-an-option">Select an Option</option>
    <option value="preframeTrue">Con Premarco</option>
    <option value="preframeFalse">Sin Premarco</option>
  </select>
  <label class="form-label" for="width">Width</label>
  <input placeholder="Width in mm" required class="form-input" id="width" min="1" step="1" name="width" type="number">
  <label class="form-label" for="height">Height</label>
  <input placeholder="Height in mm" required class="form-input" id="height" name="height" min="1" step="1" type="number">
  <label class="form-label" for="quantity">Quantity</label>
  <input required class="form-input" min="1" step="1" id="quantity" name="quantity" type="number"> 
  
  <input class="form-submit" value="Add Opening" id="add-opening" name="add-opening" type="submit">
</form> 
  </div>
`
window.onload = async ()=> {
  const form = document.getElementById("add-opening-form");
  const submitButton = form.elements.namedItem("add-opening");
  submitButton.addEventListener("click",async function(event){
    event.preventDefault();
    const serie = form.elements.namedItem("serie").value;
    const color = form.elements.namedItem("color").value;
    const vidrio = form.elements.namedItem("vidrio").value;
    const preframeValue = form.elements.namedItem("serie").value;
    const width = form.elements.namedItem("width").value;
    const height = form.elements.namedItem("height").value;
    const quantity = form.elements.namedItem("quantity").value;
    let dvh = false;
    let preframe = false;
    if(vidrio === "dvh"){
      dvh = true;
    }

    if(preframeValue === "preframeTrue"){
      preframe = true;
    }

    const opening = new Opening(width, height, serie, color, dvh, preframe, quantity);

    

    const framesResult = await opening.getFrames();

    utils.addToLocalStorage(framesResult);
    console.log(framesResult);
  })
}
