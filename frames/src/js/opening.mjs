import { s20, s25, s25TripleRiel, probbaCorrediza, probbaCorredizaTripleRiel} from "./calulatePieces.mjs";
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

    if (this.serie === "probbaCorrediza"){
        this.pieces = probbaCorrediza(this.width, this.height, this.quantity);
    }

    if (this.serie === "probbaCorredizaTripleRiel"){
        this.pieces = probbaCorredizaTripleRiel(this.width, this.height, this.quantity);
    }
}

async framing(){
  await this.#calculatePieces();
    if (this.serie === "s20"){

        const horizontalFrame = new Frame(this.serie, {abasur: "N1749", urualum: "190", juan: "204 o 190", aluminiosDelUruguay: "PN 0190"}, this.pieces.horizontalFrame.lenght, "Horizontal Frame","Horizontal de Marco", this.color, this.pieces.horizontalFrame.quantity);

        const verticalFrame = new Frame(this.serie, {abasur: "N1753", urualum: "191", juan: "205 o 191", aluminiosDelUruguay: "PN 0191"}, this.pieces.verticalFrame.lenght, "Vertical Frame", "Lateral de Marco", this.color, this.pieces.verticalFrame.quantity);

        const lateralShash = new Frame(this.serie, {abasur: "N1751", urualum: "193", juan: "202 o 193", aluminiosDelUruguay: "PN 0193"}, this.pieces.lateralShash.lenght, "Lateral Shash", "Lateral de Hoja", this.color, this.pieces.lateralShash.quantity);

        const centralShash = new Frame(this.serie, {abasur: "E2864", urualum: "189", juan: "216 o 189", aluminiosDelUruguay: "PN 0189"}, this.pieces.centralShash.lenght, "Central Shash","Enganche", this.color, this.pieces.centralShash.quantity);

        const horizontalShash = new Frame(this.serie, {abasur: "N1752", urualum: "192", juan: "192", aluminiosDelUruguay: "PN 0192"}, this.pieces.horizontalShash.lenght, "Horizontal Shash","Horizontal de Hoja", this.color, this.pieces.horizontalShash.quantity);

        const screenShash = new Frame(this.serie, {abasur: "E4436", urualum: "2314", juan: "214", aluminiosDelUruguay: "PN 2314"}, {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght}, "Screen Shash", "Hoja de Mosquitero", this.color, {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity});

        const screenGuide = new Frame(this.serie, {abasur: "E4821", urualum: "213", juan: "213", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS20.lenght, "Screen Guide S20", "Guía de Mosquitero", this.color, this.pieces.screenGuideS20.quantity);

        const glassWidth = {lenght: this.pieces.glassWidth.lenght, quantity: this.pieces.glassWidth.quantity};

        const glassHeight = {lenght: this.pieces.glassHeight.lenght, quantity: this.pieces.glassHeight.quantity};

        this.frames = {horizontalFrame: horizontalFrame, verticalFrame: verticalFrame, lateralShash: lateralShash, centralShash: centralShash, horizontalShash: horizontalShash, screenShash: screenShash, screenGuide: screenGuide};

        this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};

    }

    if (this.serie === "s25"){

        const inferiorFrame = new Frame(this.serie, {abasur: "E2857", urualum: "2500", juan: "150 o 2500", aluminiosDelUruguay: "Not available"}, this.pieces.inferiorFrame.lenght, "Inferior Frame", "Inferior de Marco", this.color, this.pieces.inferiorFrame.quantity);

        const superiorFrame = new Frame(this.serie, {abasur: "E2858", urualum: "2528", juan: "151 o 2528", aluminiosDelUruguay: "Not available"}, this.pieces.superiorFrame.lenght, "Superior Frame", "Superior de Marco", this.color, this.pieces.superiorFrame.quantity)

        const verticalFrame = new Frame(this.serie, {abasur: "E3513", urualum: "2501", juan: "2501", aluminiosDelUruguay: "Not available"}, this.pieces.verticalFrame.lenght, "Vertical Frame", "Lateral de Marco", this.color, this.pieces.verticalFrame.quantity);

        const lateralShash = new Frame(this.serie, {abasur: "E2862", urualum: "4505", juan: "4505", aluminiosDelUruguay: "Not available"}, this.pieces.lateralShash.lenght, "Lateral Shash", "Lateral de Hoja", this.color, this.pieces.lateralShash.quantity);

        const centralShash = new Frame(this.serie, {abasur: "E2861", urualum: "4507", juan: "155 o 4507", aluminiosDelUruguay: "Not available"}, this.pieces.centralShash.lenght, "Central Shash","Enganche" ,  this.color, this.pieces.centralShash.quantity);

        const horizontalShashBig = new Frame(this.serie, {abasur: "E2859", urualum: "4503", juan: "4503", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashBig.lenght, "Horizontal Shash Big", "Horizontal de Hoja Grueso", this.color, this.pieces.horizontalShashBig.quantity);

        const horizontalShashSmall = new Frame(this.serie, {abasur: "E2863", urualum: "4504", juan: "4504", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashSmall.lenght, "Horizontal Shash Small", "Horizontal de Hoja Fino", this.color, this.pieces.horizontalShashSmall.quantity);

        const screenShash = new Frame(this.serie, {abasur: "E3514", urualum: "2343", juan: "2343", aluminiosDelUruguay: "PN 2343"}, {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght}, "Screen Shash", "Hoja de Mosquitero", this.color, {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity});

        const screenGuideS25L = new Frame(this.serie, {abasur: "E4678", urualum: "213", juan: "213", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25L.lenght, "Screen Guide S25 L", "Guía de Mosquitero S25 L", this.color, this.pieces.screenGuideS25L.quantity);

        const screenGuideS25P = new Frame(this.serie, {abasur: "E4677", urualum: "2344", juan: "2344", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25P.lenght, "Screen Guide S25 P", "Guía de Mosquitero S25 P", this.color, this.pieces.screenGuideS25P.quantity);

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

            glassDvhU = new Frame(this.serie, {abasur: "E4886", urualum: "Not available", juan: "4590", aluminiosDelUruguay: "Not available"}, {width: this.pieces.glassDvhUHorizontal.lenght, height: this.pieces.glassDvhUVertical.lenght}, "U Dvh", "U Dvh", this.color, {widthQuantity: this.pieces.glassDvhUHorizontal.quantity, heightQuantity: this.pieces.glassDvhUVertical.quantity});

            
        }
        

        this.frames = {inferiorFrame: inferiorFrame, superiorFrame: superiorFrame, verticalFrame: verticalFrame, lateralShash: lateralShash, centralShash: centralShash, horizontalShashBig: horizontalShashBig, horizontalShashSmall: horizontalShashSmall, screenShash: screenShash, glassDvhU: glassDvhU, screenGuideS25L: screenGuideS25L, screenGuideS25P: screenGuideS25P};

        this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};

    }
    if (this.serie === "s25TripleRiel"){
            const inferiorFrameTripleRiel = new Frame(this.serie, {abasur: "E4940", urualum: "Not available", juan: "2538", aluminiosDelUruguay: "Not available"}, this.pieces.inferiorFrame.lenght, "Inferior Frame Triple Riel", "Inferior de Marco Triple Riel", this.color, this.pieces.inferiorFrame.quantity);
            const superiorFrameTripleRiel = new Frame(this.serie, {abasur: "E4674", urualum: "Not Available", juan: "2532", aluminiosDelUruguay: "Not available"}, this.pieces.superiorFrame.lenght, "Superior Frame Triple Riel", "Superior de Marco Triple Riel", this.color, this.pieces.superiorFrame.quantity)
            const verticalFrameTripleRiel = new Frame(this.serie, {abasur: "E4676", urualum: "Not available", juan: "2534", aluminiosDelUruguay: "Not available"}, this.pieces.verticalFrame.lenght, "Vertical Frame", "Lateral de Marco Triple Riel", this.color, this.pieces.verticalFrame.quantity);
            const lateralShash = new Frame(this.serie, {abasur: "E2862", urualum: "4505", juan: "4505", aluminiosDelUruguay: "Not available"}, this.pieces.lateralShash.lenght, "Lateral Shash", "Lateral de Hoja", this.color, this.pieces.lateralShash.quantity);
            const centralShash = new Frame(this.serie, {abasur: "E2861", urualum: "4507", juan: "155 o 4507", aluminiosDelUruguay: "Not available"}, this.pieces.centralShash.lenght, "Central Shash", "Enganche", this.color, this.pieces.centralShash.quantity);
            const horizontalShashBig = new Frame(this.serie, {abasur: "E2859", urualum: "4503", juan: "4503", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashBig.lenght, "Horizontal Shash Big", "Horizontal de Hoja Grueso", this.color, this.pieces.horizontalShashBig.quantity);
            const horizontalShashSmall = new Frame(this.serie, {abasur: "E2863", urualum: "4504", juan: "4504", aluminiosDelUruguay: "Not available"}, this.pieces.horizontalShashSmall.lenght, "Horizontal Shash Small", "Horizontal de Hoja Fino", this.color, this.pieces.horizontalShashSmall.quantity);
            const screenShash = new Frame(
              this.serie,
              {abasur: "E2860", urualum: "4506", juan: "4506", aluminiosDelUruguay: "Not available"},
              {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght},
              "Screen Shash",
              this.color,
              {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity}
            );

            const screenGuideS25L = new Frame(this.serie, {abasur: "E4678", urualum: "213", juan: "213", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25L.lenght, "Screen Guide S25 L", "Guía de Mosquitero S25 L", this.color, this.pieces.screenGuideS25L.quantity);

            const screenGuideS25P = new Frame(this.serie, {abasur: "E4677", urualum: "2344", juan: "2344", aluminiosDelUruguay: "PN 0213"}, this.pieces.screenGuideS25P.lenght, "Screen Guide S25 P", "Guia de Mosquitero S25 P", this.color, this.pieces.screenGuideS25P.quantity);
            
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
            glassDvhU = new Frame(this.serie, {abasur: "E4886", urualum: "Not available", juan: "4590", aluminiosDelUruguay: "Not available"}, {width: this.pieces.glassDvhUHorizontal.lenght, height: this.pieces.glassDvhUVertical.lenght}, "U Dvh", "U Dvh",  this.color, {widthQuantity: this.pieces.glassDvhUHorizontal.quantity, heightQuantity: this.pieces.glassDvhUVertical.quantity});
            }

            this.frames = {lateralShash: lateralShash, centralShash: centralShash, horizontalShashBig: horizontalShashBig, horizontalShashSmall: horizontalShashSmall, screenShash: screenShash, glassDvhU: glassDvhU, inferiorFrameTripleRiel: inferiorFrameTripleRiel, superiorFrameTripleRiel: superiorFrameTripleRiel, verticalFrameTripleRiel: verticalFrameTripleRiel, screenGuideS25L: screenGuideS25L, screenGuideS25P: screenGuideS25P};

            this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};
        }

       
 if(this.serie === "probbaCorrediza"){

        const horizontalFrame = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 93150"}, this.pieces.horizontalFrame.lenght, "Horizontal Frame", "Horizontal de Marco", this.color, this.pieces.horizontalFrame.quantity);

        const verticalFrame = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90021"}, this.pieces.verticalFrame.lenght, "Vertical Frame", "Lateral de Marco", this.color, this.pieces.verticalFrame.quantity);

        let glassWidth = {};
        let glassHeight = {};
        let lateralShash = {};
        let centralShash = {};
        let horizontalShash = {};


        if (this.dvh === true) {

        lateralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90031"}, this.pieces.lateralShash.lenght, "Lateral Shash for DVH", "Lateral de Hoja para DVH", this.color, this.pieces.lateralShash.quantity);

        centralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90030"}, this.pieces.centralShash.lenght, "Central Shash for DVH", "Enganche para DVH", this.color, this.pieces.centralShash.quantity);

        horizontalShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90026"}, this.pieces.horizontalShash.lenght, "Horizontal Shash for DVH", "Horizontal de Hoja para DVH", this.color, this.pieces.horizontalShash.quantity);

        glassWidth = {lenght: this.pieces.glassDvhWidth.lenght, quantity: this.pieces.glassDvhWidth.quantity};

        glassHeight = {lenght: this.pieces.glassDvhHeight.lenght, quantity: this.pieces.glassDvhHeight.quantity};

        }

        if (this.dvh === false){

        lateralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90027"}, this.pieces.lateralShash.lenght, "Lateral Shash for Single Glass", "Lateral de Hoja para Vidrio Simple", this.color, this.pieces.lateralShash.quantity);

        centralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90028"}, this.pieces.centralShash.lenght, "Central Shash for Single Glass", "Enganche para Vidrio Simple", this.color, this.pieces.centralShash.quantity);

        horizontalShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90025"}, this.pieces.horizontalShash.lenght, "Horizontal Shash for Single Glass", "Horizontal de Hoja para Vidrio Simple", this.color, this.pieces.horizontalShash.quantity);

        glassWidth = {lenght: this.pieces.glassWidth.lenght, quantity: this.pieces.glassWidth.quantity};

        glassHeight = {lenght: this.pieces.glassHeight.lenght, quantity: this.pieces.glassHeight.quantity};

        

        }

        

        const screenShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 41043"}, {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght}, "Screen Shash", "Hoja de Mosquitero", this.color, {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity});

        const screenGuideProbba = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 93074"}, this.pieces.screenGuideProbba.lenght, "Screen Guide", "Guía de Mosquitero", this.color, this.pieces.screenGuideProbba.quantity);

        this.frames = {horizontalFrame: horizontalFrame, verticalFrame: verticalFrame, lateralShash: lateralShash, centralShash: centralShash, horizontalShash: horizontalShash, screenShash: screenShash, screenGuideProbba: screenGuideProbba};

        this.glass = {glassWidth: glassWidth, glassHeight: glassHeight};
    }


        if(this.serie === "probbaCorredizaTripleRiel"){

        const horizontalFrameTripleRiel = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 93054"}, this.pieces.horizontalFrame.lenght, "Horizontal Frame Triple Riel", "Horizontal de Marco triple Riel", this.color, this.pieces.horizontalFrame.quantity);

        const verticalFrameTripleRiel = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 93073"}, this.pieces.verticalFrame.lenght, "Vertical Frame Triple Riel", "Lateral de Marco Triple Riel", this.color, this.pieces.verticalFrame.quantity);

        let glassWidthLateral = {};
        let glassWidthCentral = {};
        let glassHeight = {};
        let lateralShash = {};
        let centralShash = {};
        let horizontalShashLateral = {};
        let horizontalShashCentral = {};


        if (this.dvh === true) {

        lateralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90031"}, this.pieces.lateralShash.lenght, "Lateral Shash for DVH", "Lateral de Hoja para DVH", this.color, this.pieces.lateralShash.quantity);

        centralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90030"}, this.pieces.centralShash.lenght, "Central Shash for DVH", "Enganche para DVH", this.color, this.pieces.centralShash.quantity);

        horizontalShashLateral = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90026"}, this.pieces.horizontalShashLateral.lenght, "Horizontal Shash for DVH (Lateral Shashes)", "Horizontal de Hoja para DVH (Hojas Laterales)", this.color, this.pieces.horizontalShashLateral.quantity);

        horizontalShashCentral = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90026"}, this.pieces.horizontalShashCentral.lenght, "Horizontal Shash for DVH (Central Shash)", "Horizontal de Hoja para DVH (Hoja Central)", this.color, this.pieces.horizontalShashCentral.quantity);

        glassWidthLateral = {lenght: this.pieces.glassDvhWidthLateral.lenght, quantity: this.pieces.glassDvhWidthLateral.quantity};

        glassWidthCentral = {lenght: this.pieces.glassDvhWidthCentral.lenght, quantity: this.pieces.glassDvhWidthCentral.quantity};

        glassHeight = {lenght: this.pieces.glassDvhHeight.lenght, quantity: this.pieces.glassDvhHeight.quantity};

        }

        if (this.dvh === false){

        lateralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90027"}, this.pieces.lateralShash.lenght, "Lateral Shash for Single Glass", "Lateral de Hoja para Vidrio Simple", this.color, this.pieces.lateralShash.quantity);

        centralShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90028"}, this.pieces.centralShash.lenght, "Central Shash for Single Glass", "Enganche para Vidrio Simple", this.color, this.pieces.centralShash.quantity);

        horizontalShashLateral = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90025"}, this.pieces.horizontalShashLateral.lenght, "Horizontal Shash for Single Glass (Lateral Shashes)", "Horizontal de Hoja para Vidrio Simple (Hojas Laterales)", this.color, this.pieces.horizontalShashLateral.quantity);

        horizontalShashCentral = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 90025"}, this.pieces.horizontalShashCentral.lenght, "Horizontal Shash for Single Glass (Central Shash)", "Horizontal de Hoja para Vidrio Simple (Hoja Central)", this.color, this.pieces.horizontalShashCentral.quantity);

        glassWidthLateral = {lenght: this.pieces.glassWidthLateral.lenght, quantity: this.pieces.glassWidthLateral.quantity};

        glassWidthCentral = {lenght: this.pieces.glassWidthCentral.lenght, quantity: this.pieces.glassWidthCentral.quantity};

        glassHeight = {lenght: this.pieces.glassHeight.lenght, quantity: this.pieces.glassHeight.quantity};

        }

        

        const screenShash = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 41043"}, {width: this.pieces.screenWidth.lenght, height: this.pieces.screenHeight.lenght}, "Screen Shash", "Hoja de Mosquitero", this.color, {widthQuantity: this.pieces.screenWidth.quantity, heightQuantity: this.pieces.screenHeight.quantity});

        const screenGuideProbba = new Frame(this.serie, {abasur: "Not Available", urualum: "Not Available", juan: "Not Available", aluminiosDelUruguay: "PN 93074"}, this.pieces.screenGuideProbba.lenght, "Screen Guide", "Guía de Mosquitero", this.color, this.pieces.screenGuideProbba.quantity);

        this.frames = {horizontalFrame: horizontalFrameTripleRiel, verticalFrame: verticalFrameTripleRiel, lateralShash: lateralShash, centralShash: centralShash, horizontalShashLateral: horizontalShashLateral, horizontalShashCentral: horizontalShashCentral, screenShash: screenShash, screenGuideProbba: screenGuideProbba};

        this.glass = {glassWidthLateral: glassWidthLateral, glassWidthCentral: glassWidthCentral, glassHeight: glassHeight};
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
    let returned = `<h2 class="production-title">${this.quantity} Aberturas de ${this.width} Ancho x ${this.height} Alto ${this.serie} ${this.color} DVH? = ${this.dvh}</h2><ul class="production-list">`;

    // helper: show one decimal only when fractional part is not zero
    const fmt = (v) => {
        if (v === null || v === undefined) return 'N/A';
        if (typeof v === 'number') {
            // si es entero, mostrar sin decimales; si no, mostrar 1 decimal (redondeado)
            return Number.isInteger(v) ? String(v) : v.toFixed(1).replace(/\.0$/, '');
        }
        return v;
    };

    Object.keys(this.frames).forEach(key => {
        if (this.frames[key] !== null && this.frames[key].name) {
            if (this.frames[key].name === "Screen Shash" || this.frames[key].name === "U Dvh") {
                returned += `<li class="production-li">${this.frames[key].spanishName} Anchos = ${fmt(this.frames[key].quantity?.widthQuantity)} de ${fmt(this.frames[key].lenght?.width)} \nAltos = ${fmt(this.frames[key].quantity?.heightQuantity)} de ${fmt(this.frames[key].lenght?.height)}</li>`;
            } else if (
                this.frames[key].name === "Horizontal Frame" ||
                this.frames[key].name === "Inferior Frame" ||
                this.frames[key].name === "Superior Frame" ||
                this.frames[key].name === "Lateral Shash" ||
                this.frames[key].name === "Central Shash" ||
                this.frames[key].name === "Lateral Shash for DVH" ||
                this.frames[key].name === "Central Shash for DVH" ||
                this.frames[key].name === "Lateral Shash for Single Glass" ||
                this.frames[key].name === "Central Shash for Single Glass"
            ) {
                returned += `<li class="production-li">${fmt(this.frames[key].quantity)} ${this.frames[key].spanishName} ${fmt(this.frames[key].lenght)} Mitad = ${fmt(this.frames[key].half)}</li>`;
            } else {
                returned += `<li class="production-li">${fmt(this.frames[key].quantity)} ${this.frames[key].spanishName} ${fmt(this.frames[key].lenght)}</li>`;
            }
        }
    });

    // handle glass variations safely and formatted
    if (this.glass && (this.glass.glassWidthLateral || this.glass.glassWidth)) {
        if (this.glass.glassWidthLateral) {
            const gwL = this.glass.glassWidthLateral ?? { lenght: "N/A", quantity: 0 };
            const gwC = this.glass.glassWidthCentral ?? { lenght: "N/A", quantity: 0 };
            const gh = this.glass.glassHeight ?? { lenght: "N/A", quantity: 0 };
            returned += `<li class="production-li">Ancho de Vidrio Hoja Central = ${fmt(gwC.lenght)} \n Ancho de Vidrios Hojas Laterales = ${fmt(gwL.lenght)}\n Alto de Vidrios = ${fmt(gh.lenght)} \n Cantidad de Vidrios Laterales = ${fmt(gwL.quantity)} \n Cantidad de vidrios centrales = ${fmt(gwC.quantity)}</li>`;
        } else {
            const gw = this.glass.glassWidth ?? { lenght: "N/A", quantity: 0 };
            const gh = this.glass.glassHeight ?? { lenght: "N/A", quantity: 0 };
            returned += `<li class="production-li">Ancho de Vidrio = ${fmt(gw.lenght)}\n Alto de Vidrio = ${fmt(gh.lenght)}\n Cantidad de Vidrios = ${fmt(gw.quantity)}</li>`;
        }
    } else {
        returned += `<li class="production-li">Ancho de Vidrio = N/A Alto de Vidrio = N/A Cantidad de Vidrios = 0</li>`;
    }

    returned += `</ul>`;
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