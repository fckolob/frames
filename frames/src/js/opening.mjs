import { s20, s25, s25TripleRiel} from "./calulatePieces.mjs";
import Frame from "./frame.mjs";



export default class Opening{

constructor(width, height, serie, color, dvh, preframe, quantity){
    this.width = width;
    this.height = height;
    this.serie = serie;
    this.color = color;
    this.dvh = dvh;
    this.preframe = preframe;
    this.quantity = quantity;
    this.pieces = {};
    this.frames = {};
    this.glass = {};
    this.stringFrames = [];

}

#calculatePieces(){
   if (this.serie === "s20"){
    this.pieces = s20(this.width, this.height, this.quantity);
   }

   if (this.serie === "s25"){
    this.pieces = s25(this.width, this.height, this.quantity);
   }

    if (this.serie === "s25TripleRiel"){
     this.pieces = s25TripleRiel(this.width, this.height, this.quantity);
    }
}

async framing(){
  await this.#calculatePieces();
    if (this.serie === "s20"){

        const horizontalFrame = new Frame(this.serie, {abasur: "N1749", urualum: "190", juan: "204 o 190", aluminiosDelUruguay: "PN 0190"}, this.pieces.horizontalFrame.lenght, "Horizontal Frame", this.color, this.pieces.horizontalFrame.quantity);

        const verticalFrame = new Frame(this.serie, {abasur: "N1753", urualum: "191", juan: "205 o 191", aluminiosDelUruguay: "PN 0191"}, this.pieces.verticalFrame.lenght, "Vertical Frame", this.color, this.pieces.verticalFrame.quantity);

        const lateralShash = new Frame(this.serie, {abasur: "N1751", urualum: "193", juan: "202 o 193", aluminiosDelUruguay: "PN 0193"}, this.pieces.lateralShash.lenght, "Lateral Shash", this.color, this.pieces.lateralShash.quantity);

        const centralShash = new Frame(this.serie, {abasur: "E2864", urualum: "189", juan: "216 o 189", aluminiosDelUruguay: "PN 0189"}, this.pieces.centralShash.lenght, "Central Shash", this.color, this.pieces.centralShash.quantity);

        const horizontalShash = new Frame(this.serie, {abasur: "N1753", urualum: "191", juan: "205 o 191", aluminiosDelUruguay: "PN 0191"}, this.pieces.horizontalShash.lenght, "Horizontal Shash", this.color, this.pieces.horizontalShash.quantity);

        const screenShash = new Frame(this.serie, {abasur: "E4436", urualum: "2314", juan: "214", aluminiosDelUruguay: "PN 2314"}, {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght}, "Screen Shash", this.color, {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity});

        const screenGuide = new Frame(this.serie, {abasur: "E4821", urualum: "213", juan: "213", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS20.lenght, "Screen Guide S20", this.color, this.pieces.screenGuideS20.quantity);

        const glassWidth = {lenght: this.pieces.glassWidth.lenght, quantity: this.pieces.glassWidth.quantity};

        const glassHeight = {lenght: this.pieces.glassHeight.lenght, quantity: this.pieces.glassHeight.quantity};

        this.frames = {horizontalFrame: horizontalFrame, verticalFrame: verticalFrame, lateralShash: lateralShash, centralShash: centralShash, horizontalShash: horizontalShash, screenShash: screenShash, screenGuide: screenGuide};

        this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};

    }

    if (this.serie === "s25"){

        const inferiorFrame = new Frame(this.serie, {abasur: "E2857", urualum: "2500", juan: "150 o 2500", aluminiosDelUruguay: "Not available"}, this.pieces.inferiorFrame.lenght, "Inferior Frame", this.color, this.pieces.inferiorFrame.quantity);

        const superiorFrame = new Frame(this.serie, {abasur: "E2858", urualum: "2528", juan: "151 o 2528", aluminiosDelUruguay: "Not available"}, this.pieces.superiorFrame.lenght, "Superior Frame", this.color, this.pieces.superiorFrame.quantity)

        const verticalFrame = new Frame(this.serie, {abasur: "E3513", urualum: "2501", juan: "2501", aluminiosDelUruguay: "Not available"}, this.pieces.verticalFrame.lenght, "Vertical Frame", this.color, this.pieces.verticalFrame.quantity);

        const lateralShash = new Frame(this.serie, {abasur: "E2862", urualum: "4505", juan: "4505", aluminiosDelUruguay: "Not available"}, this.pieces.lateralShash.lenght, "Lateral Shash", this.color, this.pieces.lateralShash.quantity);

        const centralShash = new Frame(this.serie, {abasur: "E2861", urualum: "4507", juan: "155 o 4507", aluminiosDelUruguay: "Not available"}, this.pieces.centralShash.lenght, "Central Shash", this.color, this.pieces.centralShash.quantity);

        const horizontalShashBig = new Frame(this.serie, {abasur: "E2859", urualum: "4503", juan: "4503", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashBig.lenght, "Horizontal Shash Big", this.color, this.pieces.horizontalShashBig.quantity);

        const horizontalShashSmall = new Frame(this.serie, {abasur: "E2863", urualum: "4504", juan: "4504", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashSmall.lenght, "Horizontal Shash Small", this.color, this.pieces.horizontalShashSmall.quantity);

        const screenShash = new Frame(this.serie, {abasur: "E3514", urualum: "2343", juan: "2343", aluminiosDelUruguay: "PN 2343"}, {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght}, "Screen Shash", this.color, {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity});

        const screenGuideS25L = new Frame(this.serie, {abasur: "E4678", urualum: "213", juan: "213", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25L.lenght, "Screen Guide S25 L", this.color, this.pieces.screenGuideS25L.quantity);

        const screenGuideS25P = new Frame(this.serie, {abasur: "E4677", urualum: "2344", juan: "2344", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25P.lenght, "Screen Guide S25 P", this.color, this.pieces.screenGuideS25P.quantity);

        let glassWidth = {};

        let glassHeight = {};

        let glassDvhU = {};




        if(this.dvh === false){

        glassWidth = {lenght: this.pieces.glassWidth.lenght, quantity: this.pieces.glassWidth.quantity};

        glassHeight = {lenght: this.pieces.glassHeight.lenght, quantity: this.pieces.glassHeight.quantity};

        glassDvhU = null;
        }

        if(this.dvh === true){
            glassWidth = {lenght: this.pieces.glassDvhWidth.lenght, quantity: this.pieces.glassDvhWidth.quantity};

            glassHeight = {lenght: this.pieces.glassDvhHeight.lenght, quantity: this.pieces.glassDvhHeight.quantity};

            glassDvhU = new Frame(this.serie, {abasur: "E4886", urualum: "Not available", juan: "4590", aluminiosDelUruguay: "Not available"}, {width: this.pieces.glassDvhUHorizontal.lenght, height: this.pieces.glassDvhUVertical.lenght}, "U Dvh", this.color, {widthQuantity: this.pieces.glassDvhUHorizontal.quantity, heightQuantity: this.pieces.glassDvhUVertical.quantity});

            
        }
        

        this.frames = {inferiorFrame: inferiorFrame, superiorFrame: superiorFrame, verticalFrame: verticalFrame, lateralShash: lateralShash, centralShash: centralShash, horizontalShashBig: horizontalShashBig, horizontalShashSmall: horizontalShashSmall, screenShash: screenShash, glassDvhU: glassDvhU, screenGuideS25L: screenGuideS25L, screenGuideS25P: screenGuideS25P};

        this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};

    }
    if (this.serie === "s25TripleRiel"){
            const inferiorFrameTripleRiel = new Frame(this.serie, {abasur: "E4940", urualum: "Not available", juan: "2538", aluminiosDelUruguay: "Not available"}, this.pieces.inferiorFrame.lenght, "Inferior Frame Triple Riel", this.color, this.pieces.inferiorFrame.quantity);
            const superiorFrameTripleRiel = new Frame(this.serie, {abasur: "E4674", urualum: "Not Available", juan: "2532", aluminiosDelUruguay: "Not available"}, this.pieces.superiorFrame.lenght, "Superior Frame", this.color, this.pieces.superiorFrame.quantity)
            const verticalFrameTripleRiel = new Frame(this.serie, {abasur: "E4676", urualum: "Not available", juan: "2534", aluminiosDelUruguay: "Not available"}, this.pieces.verticalFrame.lenght, "Vertical Frame", this.color, this.pieces.verticalFrame.quantity);
            const lateralShash = new Frame(this.serie, {abasur: "E2862", urualum: "4505", juan: "4505", aluminiosDelUruguay: "Not available"}, this.pieces.lateralShash.lenght, "Lateral Shash", this.color, this.pieces.lateralShash.quantity);
            const centralShash = new Frame(this.serie, {abasur: "E2861", urualum: "4507", juan: "155 o 4507", aluminiosDelUruguay: "Not available"}, this.pieces.centralShash.lenght, "Central Shash", this.color, this.pieces.centralShash.quantity);
            const horizontalShashBig = new Frame(this.serie, {abasur: "E2859", urualum: "4503", juan: "4503", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashBig.lenght, "Horizontal Shash Big", this.color, this.pieces.horizontalShashBig.quantity);
            const horizontalShashSmall = new Frame(this.serie, {abasur: "E2863", urualum: "4504", juan: "4504", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashSmall.lenght, "Horizontal Shash Small", this.color, this.pieces.horizontalShashSmall.quantity);
            const screenShash = new Frame(
              this.serie,
              {abasur: "E2860", urualum: "4506", juan: "4506", aluminiosDelUruguay: "Not available"},
              {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght},
              "Screen Shash",
              this.color,
              {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity}
            );

            const screenGuideS25L = new Frame(this.serie, {abasur: "E4678", urualum: "213", juan: "213", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25L.lenght, "Screen Guide S25 L", this.color, this.pieces.screenGuideS25L.quantity);

            const screenGuideS25P = new Frame(this.serie, {abasur: "E4677", urualum: "2344", juan: "2344", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25P.lenght, "Screen Guide S25 P", this.color, this.pieces.screenGuideS25P.quantity);
            
            let glassWidth = {};
            let glassHeight = {};
            let glassDvhU = {};
            if(this.dvh === false){
            glassWidth = {lenght: this.pieces.glassWidth.lenght, quantity: this.pieces.glassWidth.quantity};
            glassHeight = {lenght: this.pieces.glassHeight.lenght, quantity: this.pieces.glassHeight.quantity};
            glassDvhU = null;
            }
            if(this.dvh === true){
            glassWidth = {lenght: this.pieces.glassDvhWidth.lenght, quantity: this.pieces.glassDvhWidth.quantity};
            glassHeight = {lenght: this.pieces.glassDvhHeight.lenght, quantity: this.pieces.glassDvhHeight.quantity};
            glassDvhU = new Frame(this.serie, {abasur: "E4886", urualum: "Not available", juan: "4590", aluminiosDelUruguay: "Not available"}, {width: this.pieces.glassDvhUHorizontal.lenght, height: this.pieces.glassDvhUVertical.lenght}, "U Dvh", this.color, {widthQuantity: this.pieces.glassDvhUHorizontal.quantity, heightQuantity: this.pieces.glassDvhUVertical.quantity});
            }

            this.frames = {lateralShash: lateralShash, centralShash: centralShash, horizontalShashBig: horizontalShashBig, horizontalShashSmall: horizontalShashSmall, screenShash: screenShash, glassDvhU: glassDvhU, inferiorFrameTripleRiel: inferiorFrameTripleRiel, superiorFrameTripleRiel: superiorFrameTripleRiel, verticalFrameTripleRiel: verticalFrameTripleRiel, screenGuideS25L: screenGuideS25L, screenGuideS25P: screenGuideS25P};

            this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};
        }


}

async init(){
    await this.framing();
    await this.toString();
}

async getFrames(){
    
    return this.frames;
}

async getGlass(){
  
    return this.glass;
}

async toString(){
    let returned = `<h2>${this.quantity} Openings of ${this.width} width x ${this.height} height ${this.serie} ${this.color} DVH? = ${this.dvh}</h2><ul class="production-list">`;
    Object.keys(this.frames).forEach(key => {
        if(this.frames[key] !== null && this.frames[key].name){
        if(this.frames[key].name === "Screen Shash" || this.frames[key].name === "U Dvh"){
            returned += `<li>${this.frames[key].name} width quantity = ${this.frames[key].quantity.widthQuantity} of ${this.frames[key].lenght.width} height quantity = ${this.frames[key].quantity.heightQuantity} of ${this.frames[key].lenght.height}
             </li>`
        }

        else if(this.frames[key].name === "Horizontal Frame" || this.frames[key].name === "Inferior Frame" || this.frames[key].name === "Superior Frame" || this.frames[key].name === "Lateral Shash" || this.frames[key].name === "Central Shash"){
            returned += `<li>${this.frames[key].quantity} ${this.frames[key].name} ${this.frames[key].lenght} Half = ${this.frames[key].half}</li>`
        }
        
        
        else {   
       returned += `<li>${this.frames[key].quantity} ${this.frames[key].name} ${this.frames[key].lenght}</li>`}
    }});
    returned += `<li>Glass Width = ${this.glass.glassWidth.lenght} Glass Height = ${this.glass.glassHeight.lenght} Glass Quantity = ${this.glass.glassWidth.quantity}</li>`
    returned += `</ul>`
    this.stringFrames.push(returned);
}

async getStringFrames(){
    return this.stringFrames;
}

}

// Agrega esto al final del archivo
export let InferiorFramesS25TripleRielAnodizado = [];
export let SuperiorFramesS25TripleRielAnodizado = [];
export let VerticalFramesS25TripleRielAnodizado = [];
export let lateralShashesS25Anodizado = [];
export let centralShashesS25Anodizado = [];
export let bigHorizontalShashesS25Anodizado = [];
export let smallHorizontalShashesS25Anodizado = [];
export let screenShashesS25Anodizado = [];

export let glassDvhUsS25Anodizado = [];

export function addOpeningToAnodizado(opening){
if(opening.serie === "s25TripleRiel" && opening.color === "anodizado"){
    if(opening.dvh === true){
        this.glassDvhUsS25Anodizado.push(opening.frames.glassDvhU);
    }
    this.InferiorFramesS25TripleRielAnodizado.push(opening.frames.inferiorFrameTripleRiel);
    this.SuperiorFramesS25TripleRielAnodizado.push(opening.frames.superiorFrameTripleRiel);
    this.VerticalFramesS25TripleRielAnodizado.push(opening.frames.verticalFrameTripleRiel);
    this.lateralShashesS25Anodizado.push(opening.frames.lateralShash);
    this.centralShashesS25Anodizado.push(opening.frames.centralShash);
    this.bigHorizontalShashesS25Anodizado.push(opening.frames.horizontalShashBig);
    this.smallHorizontalShashesS25Anodizado.push(opening.frames.horizontalShashSmall);
    this.screenShashesS25Anodizado.push(opening.frames.screenShash);
}
}