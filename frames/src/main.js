import './style.css'



document.querySelector('#app').innerHTML = `
  <div>

  <h1>Frames</h1>
   <form class="form-element" action="post">
  <label for="serie">Serie</label>
  <select class="form-input" name="serie" id="serie">
    <option value="serie20">Serie 20</option>
    <option value="serie25">Serie 25</option>
  </select>
  <label for="color">Color</label>
  <select class="form-input" name="color" id="color">
    <option value="anodizado">Anodizado</option>
    <option value="anolok">Anolok</option>
    <option value="blanco">Blanco</option>
    <option value="imitacionMadera">Imitacion Madera</option>
    <option value="pintadoNegro">Pintado de Negro</option>
  </select>
  <label for="vidrio">Vidrio</label>
  <select class="form-input" name="vidrio" id="vidrio">
    <option value="simple">Vidrio Simple</option>
    <option value="dvh">Vidrio DVH</option>
  </select>
  <label for="width">Width</label>
  <input id="width" name="width" type="text">
  <label for="height">Height</label>
  <input id="height" name="height" type="text">
  <label for="quantity">Quantity</label>
  <input id="quantity" name="quantity" type="number"> 
  
  <input class="form-submit" value="Add Opening" id="add-opening" name="add-opening" type="submit">
</form> 
  </div>
`


