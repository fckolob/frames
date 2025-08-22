import bar from "./bar.mjs";
export default class calculateMaterials{

    constructor(openings = [], barLenght = 5900){

        this.slice = 4;
        this.barLenght = barLenght;
        this.openings = openings;
        this.frameBars = [];
        this.horizontalFramesS20Anodizado = [];
        this.verticalFramesS20Anodizado = [];
        this.lateralShashesS20Anodizado = [];
        this.centralShashesS20Anodizado = [];
        this.horizontalShashesS20Anodizado = [];
        this.screenShashesS20Anodizado = [];
        this.screenGuideS20Anodizado = [];
        this.inferiorFramesS25Anodizado = [];
        this.superiorFramesS25Anodizado = [];
        this.verticalFramesS25Anodizado = [];
        this.lateralShashesS25Anodizado = [];
        this.centralShashesS25Anodizado = [];
        this.bigHorizontalShashesS25Anodizado = [];
        this.smallHorizontalShashesS25Anodizado = [];
        this.screenGuideS25LAnodizado = [];
        this.screenGuideS25PAnodizado = [];
        this.screenShashesS25Anodizado = [];
        this.glassDvhUsS25Anodizado = [];
        this.InferiorFramesS25TripleRielAnodizado = [];
        this.SuperiorFramesS25TripleRielAnodizado = [];
        this.VerticalFramesS25TripleRielAnodizado = [];
        this.horizontalFramesProbbaAnodizado = [];
        this.verticalFramesProbbaAnodizado = [];
        this.lateralShashesProbbaAnodizado = [];
        this.centralShashesProbbaAnodizado = [];
        this.horizontalShashesProbbaAnodizado = [];
        this.screenShashesProbbaAnodizado = [];
        this.screenGuideProbbaAnodizado = [];
        this.lateralShashesProbbaAnodizado = [];
        this.centralShashesProbbaAnodizado = [];
        this.screenShashesProbbaAnodizado = [];
        this.screenGuideProbbaAnodizado = [];
        this.glassDvhUsProbbaAnodizado = [];

        this.horizontalFramesS20Blanco = [];
        this.verticalFramesS20Blanco =[]
        this.lateralShashesS20Blanco = [];
        this.centralShashesS20Blanco = [];
        this.horizontalShashesS20Blanco = [];
        this.screenShashesS20Blanco = [];
        this.screenGuideS20Blanco = [];
        this.inferiorFramesS25Blanco = [];
        this.superiorFramesS25Blanco = [];
        this.verticalFramesS25Blanco = [];
        this.lateralShashesS25Blanco = [];
        this.centralShashesS25Blanco = [];
        this.bigHorizontalShashesS25Blanco = [];
        this.smallHorizontalShashesS25Blanco = [];
        this.screenShashesS25Blanco = [];
        this.screenGuideS25LBlanco = [];
        this.screenGuideS25PBlanco = [];
        this.glassDvhUsS25Blanco = [];

        this.horizontalFramesS20Anolok = [];
        this.verticalFramesS20Anolok = [];
        this.lateralShashesS20Anolok = [];
        this.centralShashesS20Anolok = [];
        this.horizontalShashesS20Anolok = [];
        this.screenShashesS20Anolok = [];
        this.screenGuideS20Anolok = [];
        this.inferiorFramesS25Anolok = [];
        this.superiorFramesS25Anolok = [];
        this.verticalFramesS25Anolok = [];
        this.lateralShashesS25Anolok = [];
        this.centralShashesS25Anolok = [];
        this.bigHorizontalShashesS25Anolok = [];
        this.smallHorizontalShashesS25Anolok = [];
        this.screenShashesS25Anolok = [];
        this.screenGuideS25LAnolok = [];
        this.screenGuideS25PAnolok = [];
        this.glassDvhUsS25Anolok = [];

        this.horizontalFramesS20ImitacionMadera = [];
        this.verticalFramesS20ImitacionMadera = [];
        this.lateralShashesS20ImitacionMadera = [];
        this.centralShashesS20ImitacionMadera = [];
        this.horizontalShashesS20ImitacionMadera = [];
        this.screenShashesS20ImitacionMadera = [];
        this.screenGuideS20ImitacionMadera = [];
        this.inferiorFramesS25ImitacionMadera = [];
        this.superiorFramesS25ImitacionMadera = [];
        this.verticalFramesS25ImitacionMadera = [];
        this.lateralShashesS25ImitacionMadera = [];
        this.centralShashesS25ImitacionMadera = [];
        this.bigHorizontalShashesS25ImitacionMadera = [];
        this.smallHorizontalShashesS25ImitacionMadera = [];
        this.screenShashesS25ImitacionMadera = [];
        this.screenGuideS25LImitacionMadera = [];
        this.screenGuideS25PImitacionMadera = [];
        this.glassDvhUsS25ImitacionMadera = [];

        this.horizontalFramesS20PintadoNegro = [];
        this.verticalFramesS20PintadoNegro = [];
        this.lateralShashesS20PintadoNegro = [];
        this.centralShashesS20PintadoNegro = [];
        this.horizontalShashesS20PintadoNegro = [];
        this.screenShashesS20PintadoNegro = [];
        this.screenGuideS20PintadoNegro = [];
        this.inferiorFramesS25PintadoNegro = [];
        this.superiorFramesS25PintadoNegro = [];
        this.verticalFramesS25PintadoNegro = [];
        this.lateralShashesS25PintadoNegro = [];
        this.centralShashesS25PintadoNegro = [];
        this.bigHorizontalShashesS25PintadoNegro = [];
        this.smallHorizontalShashesS25PintadoNegro = [];
        this.screenShashesS25PintadoNegro = [];
        this.screenGuideS25LPintadoNegro = [];
        this.screenGuideS25PPintadoNegro = [];
        this.glassDvhUsS25PintadoNegro = [];

        this.InferiorFramesS25TripleRielAnodizado = [];
        this.SuperiorFramesS25TripleRielAnodizado = [];
        this.VerticalFramesS25TripleRielAnodizado = [];
        this.framesArrays = [
        this.InferiorFramesS25TripleRielAnodizado,
        this.SuperiorFramesS25TripleRielAnodizado,
        this.VerticalFramesS25TripleRielAnodizado,    
        this.horizontalFramesS20Anodizado,
        this.verticalFramesS20Anodizado,
        this.lateralShashesS20Anodizado,
        this.centralShashesS20Anodizado,
        this.horizontalShashesS20Anodizado,
        this.screenShashesS20Anodizado,
        this.screenGuideS20Anodizado,
        this.inferiorFramesS25Anodizado,
        this.superiorFramesS25Anodizado,
        this.verticalFramesS25Anodizado,
        this.lateralShashesS25Anodizado,
        this.centralShashesS25Anodizado,
        this.bigHorizontalShashesS25Anodizado,
        this.smallHorizontalShashesS25Anodizado,
        this.screenShashesS25Anodizado,
        this.screenGuideS25LAnodizado,
        this.screenGuideS25PAnodizado,

        this.horizontalFramesS20Blanco,
        this.verticalFramesS20Blanco,
        this.lateralShashesS20Blanco,
        this.centralShashesS20Blanco,
        this.horizontalShashesS20Blanco,
        this.screenShashesS20Blanco,
        this.screenGuideS20Blanco,
        this.inferiorFramesS25Blanco,
        this.superiorFramesS25Blanco,
        this.verticalFramesS25Blanco,
        this.lateralShashesS25Blanco,
        this.centralShashesS25Blanco,
        this.bigHorizontalShashesS25Blanco,
        this.smallHorizontalShashesS25Blanco,
        this.screenShashesS25Blanco,
        this.screenGuideS25LBlanco,
        this.screenGuideS25PBlanco,

        this.horizontalFramesS20Anolok,
        this.verticalFramesS20Anolok,
        this.lateralShashesS20Anolok,
        this.centralShashesS20Anolok,
        this.horizontalShashesS20Anolok,
        this.screenShashesS20Anolok,
        this.screenGuideS20Anolok,
        this.inferiorFramesS25Anolok,
        this.superiorFramesS25Anolok,
        this.verticalFramesS25Anolok,
        this.lateralShashesS25Anolok,
        this.centralShashesS25Anolok,
        this.bigHorizontalShashesS25Anolok,
        this.smallHorizontalShashesS25Anolok,
        this.screenShashesS25Anolok,
        this.screenGuideS25LAnolok,
        this.screenGuideS25PAnolok,

        this.horizontalFramesS20ImitacionMadera,
        this.verticalFramesS20ImitacionMadera,
        this.lateralShashesS20ImitacionMadera,
        this.centralShashesS20ImitacionMadera,
        this.horizontalShashesS20ImitacionMadera,
        this.screenShashesS20ImitacionMadera,
        this.screenGuideS20ImitacionMadera,
        this.inferiorFramesS25ImitacionMadera,
        this.superiorFramesS25ImitacionMadera,
        this.verticalFramesS25ImitacionMadera,
        this.lateralShashesS25ImitacionMadera,
        this.centralShashesS25ImitacionMadera,
        this.bigHorizontalShashesS25ImitacionMadera,
        this.smallHorizontalShashesS25ImitacionMadera,
        this.screenShashesS25ImitacionMadera,
        this.screenGuideS25LImitacionMadera,
        this.screenGuideS25PImitacionMadera,

        this.horizontalFramesS20PintadoNegro,
        this.verticalFramesS20PintadoNegro,
        this.lateralShashesS20PintadoNegro,
        this.centralShashesS20PintadoNegro,
        this.horizontalShashesS20PintadoNegro,
        this.screenShashesS20PintadoNegro,
        this.screenGuideS20PintadoNegro,
        this.inferiorFramesS25PintadoNegro,
        this.superiorFramesS25PintadoNegro,
        this.verticalFramesS25PintadoNegro,
        this.lateralShashesS25PintadoNegro,
        this.centralShashesS25PintadoNegro,
        this.bigHorizontalShashesS25PintadoNegro,
        this.smallHorizontalShashesS25PintadoNegro,
        this.screenShashesS25PintadoNegro,
        this.screenGuideS25LPintadoNegro,
        this.screenGuideS25PPintadoNegro
    ]

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

                this.screenGuideS20Anodizado.push(opening.frames.screenGuide);
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
                this.screenGuideS25LAnodizado.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PAnodizado.push(opening.frames.screenGuideS25P);
            }

            if(opening.serie === "s20" && opening.color === "blanco"){
                this.horizontalFramesS20Blanco.push(opening.frames.horizontalFrame);
                this.verticalFramesS20Blanco.push(opening.frames.verticalFrame);
                this.lateralShashesS20Blanco.push(opening.frames.lateralShash);
                this.centralShashesS20Blanco.push(opening.frames.centralShash);
                this.horizontalShashesS20Blanco.push(opening.frames.horizontalShash);
                this.screenShashesS20Blanco.push(opening.frames.screenShash);
                this.screenGuideS20Blanco.push(opening.frames.screenGuide);
            }

            if(opening.serie === "s25" && opening.color === "blanco"){
                if(opening.dvh === true){
                    this.glassDvhUsS25Blanco.push(opening.frames.glassDvhU);
                }

                this.inferiorFramesS25Blanco.push(opening.frames.inferiorFrame);
                this.superiorFramesS25Blanco.push(opening.frames.superiorFrame);
                this.verticalFramesS25Blanco.push(opening.frames.verticalFrame);
                this.lateralShashesS25Blanco.push(opening.frames.lateralShash);
                this.centralShashesS25Blanco.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25Blanco.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25Blanco.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25Blanco.push(opening.frames.screenShash);
                this.screenGuideS25LBlanco.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PBlanco.push(opening.frames.screenGuideS25P);

            }
            if(opening.serie === "s20" && opening.color === "anolok"){
                this.horizontalFramesS20Anolok.push(opening.frames.horizontalFrame);
                this.verticalFramesS20Anolok.push(opening.frames.verticalFrame);
                this.lateralShashesS20Anolok.push(opening.frames.lateralShash);
                this.centralShashesS20Anolok.push(opening.frames.centralShash);
                this.horizontalShashesS20Anolok.push(opening.frames.horizontalShash);
                this.screenShashesS20Anolok.push(opening.frames.screenShash);
                this.screenGuideS20Anolok.push(opening.frames.screenGuide);
            }
            if(opening.serie === "s25" && opening.color === "anolok"){
                if(opening.dvh === true){
                    this.glassDvhUsS25Anolok.push(opening.frames.glassDvhU);
                }

                this.inferiorFramesS25Anolok.push(opening.frames.inferiorFrame);
                this.superiorFramesS25Anolok.push(opening.frames.superiorFrame);
                this.verticalFramesS25Anolok.push(opening.frames.verticalFrame);
                this.lateralShashesS25Anolok.push(opening.frames.lateralShash);
                this.centralShashesS25Anolok.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25Anolok.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25Anolok.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25Anolok.push(opening.frames.screenShash);
                this.screenGuideS25LAnolok.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PAnolok.push(opening.frames.screenGuideS25P);
            }

            if(opening.serie === "s20" && opening.color === "imitacionMadera"){
                this.horizontalFramesS20ImitacionMadera.push(opening.frames.horizontalFrame);
                this.verticalFramesS20ImitacionMadera.push(opening.frames.verticalFrame);
                this.lateralShashesS20ImitacionMadera.push(opening.frames.lateralShash);
                this.centralShashesS20ImitacionMadera.push(opening.frames.centralShash);
                this.horizontalShashesS20ImitacionMadera.push(opening.frames.horizontalShash);
                this.screenShashesS20ImitacionMadera.push(opening.frames.screenShash);
                this.screenGuideS20ImitacionMadera.push(opening.frames.screenGuide);
            }
            if(opening.serie === "s25" && opening.color === "imitacionMadera"){
                if(opening.dvh === true){
                    this.glassDvhUsS25ImitacionMadera.push(opening.frames.glassDvhU);
                }

                this.inferiorFramesS25ImitacionMadera.push(opening.frames.inferiorFrame);
                this.superiorFramesS25ImitacionMadera.push(opening.frames.superiorFrame);
                this.verticalFramesS25ImitacionMadera.push(opening.frames.verticalFrame);
                this.lateralShashesS25ImitacionMadera.push(opening.frames.lateralShash);
                this.centralShashesS25ImitacionMadera.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25ImitacionMadera.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25ImitacionMadera.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25ImitacionMadera.push(opening.frames.screenShash);
                this.screenGuideS25LImitacionMadera.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PImitacionMadera.push(opening.frames.screenGuideS25P);
            }
            if(opening.serie === "s20" && opening.color === "pintadoNegro"){
                this.horizontalFramesS20PintadoNegro.push(opening.frames.horizontalFrame);
                this.verticalFramesS20PintadoNegro.push(opening.frames.verticalFrame);
                this.lateralShashesS20PintadoNegro.push(opening.frames.lateralShash);
                this.centralShashesS20PintadoNegro.push(opening.frames.centralShash);
                this.horizontalShashesS20PintadoNegro.push(opening.frames.horizontalShash);
                this.screenShashesS20PintadoNegro.push(opening.frames.screenShash);
                this.screenGuideS20PintadoNegro.push(opening.frames.screenGuide);
            }
            if(opening.serie === "s25" && opening.color === "pintadoNegro"){
                if(opening.dvh === true){
                    this.glassDvhUsS25PintadoNegro.push(opening.frames.glassDvhU);
                }
                this.inferiorFramesS25PintadoNegro.push(opening.frames.inferiorFrame);
                this.superiorFramesS25PintadoNegro.push(opening.frames.superiorFrame);
                this.verticalFramesS25PintadoNegro.push(opening.frames.verticalFrame);
                this.lateralShashesS25PintadoNegro.push(opening.frames.lateralShash);
                this.centralShashesS25PintadoNegro.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25PintadoNegro.push(opening.frames.screenShash);
                this.screenGuideS25PPintadoNegro.push(opening.frames.screenGuide);
                this.screenGuideS25LPintadoNegro.push(opening.frames.screenGuideS25L);
            }
            if(opening.serie === "s25" && opening.color === "blanco"){
                if(opening.dvh === true){
                    this.glassDvhUsS25Blanco.push(opening.frames.glassDvhU);
                }
                this.inferiorFramesS25Blanco.push(opening.frames.inferiorFrame);
                this.superiorFramesS25Blanco.push(opening.frames.superiorFrame);
                this.verticalFramesS25Blanco.push(opening.frames.verticalFrame);
                this.lateralShashesS25Blanco.push(opening.frames.lateralShash);
                this.centralShashesS25Blanco.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25Blanco.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25Blanco.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25Blanco.push(opening.frames.screenShash);
                this.screenGuideS25LBlanco.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PBlanco.push(opening.frames.screenGuideS25P);
            }

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
                this.screenGuideS25LAnodizado.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PAnodizado.push(opening.frames.screenGuideS25P);
            }

            if(opening.serie === "probbaCorrediza" && opening.color === "anodizado"){

                

                if(opening.dvh === true){
                    this.glassDvhUsProbbaAnodizado.push(opening.frames.glassDvhU);
                }
                this.horizontalFramesProbbaAnodizado.push(opening.frames.horizontalFrame);
                this.verticalFramesProbbaAnodizado.push(opening.frames.verticalFrame);
                this.lateralShashesProbbaAnodizado.push(opening.frames.lateralShash);
                this.centralShashesProbbaAnodizado.push(opening.frames.centralShash);
                this.horizontalShashesProbbaAnodizado.push(opening.frames.horizontalShash);
                this.screenShashesProbbaAnodizado.push(opening.frames.screenShash);
                this.screenGuideProbbaAnodizado.push(opening.frames.screenGuideProbba);
            }
        });

        //Reconstruyendo frame arrays.
        this.framesArrays = [
            this.InferiorFramesS25TripleRielAnodizado,
            this.SuperiorFramesS25TripleRielAnodizado,
            this.VerticalFramesS25TripleRielAnodizado,   
            this.horizontalFramesS20Anodizado,
            this.verticalFramesS20Anodizado,
            this.lateralShashesS20Anodizado,
            this.centralShashesS20Anodizado,
            this.horizontalShashesS20Anodizado,
            this.screenShashesS20Anodizado,
            this.screenGuideS20Anodizado,
            this.inferiorFramesS25Anodizado,
            this.superiorFramesS25Anodizado,
            this.verticalFramesS25Anodizado,
            this.lateralShashesS25Anodizado,
            this.centralShashesS25Anodizado,
            this.bigHorizontalShashesS25Anodizado,
            this.smallHorizontalShashesS25Anodizado,
            this.screenShashesS25Anodizado,
            this.screenGuideS25LAnodizado,
            this.screenGuideS25PAnodizado,
            this.glassDvhUsS25Anodizado,
            this.horizontalFramesProbbaAnodizado,
            this.verticalFramesProbbaAnodizado,
            this.lateralShashesProbbaAnodizado,
            this.centralShashesProbbaAnodizado,
            this.horizontalShashesProbbaAnodizado,
            this.screenShashesProbbaAnodizado,
            this.screenGuideProbbaAnodizado,

            this.horizontalFramesS20Blanco,
            this.verticalFramesS20Blanco,
            this.lateralShashesS20Blanco,
            this.centralShashesS20Blanco,
            this.horizontalShashesS20Blanco,
            this.screenShashesS20Blanco,
            this.screenGuideS20Blanco,
            this.inferiorFramesS25Blanco,
            this.superiorFramesS25Blanco,
            this.verticalFramesS25Blanco,
            this.lateralShashesS25Blanco,
            this.centralShashesS25Blanco,
            this.bigHorizontalShashesS25Blanco,
            this.smallHorizontalShashesS25Blanco,
            this.screenShashesS25Blanco,
            this.screenGuideS25LBlanco,
            this.screenGuideS25PBlanco,

            this.horizontalFramesS20Anolok,
            this.verticalFramesS20Anolok,
            this.lateralShashesS20Anolok,
            this.centralShashesS20Anolok,
            this.horizontalShashesS20Anolok,
            this.screenShashesS20Anolok,
            this.screenGuideS20Anolok,
            this.inferiorFramesS25Anolok,
            this.superiorFramesS25Anolok,
            this.verticalFramesS25Anolok,
            this.lateralShashesS25Anolok,
            this.centralShashesS25Anolok,
            this.bigHorizontalShashesS25Anolok,
            this.smallHorizontalShashesS25Anolok,
            this.screenShashesS25Anolok,
            this.screenGuideS25LAnolok,
            this.screenGuideS25PAnolok,
            this.horizontalFramesS20ImitacionMadera,
            this.verticalFramesS20ImitacionMadera,
            this.lateralShashesS20ImitacionMadera,
            this.centralShashesS20ImitacionMadera,
            this.horizontalShashesS20ImitacionMadera,
            this.screenShashesS20ImitacionMadera,
            this.screenGuideS20ImitacionMadera,
            this.inferiorFramesS25ImitacionMadera,
            this.superiorFramesS25ImitacionMadera,
            this.verticalFramesS25ImitacionMadera,
            this.lateralShashesS25ImitacionMadera,
            this.centralShashesS25ImitacionMadera,
            this.bigHorizontalShashesS25ImitacionMadera,
            this.smallHorizontalShashesS25ImitacionMadera,
            this.screenShashesS25ImitacionMadera,
            this.screenGuideS25LImitacionMadera,
            this.screenGuideS25PImitacionMadera,

            this.horizontalFramesS20PintadoNegro,
            this.verticalFramesS20PintadoNegro,
            this.lateralShashesS20PintadoNegro,
            this.centralShashesS20PintadoNegro,
            this.horizontalShashesS20PintadoNegro,
            this.screenShashesS20PintadoNegro,
            this.screenGuideS20PintadoNegro,
            this.inferiorFramesS25PintadoNegro,
            this.superiorFramesS25PintadoNegro,
            this.verticalFramesS25PintadoNegro,
            this.lateralShashesS25PintadoNegro,
            this.centralShashesS25PintadoNegro,
            this.bigHorizontalShashesS25PintadoNegro,
            this.smallHorizontalShashesS25PintadoNegro,
            this.screenShashesS25PintadoNegro,
            this.screenGuideS25LPintadoNegro,
            this.screenGuideS25PPintadoNegro
        ];
    }

    calculateLenghtGroups(frames) {
        let frameElements = [];
        frames.forEach(frame => {
            if (frame.name === "Screen Shash") {
                for (let index = 0; index < frame.quantity.widthQuantity; index++) {
                    frameElements.push(frame.lenght.width);
                }
                // FIXED: typo here (was heigthQuantity)
                for (let index = 0; index < frame.quantity.heightQuantity; index++) {
                    frameElements.push(frame.lenght.height);
                }
            } else if (frame.name === "U Dvh") {
                for (let index = 0; index < frame.quantity.widthQuantity; index++) {
                    frameElements.push(frame.lenght.width);
                }
                for (let index = 0; index < frame.quantity.heightQuantity; index++) {
                    frameElements.push(frame.lenght.height);
                }
            } else {
                for (let index = 0; index < frame.quantity; index++) {
                    frameElements.push(frame.lenght);
                }
            }
        });
        return frameElements;
    }

    calculateFrameBarsQuantity(lenghtGroup){
        let elements = 0;
        let bars = 1;
        lenghtGroup.forEach(lenght => {
            elements = elements + lenght + this.slice;
            if(elements >= this.barLenght){
                bars += 1;
                elements = lenght + this.slice;
            }
        });
        return bars;
    }
    
    async calculateFrameBars(){
        
        await this.classificateFrames();
        this.frameBars = []; // Limpia antes de calcular

        this.framesArrays.forEach(frameArray => {
            if(Array.isArray(frameArray) && frameArray.length > 0 && frameArray[0]) {
                // Filtrando frames undefined.
                const validFrames = frameArray.filter(f => f && typeof f.quantity !== "undefined" && typeof f.lenght !== "undefined");
                if(validFrames.length > 0){
                    // Detecta si el frame es de probbaCorrediza
                    const isProbba = validFrames[0].serie === "probbaCorrediza";
                    const barLengthToUse = isProbba ? 6700 : this.barLenght;

                    const lenghtGroup = this.calculateLenghtGroups(validFrames);
                    const barsQuantity = this.calculateFrameBarsQuantityWithCustomLength(lenghtGroup, barLengthToUse);

                    // ...tu lógica para crear el objeto bar y pushearlo...
                    // Ejemplo:
                    if(barsQuantity > 0){
                        this.frameBars.push(
                            new bar(
                                barsQuantity,
                                validFrames[0].name,
                                validFrames[0].serie,
                                validFrames[0].color,
                                validFrames[0].code
                            )
                        );
                    }
                }
            }
        });
    }

    // Nuevo método para permitir longitud de barra personalizada
    calculateFrameBarsQuantityWithCustomLength(lenghtGroup, barLength) {
        let elements = 0;
        let bars = 1;
        lenghtGroup.forEach(lenght => {
            elements = elements + lenght + this.slice;
            if(elements >= barLength){
                bars += 1;
                elements = lenght + this.slice;
            }
        });
        return bars;
    }
    
    init(){
        this.calculateFrameBars()
    }

   async getFrameBars(){
    await this.init();
    return this.frameBars;
   }
}