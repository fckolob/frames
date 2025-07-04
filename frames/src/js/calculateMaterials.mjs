import bar from "./bar.mjs";
export default class calculateMaterials{

    constructor(openings = [], barLenght = 6000){

        this.barLenght = barLenght;
        this.openings = openings;
        this.frameBars = [];
        this.horizontalFramesS20Anodizado = [];
        this.verticalFramesS20Anodizado = [];
        this.lateralShashesS20Anodizado = [];
        this.centralShashesS20Anodizado = [];
        this.horizontalShashesS20Anodizado = [];
        this.screenShashesS20Anodizado = [];
        this.inferiorFramesS25Anodizado = [];
        this.superiorFramesS25Anodizado = [];
        this.verticalFramesS25Anodizado = [];
        this.lateralShashesS25Anodizado = [];
        this.centralShashesS25Anodizado = [];
        this.bigHorizontalShashesS25Anodizado = [];
        this.smallHorizontalShashesS25Anodizado = [];
        this.screenShashesS25Anodizado = [];
        this.glassDvhUsS25Anodizado = [];

        this.horizontalFramesS20Blanco = [];
        this.verticalFramesS20Blanco =[]
        this.lateralShashesS20Blanco = [];
        this.centralShashesS20Blanco = [];
        this.horizontalShashesS20Blanco = [];
        this.screenShashesS20Blanco = [];
        this.inferiorFramesS25Blanco = [];
        this.superiorFramesS25Blanco = [];
        this.verticalFramesS25Blanco = [];
        this.lateralShashesS25Blanco = [];
        this.centralShashesS25Blanco = [];
        this.bigHorizontalShashesS25Blanco = [];
        this.smallHorizontalShashesS25Blanco = null;
        this.screenShashesS25Blanco = [];

        this.horizontalFramesS20Anolok = [];
        this.verticalFramesS20Anolok = [];
        this.lateralShashesS20Anolok = [];
        this.centralShashesS20Anolok = [];
        this.horizontalShashesS20Anolok = [];
        this.screenShashesS20Anolok = [];
        this.inferiorFramesS25Anolok = [];
        this.superiorFramesS25Anolok = [];
        this.verticalFramesS25Anolok = [];
        this.lateralShashesS25Anolok = [];
        this.centralShashesS25Anolok = [];
        this.bigHorizontalShashesS25Anolok = [];
        this.smallHorizontalShashesS25Anolok = [];
        this.screenShashesS25Anolok = [];

        this.horizontalFramesS20ImitacionMadera = [];
        this.verticalFramesS20ImitacionMadera = [];
        this.lateralShashesS20ImitacionMadera = [];
        this.centralShashesS20ImitacionMadera = [];
        this.horizontalShashesS20ImitacionMadera = [];
        this.screenShashesS20ImitacionMadera = [];
        this.inferiorFramesS25ImitacionMadera = [];
        this.superiorFramesS25ImitacionMadera = [];
        this.verticalFramesS25ImitacionMadera = [];
        this.lateralShashesS25ImitacionMadera = [];
        this.centralShashesS25ImitacionMadera = [];
        this.bigHorizontalShashesS25ImitacionMadera = [];
        this.smallHorizontalShashesS25ImitacionMadera = [];
        this.screenShashesS25ImitacionMadera = [];

        this.horizontalFramesS20PintadoNegro = [];
        this.verticalFramesS20PintadoNegro = [];
        this.lateralShashesS20PintadoNegro = [];
        this.centralShashesS20PintadoNegro = [];
        this.horizontalShashesS20PintadoNegro = [];
        this.screenShashesS20PintadoNegro = [];
        this.inferiorFramesS25PintadoNegro = [];
        this.superiorFramesS25PintadoNegro = [];
        this.verticalFramesS25PintadoNegro = [];
        this.lateralShashesS25PintadoNegro = [];
        this.centralShashesS25PintadoNegro = [];
        this.bigHorizontalShashesS25PintadoNegro = [];
        this.smallHorizontalShashesS25PintadoNegro = [];
        this.screenShashesS25PintadoNegro = [];
        
        this.framesArrays = [this.horizontalFramesS20Anodizado,
        this.verticalFramesS20Anodizado,
        this.lateralShashesS20Anodizado,
        this.centralShashesS20Anodizado,
        this.horizontalShashesS20Anodizado,
        this.screenShashesS20Anodizado,
        this.inferiorFramesS25Anodizado,
        this.superiorFramesS25Anodizado,
        this.verticalFramesS25Anodizado,
        this.lateralShashesS25Anodizado,
        this.centralShashesS25Anodizado,
        this.bigHorizontalShashesS25Anodizado,
        this.smallHorizontalShashesS25Anodizado,
        this.screenShashesS25Anodizado,

        this.horizontalFramesS20Blanco,
        this.verticalFramesS20Blanco,
        this.lateralShashesS20Blanco,
        this.centralShashesS20Blanco,
        this.horizontalShashesS20Blanco,
        this.screenShashesS20Blanco,
        this.inferiorFramesS25Blanco,
        this.superiorFramesS25Blanco,
        this.verticalFramesS25Blanco,
        this.lateralShashesS25Blanco,
        this.centralShashesS25Blanco,
        this.bigHorizontalShashesS25Blanco,
        this.smallHorizontalShashesS25Blanco,
        this.screenShashesS25Blanco,

        this.horizontalFramesS20Anolok,
        this.verticalFramesS20Anolok,
        this.lateralShashesS20Anolok,
        this.centralShashesS20Anolok,
        this.horizontalShashesS20Anolok,
        this.screenShashesS20Anolok,
        this.inferiorFramesS25Anolok,
        this.superiorFramesS25Anolok,
        this.verticalFramesS25Anolok,
        this.lateralShashesS25Anolok,
        this.centralShashesS25Anolok,
        this.bigHorizontalShashesS25Anolok,
        this.smallHorizontalShashesS25Anolok,
        this.screenShashesS25Anolok,

        this.horizontalFramesS20ImitacionMadera,
        this.verticalFramesS20ImitacionMadera,
        this.lateralShashesS20ImitacionMadera,
        this.centralShashesS20ImitacionMadera,
        this.horizontalShashesS20ImitacionMadera,
        this.screenShashesS20ImitacionMadera,
        this.inferiorFramesS25ImitacionMadera,
        this.superiorFramesS25ImitacionMadera,
        this.verticalFramesS25ImitacionMadera,
        this.lateralShashesS25ImitacionMadera,
        this.centralShashesS25ImitacionMadera,
        this.bigHorizontalShashesS25ImitacionMadera,
        this.smallHorizontalShashesS25ImitacionMadera,
        this.screenShashesS25ImitacionMadera,

        this.horizontalFramesS20PintadoNegro,
        this.verticalFramesS20PintadoNegro,
        this.lateralShashesS20PintadoNegro,
        this.centralShashesS20PintadoNegro,
        this.horizontalShashesS20PintadoNegro,
        this.screenShashesS20PintadoNegro,
        this.inferiorFramesS25PintadoNegro,
        this.superiorFramesS25PintadoNegro,
        this.verticalFramesS25PintadoNegro,
        this.lateralShashesS25PintadoNegro,
        this.centralShashesS25PintadoNegro,
        this.bigHorizontalShashesS25PintadoNegro,
        this.smallHorizontalShashesS25PintadoNegro,
        this.screenShashesS25PintadoNegro]

    }

    classificateFrames(){
        this.openings.forEach(opening => {
            if(opening.serie === "s20" && opening.color === "anodizado"){
                this.horizontalFramesS20Anodizado.push(opening.frames.horizontalFrame);

                
                this.verticalFramesS20Anodizado.push(opening.frames.verticalFrame);

                
                this.lateralShashesS20Anodizado.push(opening.frames.lateralShash);

                
                this.centralShashesS20Anodizado.push(opening.frames.centralShash);

                
                this.horizontalShashesS20Anodizado.push(opening.frames.horizontalShash);

                
                this.screenShashesS20Anodizado.push(opening.frames.screenShash);
            }

            if(opening.serie === "s25" && opening.color === "anodizado"){
                if(opening.dvh === true){
                    this.glassDvhUsS25Anodizado.push(opening.frames.glassDvhU);
                }

                this.inferiorFramesS25Anodizado.push(opening.frames.inferiorFrame);
                this.superiorFramesS25Anodizado.push(opening.frames.superiorFrame);
                this.verticalFramesS25Anodizado.push(opening.frames.verticalFrame);
                this.lateralShashesS25Anodizado.push(opening.frames.lateralShash);
                this.centralShashesS25Anodizado.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25Anodizado.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25Anodizado.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25Anodizado.push(opening.frames.screenShash);
            }
        });

        //Reconstruyendo frame arrays.
        this.framesArrays = [
            this.horizontalFramesS20Anodizado,
            this.verticalFramesS20Anodizado,
            this.lateralShashesS20Anodizado,
            this.centralShashesS20Anodizado,
            this.horizontalShashesS20Anodizado,
            this.screenShashesS20Anodizado,
            this.inferiorFramesS25Anodizado,
            this.superiorFramesS25Anodizado,
            this.verticalFramesS25Anodizado,
            this.lateralShashesS25Anodizado,
            this.centralShashesS25Anodizado,
            this.bigHorizontalShashesS25Anodizado,
            this.smallHorizontalShashesS25Anodizado,
            this.screenShashesS25Anodizado,
            this.glassDvhUsS25Anodizado,

            this.horizontalFramesS20Blanco,
            this.verticalFramesS20Blanco,
            this.lateralShashesS20Blanco,
            this.centralShashesS20Blanco,
            this.horizontalShashesS20Blanco,
            this.screenShashesS20Blanco,
            this.inferiorFramesS25Blanco,
            this.superiorFramesS25Blanco,
            this.verticalFramesS25Blanco,
            this.lateralShashesS25Blanco,
            this.centralShashesS25Blanco,
            this.bigHorizontalShashesS25Blanco,
            this.smallHorizontalShashesS25Blanco,
            this.screenShashesS25Blanco,

            this.horizontalFramesS20Anolok,
            this.verticalFramesS20Anolok,
            this.lateralShashesS20Anolok,
            this.centralShashesS20Anolok,
            this.horizontalShashesS20Anolok,
            this.screenShashesS20Anolok,
            this.inferiorFramesS25Anolok,
            this.superiorFramesS25Anolok,
            this.verticalFramesS25Anolok,
            this.lateralShashesS25Anolok,
            this.centralShashesS25Anolok,
            this.bigHorizontalShashesS25Anolok,
            this.smallHorizontalShashesS25Anolok,
            this.screenShashesS25Anolok,

            this.horizontalFramesS20ImitacionMadera,
            this.verticalFramesS20ImitacionMadera,
            this.lateralShashesS20ImitacionMadera,
            this.centralShashesS20ImitacionMadera,
            this.horizontalShashesS20ImitacionMadera,
            this.screenShashesS20ImitacionMadera,
            this.inferiorFramesS25ImitacionMadera,
            this.superiorFramesS25ImitacionMadera,
            this.verticalFramesS25ImitacionMadera,
            this.lateralShashesS25ImitacionMadera,
            this.centralShashesS25ImitacionMadera,
            this.bigHorizontalShashesS25ImitacionMadera,
            this.smallHorizontalShashesS25ImitacionMadera,
            this.screenShashesS25ImitacionMadera,

            this.horizontalFramesS20PintadoNegro,
            this.verticalFramesS20PintadoNegro,
            this.lateralShashesS20PintadoNegro,
            this.centralShashesS20PintadoNegro,
            this.horizontalShashesS20PintadoNegro,
            this.screenShashesS20PintadoNegro,
            this.inferiorFramesS25PintadoNegro,
            this.superiorFramesS25PintadoNegro,
            this.verticalFramesS25PintadoNegro,
            this.lateralShashesS25PintadoNegro,
            this.centralShashesS25PintadoNegro,
            this.bigHorizontalShashesS25PintadoNegro,
            this.smallHorizontalShashesS25PintadoNegro,
            this.screenShashesS25PintadoNegro
        ];
    }

    calculateLenghtGroups(frames){

        let frameElements = [];
        


        frames.forEach(frame => {

            if(frame.name === "Screen Shash"){

                for (let index = 0; index < frame.quantity.widthQuantity; index++) {
        frameElements.push(frame.lenght.width);}

                for (let index = 0; index < frame.quantity.heigthQuantity; index++) {
        frameElements.push(frame.lenght.height);}
                    
            }


        if(frame.name === "U Dvh"){

                for (let index = 0; index < frame.quantity.widthQuantity; index++) {
        frameElements.push(frame.lenght.width);}

                for (let index = 0; index < frame.quantity.heigthQuantity; index++) {
        frameElements.push(frame.lenght.height);}
                    
            }
            else{
         
            for (let index = 0; index < frame.quantity; index++) {
        frameElements.push(frame.lenght);}}


        });

        return frameElements;

    }

    calculateFrameBarsQuantity(lenghtGroup){
        let elements = 0;
        let bars = 1;
        lenghtGroup.forEach(lenght => {
            elements = elements + lenght;
            if(elements >= this.barLenght){
                bars += 1;
                elements = lenght;
            }
        });
        return bars;
    }
    
    async calculateFrameBars(){
        
        await this.classificateFrames();
    this.framesArrays.forEach(frameArray => {
        if(Array.isArray(frameArray) && frameArray.length > 0 && frameArray[0]) {
            // Filtrando frames undefined.
            const validFrames = frameArray.filter(f => f && typeof f.quantity !== "undefined" && typeof f.lenght !== "undefined");
            if(validFrames.length > 0){
                let bar1 = new bar(
                    this.calculateFrameBarsQuantity(this.calculateLenghtGroups(validFrames)),
                    validFrames[0].name,
                    validFrames[0].serie,
                    validFrames[0].color,
                    validFrames[0].code
                );
                this.frameBars.push(bar1);
            }
        }
    });
}

   init(){
        this.calculateFrameBars()
    }

   async getFrameBars(){
    await this.init();
    return this.frameBars;
   }
}