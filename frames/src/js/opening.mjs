import { s20, s25 } from "./calulatePieces.mjs";
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

}

#calculatePieces(){
   if (this.serie === "s20"){
    this.pieces = s20(this.width, this.height, this.quantity);
   }

   if (this.serie === "25"){
    this.pieces = s25(this.width, this.height, this.quantity);
   }
}

framing(){
  this.#calculatePieces();
    if (this.serie === "s20"){

        const horizontalFrame = new Frame(this.serie, {abasur: "N1749", urualum: "190", juan: "204 o 190", aluminiosDelUruguay: "PN 0190"}, this.pieces.horizontalFrame.lenght, "Horizontal Frame", this.color, this.pieces.horizontalFrame.quantity);

        const verticalFrame = new Frame(this.serie, {abasur: "N1753", urualum: "191", juan: "205 o 191", aluminiosDelUruguay: "PN 0191"}, this.pieces.verticalFrame.lenght, "Horizontal Frame", this.color, this.pieces.verticalFrame.quantity);

        const lateralShash = new Frame(this.serie, {abasur: "N1751", urualum: "193", juan: "202 o 193", aluminiosDelUruguay: "PN 0193"}, this.pieces.lateralShash.lenght, "Horizontal Frame", this.color, this.pieces.lateralShash.quantity);

        const centralShash = new Frame(this.serie, {abasur: "E2864", urualum: "189", juan: "216 o 189", aluminiosDelUruguay: "PN 0189"}, this.pieces.centralShash.lenght, "Horizontal Frame", this.color, this.pieces.centralShash.quantity);

        const horizontalShash = new Frame(this.serie, {abasur: "N1753", urualum: "191", juan: "205 o 191", aluminiosDelUruguay: "PN 0191"}, this.pieces.horizontalShash.lenght, "Horizontal Frame", this.color, this.pieces.horizontalShash.quantity);

        const screenShash = new Frame(this.serie, {abasur: "E4436", urualum: "2314", juan: "214", aluminiosDelUruguay: "PN 2314"}, {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght}, "Horizontal Frame", this.color, {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity});

        const glassWidth = {lenght: this.pieces.glassWidth.lenght, quantity: this.pieces.glassWidth.quantity};

        const glassHeight = {lenght: this.pieces.glassHeight.lenght, quantity: this.pieces.glassHeight.quantity};

        this.frames = {horizontalFrame: horizontalFrame, verticalFrame: verticalFrame, lateralShash: lateralShash, centralShash: centralShash, horizontalShash: horizontalShash, screenShash: screenShash}

        this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};

    }

    

}

#init(){
    this.framing();

}

getFrames(){
    this.#init();
    return this.frames;
}

getGlass(){
    this.#init();
    return this.glass;
}



}