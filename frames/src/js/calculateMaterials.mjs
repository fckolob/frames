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
        this.horizontalFramesTripleRielProbbaAnodizado = [];
        this.verticalFramesProbbaAnodizado = [];
        this.verticalFramesTripleRielProbbaAnodizado = [];
        this.lateralShashesProbbaSingleGlassAnodizado = [];
        this.lateralShashesProbbaDvhAnodizado = [];
        this.centralShashesProbbaSingleGlassAnodizado = [];
        this.centralShashesProbbaDvhAnodizado = [];
        this.horizontalShashesProbbaSingleGlassAnodizado = [];
        this.horizontalShashesProbbaDvhAnodizado = [];
        this.screenShashesProbbaAnodizado = [];
        this.screenGuideProbbaAnodizado = [];
        this.glassDvhUsProbbaAnodizado = [];

        this.horizontalFramesGalaCuatroRielesAnodizado = [];
        this.verticalFramesGalaCuatroRielesAnodizado = [];
        this.lateralShashesGalaSingleGlassAnodizado = [];
        this.lateralShashesGalaDvhAnodizado = [];
        this.centralShashesGalaSingleGlassAnodizado = [];
        this.centralShashesGalaDvhAnodizado = [];
        this.horizontalShashesGalaSingleGlassAnodizado = [];
        this.horizontalShashesGalaDvhAnodizado = [];
        this.horizontalFramesGalaTripleRielAnodizado = [];
        this.verticalFramesGalaTripleRielAnodizado = [];

        this.horizontalFramesS20Blanco = [];
        this.verticalFramesS20Blanco = [];
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
        this.InferiorFramesS25TripleRielBlanco = [];
        this.SuperiorFramesS25TripleRielBlanco = [];
        this.VerticalFramesS25TripleRielBlanco = [];
        this.horizontalFramesProbbaBlanco = [];
        this.horizontalFramesTripleRielProbbaBlanco = [];
        this.verticalFramesProbbaBlanco = [];
        this.verticalFramesTripleRielProbbaBlanco = [];
        this.lateralShashesProbbaSingleGlassBlanco = [];
        this.lateralShashesProbbaDvhBlanco = [];
        this.centralShashesProbbaSingleGlassBlanco = [];
        this.centralShashesProbbaDvhBlanco = [];
        this.horizontalShashesProbbaSingleGlassBlanco = [];
        this.horizontalShashesProbbaDvhBlanco = [];
        this.screenShashesProbbaBlanco = [];
        this.screenGuideProbbaBlanco = [];
        this.glassDvhUsProbbaBlanco = [];

        this.horizontalFramesGalaCuatroRielesBlanco = [];
        this.verticalFramesGalaCuatroRielesBlanco = [];
        this.lateralShashesGalaSingleGlassBlanco = [];
        this.lateralShashesGalaDvhBlanco = [];
        this.centralShashesGalaSingleGlassBlanco = [];
        this.centralShashesGalaDvhBlanco = [];
        this.horizontalShashesGalaSingleGlassBlanco = [];
        this.horizontalShashesGalaDvhBlanco = [];
        this.horizontalFramesGalaTripleRielBlanco = [];
        this.verticalFramesGalaTripleRielBlanco = [];

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
        this.InferiorFramesS25TripleRielAnolok = [];
        this.SuperiorFramesS25TripleRielAnolok = [];
        this.VerticalFramesS25TripleRielAnolok = [];
        this.horizontalFramesProbbaAnolok = [];
        this.horizontalFramesTripleRielProbbaAnolok = [];
        this.verticalFramesProbbaAnolok = [];
        this.verticalFramesTripleRielProbbaAnolok = [];
        this.lateralShashesProbbaSingleGlassAnolok = [];
        this.lateralShashesProbbaDvhAnolok = [];
        this.centralShashesProbbaSingleGlassAnolok = [];
        this.centralShashesProbbaDvhAnolok = [];
        this.horizontalShashesProbbaSingleGlassAnolok = [];
        this.horizontalShashesProbbaDvhAnolok = [];
        this.screenShashesProbbaAnolok = [];
        this.screenGuideProbbaAnolok = [];
        this.glassDvhUsProbbaAnolok = [];

        this.horizontalFramesGalaCuatroRielesAnolok = [];
        this.verticalFramesGalaCuatroRielesAnolok = [];
        this.lateralShashesGalaSingleGlassAnolok = [];
        this.lateralShashesGalaDvhAnolok = [];
        this.centralShashesGalaSingleGlassAnolok = [];
        this.centralShashesGalaDvhAnolok = [];
        this.horizontalShashesGalaSingleGlassAnolok = [];
        this.horizontalShashesGalaDvhAnolok = [];
        this.horizontalFramesGalaTripleRielAnolok = [];
        this.verticalFramesGalaTripleRielAnolok = [];

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
        this.InferiorFramesS25TripleRielImitacionMadera = [];
        this.SuperiorFramesS25TripleRielImitacionMadera = [];
        this.VerticalFramesS25TripleRielImitacionMadera = [];
        this.horizontalFramesProbbaImitacionMadera = [];
        this.horizontalFramesTripleRielProbbaImitacionMadera = [];
        this.verticalFramesProbbaImitacionMadera = [];
        this.verticalFramesTripleRielProbbaImitacionMadera = [];
        this.lateralShashesProbbaSingleGlassImitacionMadera = [];
        this.lateralShashesProbbaDvhImitacionMadera = [];
        this.centralShashesProbbaSingleGlassImitacionMadera = [];
        this.centralShashesProbbaDvhImitacionMadera = [];
        this.horizontalShashesProbbaSingleGlassImitacionMadera = [];
        this.horizontalShashesProbbaDvhImitacionMadera = [];
        this.screenShashesProbbaImitacionMadera = [];
        this.screenGuideProbbaImitacionMadera = [];
        this.glassDvhUsProbbaImitacionMadera = [];

        this.horizontalFramesGalaCuatroRielesImitacionMadera = [];
        this.verticalFramesGalaCuatroRielesImitacionMadera = [];
        this.lateralShashesGalaSingleGlassImitacionMadera = [];
        this.lateralShashesGalaDvhImitacionMadera = [];
        this.centralShashesGalaSingleGlassImitacionMadera = [];
        this.centralShashesGalaDvhImitacionMadera = [];
        this.horizontalShashesGalaSingleGlassImitacionMadera = [];
        this.horizontalShashesGalaDvhImitacionMadera = [];
        this.horizontalFramesGalaTripleRielImitacionMadera = [];
        this.verticalFramesGalaTripleRielImitacionMadera = [];

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
        this.InferiorFramesS25TripleRielPintadoNegro = [];
        this.SuperiorFramesS25TripleRielPintadoNegro = [];
        this.VerticalFramesS25TripleRielPintadoNegro = [];
        this.horizontalFramesProbbaPintadoNegro = [];
        this.horizontalFramesTripleRielProbbaPintadoNegro = [];
        this.verticalFramesProbbaPintadoNegro = [];
        this.verticalFramesTripleRielProbbaPintadoNegro = [];
        this.lateralShashesProbbaSingleGlassPintadoNegro = [];
        this.lateralShashesProbbaDvhPintadoNegro = [];
        this.centralShashesProbbaSingleGlassPintadoNegro = [];
        this.centralShashesProbbaDvhPintadoNegro = [];
        this.horizontalShashesProbbaSingleGlassPintadoNegro = [];
        this.horizontalShashesProbbaDvhPintadoNegro = [];
        this.screenShashesProbbaPintadoNegro = [];
        this.screenGuideProbbaPintadoNegro = [];
        this.glassDvhUsProbbaPintadoNegro = [];

        this.horizontalFramesGalaCuatroRielesPintadoNegro = [];
        this.verticalFramesGalaCuatroRielesPintadoNegro = [];
        this.lateralShashesGalaSingleGlassPintadoNegro = [];
        this.lateralShashesGalaDvhPintadoNegro = [];
        this.centralShashesGalaSingleGlassPintadoNegro = [];
        this.centralShashesGalaDvhPintadoNegro = [];
        this.horizontalShashesGalaSingleGlassPintadoNegro = [];
        this.horizontalShashesGalaDvhPintadoNegro = [];
        this.horizontalFramesGalaTripleRielPintadoNegro = [];
        this.verticalFramesGalaTripleRielPintadoNegro = [];

        this.framesArrays = []; // This will be assigned at the end of calculateMaterials constructor or classificateFrames

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

            if(opening.serie === "s25TripleRiel" && opening.color === "blanco"){
                if(opening.dvh === true){
                    this.glassDvhUsS25Blanco.push(opening.frames.glassDvhU);
                }
                this.InferiorFramesS25TripleRielBlanco.push(opening.frames.inferiorFrameTripleRiel);
                this.SuperiorFramesS25TripleRielBlanco.push(opening.frames.superiorFrameTripleRiel);
                this.VerticalFramesS25TripleRielBlanco.push(opening.frames.verticalFrameTripleRiel);
                this.lateralShashesS25Blanco.push(opening.frames.lateralShash);
                this.centralShashesS25Blanco.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25Blanco.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25Blanco.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25Blanco.push(opening.frames.screenShash);
                this.screenGuideS25LBlanco.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PBlanco.push(opening.frames.screenGuideS25P);
            }

            if(opening.serie === "s25TripleRiel" && opening.color === "anolok"){
                if(opening.dvh === true){
                    this.glassDvhUsS25Anolok.push(opening.frames.glassDvhU);
                }
                this.InferiorFramesS25TripleRielAnolok.push(opening.frames.inferiorFrameTripleRiel);
                this.SuperiorFramesS25TripleRielAnolok.push(opening.frames.superiorFrameTripleRiel);
                this.VerticalFramesS25TripleRielAnolok.push(opening.frames.verticalFrameTripleRiel);
                this.lateralShashesS25Anolok.push(opening.frames.lateralShash);
                this.centralShashesS25Anolok.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25Anolok.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25Anolok.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25Anolok.push(opening.frames.screenShash);
                this.screenGuideS25LAnolok.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PAnolok.push(opening.frames.screenGuideS25P);
            }

            if(opening.serie === "s25TripleRiel" && opening.color === "imitacionMadera"){
                if(opening.dvh === true){
                    this.glassDvhUsS25ImitacionMadera.push(opening.frames.glassDvhU);
                }
                this.InferiorFramesS25TripleRielImitacionMadera.push(opening.frames.inferiorFrameTripleRiel);
                this.SuperiorFramesS25TripleRielImitacionMadera.push(opening.frames.superiorFrameTripleRiel);
                this.VerticalFramesS25TripleRielImitacionMadera.push(opening.frames.verticalFrameTripleRiel);
                this.lateralShashesS25ImitacionMadera.push(opening.frames.lateralShash);
                this.centralShashesS25ImitacionMadera.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25ImitacionMadera.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25ImitacionMadera.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25ImitacionMadera.push(opening.frames.screenShash);
                this.screenGuideS25LImitacionMadera.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PImitacionMadera.push(opening.frames.screenGuideS25P);
            }

            if(opening.serie === "s25TripleRiel" && opening.color === "pintadoNegro"){
                if(opening.dvh === true){
                    this.glassDvhUsS25PintadoNegro.push(opening.frames.glassDvhU);
                }
                this.InferiorFramesS25TripleRielPintadoNegro.push(opening.frames.inferiorFrameTripleRiel);
                this.SuperiorFramesS25TripleRielPintadoNegro.push(opening.frames.superiorFrameTripleRiel);
                this.VerticalFramesS25TripleRielPintadoNegro.push(opening.frames.verticalFrameTripleRiel);
                this.lateralShashesS25PintadoNegro.push(opening.frames.lateralShash);
                this.centralShashesS25PintadoNegro.push(opening.frames.centralShash);
                this.bigHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashBig);
                this.smallHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashSmall);
                this.screenShashesS25PintadoNegro.push(opening.frames.screenShash);
                this.screenGuideS25LPintadoNegro.push(opening.frames.screenGuideS25L);
                this.screenGuideS25PPintadoNegro.push(opening.frames.screenGuideS25P);
            }

            if(opening.serie === "probbaCorrediza" && opening.color === "anodizado"){
                if(opening.dvh === true){
                    this.glassDvhUsProbbaAnodizado.push(opening.frames.glassDvhU);
                    this.lateralShashesProbbaDvhAnodizado.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhAnodizado.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhAnodizado.push(opening.frames.horizontalShash);
                } else {
                    this.lateralShashesProbbaSingleGlassAnodizado.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassAnodizado.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassAnodizado.push(opening.frames.horizontalShash);
                }
                this.horizontalFramesProbbaAnodizado.push(opening.frames.horizontalFrame);
                this.verticalFramesProbbaAnodizado.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnodizado.push(opening.frames.screenShash);
                this.screenGuideProbbaAnodizado.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaCuatroRieles" && opening.color === "anodizado"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhAnodizado.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhAnodizado.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhAnodizado.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhAnodizado.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassAnodizado.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassAnodizado.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassAnodizado.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassAnodizado.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaCuatroRielesAnodizado.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaCuatroRielesAnodizado.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnodizado.push(opening.frames.screenShash);
                this.screenGuideProbbaAnodizado.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaTripleRiel" && opening.color === "anodizado"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhAnodizado.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhAnodizado.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhAnodizado.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhAnodizado.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassAnodizado.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassAnodizado.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassAnodizado.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassAnodizado.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaTripleRielAnodizado.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaTripleRielAnodizado.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnodizado.push(opening.frames.screenShash);
                this.screenGuideProbbaAnodizado.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorrediza" && opening.color === "blanco"){
                if(opening.dvh === true){
                    this.glassDvhUsProbbaBlanco.push(opening.frames.glassDvhU);
                    this.lateralShashesProbbaDvhBlanco.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhBlanco.push(opening.frames.horizontalShash);
                } else {
                    this.lateralShashesProbbaSingleGlassBlanco.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassBlanco.push(opening.frames.horizontalShash);
                }
                this.horizontalFramesProbbaBlanco.push(opening.frames.horizontalFrame);
                this.verticalFramesProbbaBlanco.push(opening.frames.verticalFrame);
                this.screenShashesProbbaBlanco.push(opening.frames.screenShash);
                this.screenGuideProbbaBlanco.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaCuatroRieles" && opening.color === "blanco"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhBlanco.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhBlanco.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhBlanco.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassBlanco.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassBlanco.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassBlanco.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaCuatroRielesBlanco.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaCuatroRielesBlanco.push(opening.frames.verticalFrame);
                this.screenShashesProbbaBlanco.push(opening.frames.screenShash);
                this.screenGuideProbbaBlanco.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaTripleRiel" && opening.color === "blanco"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhBlanco.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhBlanco.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhBlanco.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassBlanco.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassBlanco.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassBlanco.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaTripleRielBlanco.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaTripleRielBlanco.push(opening.frames.verticalFrame);
                this.screenShashesProbbaBlanco.push(opening.frames.screenShash);
                this.screenGuideProbbaBlanco.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorrediza" && opening.color === "anolok"){
                if(opening.dvh === true){
                    this.glassDvhUsProbbaAnolok.push(opening.frames.glassDvhU);
                    this.lateralShashesProbbaDvhAnolok.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhAnolok.push(opening.frames.horizontalShash);
                } else {
                    this.lateralShashesProbbaSingleGlassAnolok.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassAnolok.push(opening.frames.horizontalShash);
                }
                this.horizontalFramesProbbaAnolok.push(opening.frames.horizontalFrame);
                this.verticalFramesProbbaAnolok.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnolok.push(opening.frames.screenShash);
                this.screenGuideProbbaAnolok.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaCuatroRieles" && opening.color === "anolok"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhAnolok.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhAnolok.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhAnolok.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassAnolok.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassAnolok.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassAnolok.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaCuatroRielesAnolok.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaCuatroRielesAnolok.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnolok.push(opening.frames.screenShash);
                this.screenGuideProbbaAnolok.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaTripleRiel" && opening.color === "anolok"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhAnolok.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhAnolok.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhAnolok.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassAnolok.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassAnolok.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassAnolok.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaTripleRielAnolok.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaTripleRielAnolok.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnolok.push(opening.frames.screenShash);
                this.screenGuideProbbaAnolok.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorrediza" && opening.color === "imitacionMadera"){
                if(opening.dvh === true){
                    this.glassDvhUsProbbaImitacionMadera.push(opening.frames.glassDvhU);
                    this.lateralShashesProbbaDvhImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhImitacionMadera.push(opening.frames.horizontalShash);
                } else {
                    this.lateralShashesProbbaSingleGlassImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassImitacionMadera.push(opening.frames.horizontalShash);
                }
                this.horizontalFramesProbbaImitacionMadera.push(opening.frames.horizontalFrame);
                this.verticalFramesProbbaImitacionMadera.push(opening.frames.verticalFrame);
                this.screenShashesProbbaImitacionMadera.push(opening.frames.screenShash);
                this.screenGuideProbbaImitacionMadera.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaCuatroRieles" && opening.color === "imitacionMadera"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhImitacionMadera.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhImitacionMadera.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassImitacionMadera.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassImitacionMadera.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaCuatroRielesImitacionMadera.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaCuatroRielesImitacionMadera.push(opening.frames.verticalFrame);
                this.screenShashesProbbaImitacionMadera.push(opening.frames.screenShash);
                this.screenGuideProbbaImitacionMadera.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaTripleRiel" && opening.color === "imitacionMadera"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhImitacionMadera.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhImitacionMadera.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassImitacionMadera.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassImitacionMadera.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaTripleRielImitacionMadera.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaTripleRielImitacionMadera.push(opening.frames.verticalFrame);
                this.screenShashesProbbaImitacionMadera.push(opening.frames.screenShash);
                this.screenGuideProbbaImitacionMadera.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorrediza" && opening.color === "pintadoNegro"){
                if(opening.dvh === true){
                    this.glassDvhUsProbbaPintadoNegro.push(opening.frames.glassDvhU);
                    this.lateralShashesProbbaDvhPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhPintadoNegro.push(opening.frames.horizontalShash);
                } else {
                    this.lateralShashesProbbaSingleGlassPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassPintadoNegro.push(opening.frames.horizontalShash);
                }
                this.horizontalFramesProbbaPintadoNegro.push(opening.frames.horizontalFrame);
                this.verticalFramesProbbaPintadoNegro.push(opening.frames.verticalFrame);
                this.screenShashesProbbaPintadoNegro.push(opening.frames.screenShash);
                this.screenGuideProbbaPintadoNegro.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaCuatroRieles" && opening.color === "pintadoNegro"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhPintadoNegro.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhPintadoNegro.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassPintadoNegro.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassPintadoNegro.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaCuatroRielesPintadoNegro.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaCuatroRielesPintadoNegro.push(opening.frames.verticalFrame);
                this.screenShashesProbbaPintadoNegro.push(opening.frames.screenShash);
                this.screenGuideProbbaPintadoNegro.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "galaCorredizaTripleRiel" && opening.color === "pintadoNegro"){
                if(opening.dvh === true){
                    this.lateralShashesGalaDvhPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesGalaDvhPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesGalaDvhPintadoNegro.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaDvhPintadoNegro.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesGalaSingleGlassPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesGalaSingleGlassPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesGalaSingleGlassPintadoNegro.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesGalaSingleGlassPintadoNegro.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesGalaTripleRielPintadoNegro.push(opening.frames.horizontalFrame);
                this.verticalFramesGalaTripleRielPintadoNegro.push(opening.frames.verticalFrame);
                this.screenShashesProbbaPintadoNegro.push(opening.frames.screenShash);
                this.screenGuideProbbaPintadoNegro.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorredizaTripleRiel" && opening.color === "anodizado"){
                if(opening.dvh === true){
                   this.lateralShashesProbbaDvhAnodizado.push(opening.frames.lateralShash);
                   this.centralShashesProbbaDvhAnodizado.push(opening.frames.centralShash);
                   this.horizontalShashesProbbaDvhAnodizado.push(opening.frames.horizontalShashLateral);
                   this.horizontalShashesProbbaDvhAnodizado.push(opening.frames.horizontalShashCentral);
                } else {
                   this.lateralShashesProbbaSingleGlassAnodizado.push(opening.frames.lateralShash);
                   this.centralShashesProbbaSingleGlassAnodizado.push(opening.frames.centralShash);
                   this.horizontalShashesProbbaSingleGlassAnodizado.push(opening.frames.horizontalShashLateral);
                   this.horizontalShashesProbbaSingleGlassAnodizado.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesTripleRielProbbaAnodizado.push(opening.frames.horizontalFrame);
                this.verticalFramesTripleRielProbbaAnodizado.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnodizado.push(opening.frames.screenShash);
                this.screenGuideProbbaAnodizado.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorredizaTripleRiel" && opening.color === "blanco"){
                if(opening.dvh === true){
                    this.lateralShashesProbbaDvhBlanco.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhBlanco.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaDvhBlanco.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesProbbaSingleGlassBlanco.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassBlanco.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassBlanco.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaSingleGlassBlanco.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesTripleRielProbbaBlanco.push(opening.frames.horizontalFrame);
                this.verticalFramesTripleRielProbbaBlanco.push(opening.frames.verticalFrame);
                this.screenShashesProbbaBlanco.push(opening.frames.screenShash);
                this.screenGuideProbbaBlanco.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorredizaTripleRiel" && opening.color === "anolok"){
                if(opening.dvh === true){
                    this.lateralShashesProbbaDvhAnolok.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhAnolok.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaDvhAnolok.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesProbbaSingleGlassAnolok.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassAnolok.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassAnolok.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaSingleGlassAnolok.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesTripleRielProbbaAnolok.push(opening.frames.horizontalFrame);
                this.verticalFramesTripleRielProbbaAnolok.push(opening.frames.verticalFrame);
                this.screenShashesProbbaAnolok.push(opening.frames.screenShash);
                this.screenGuideProbbaAnolok.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorredizaTripleRiel" && opening.color === "imitacionMadera"){
                if(opening.dvh === true){
                    this.lateralShashesProbbaDvhImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhImitacionMadera.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaDvhImitacionMadera.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesProbbaSingleGlassImitacionMadera.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassImitacionMadera.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassImitacionMadera.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaSingleGlassImitacionMadera.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesTripleRielProbbaImitacionMadera.push(opening.frames.horizontalFrame);
                this.verticalFramesTripleRielProbbaImitacionMadera.push(opening.frames.verticalFrame);
                this.screenShashesProbbaImitacionMadera.push(opening.frames.screenShash);
                this.screenGuideProbbaImitacionMadera.push(opening.frames.screenGuideProbba);
            }

            if(opening.serie === "probbaCorredizaTripleRiel" && opening.color === "pintadoNegro"){
                if(opening.dvh === true){
                    this.lateralShashesProbbaDvhPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesProbbaDvhPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaDvhPintadoNegro.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaDvhPintadoNegro.push(opening.frames.horizontalShashCentral);
                } else {
                    this.lateralShashesProbbaSingleGlassPintadoNegro.push(opening.frames.lateralShash);
                    this.centralShashesProbbaSingleGlassPintadoNegro.push(opening.frames.centralShash);
                    this.horizontalShashesProbbaSingleGlassPintadoNegro.push(opening.frames.horizontalShashLateral);
                    this.horizontalShashesProbbaSingleGlassPintadoNegro.push(opening.frames.horizontalShashCentral);
                }
                this.horizontalFramesTripleRielProbbaPintadoNegro.push(opening.frames.horizontalFrame);
                this.verticalFramesTripleRielProbbaPintadoNegro.push(opening.frames.verticalFrame);
                this.screenShashesProbbaPintadoNegro.push(opening.frames.screenShash);
                this.screenGuideProbbaPintadoNegro.push(opening.frames.screenGuideProbba);
            }
        });

        //Reconstruyendo frame arrays.
        this.framesArrays = [
            this.InferiorFramesS25TripleRielAnodizado,
            this.SuperiorFramesS25TripleRielAnodizado,
            this.VerticalFramesS25TripleRielAnodizado,
            this.InferiorFramesS25TripleRielBlanco,
            this.SuperiorFramesS25TripleRielBlanco,
            this.VerticalFramesS25TripleRielBlanco,
            this.InferiorFramesS25TripleRielAnolok,
            this.SuperiorFramesS25TripleRielAnolok,
            this.VerticalFramesS25TripleRielAnolok,
            this.InferiorFramesS25TripleRielImitacionMadera,
            this.SuperiorFramesS25TripleRielImitacionMadera,
            this.VerticalFramesS25TripleRielImitacionMadera,
            this.InferiorFramesS25TripleRielPintadoNegro,
            this.SuperiorFramesS25TripleRielPintadoNegro,
            this.VerticalFramesS25TripleRielPintadoNegro,

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
            this.lateralShashesProbbaSingleGlassAnodizado,
            this.lateralShashesProbbaDvhAnodizado,
            this.centralShashesProbbaSingleGlassAnodizado,
            this.centralShashesProbbaDvhAnodizado,
            this.horizontalShashesProbbaSingleGlassAnodizado,
            this.horizontalShashesProbbaDvhAnodizado,
            this.screenShashesProbbaAnodizado,
            this.screenGuideProbbaAnodizado,
            this.horizontalFramesTripleRielProbbaAnodizado,
            this.verticalFramesTripleRielProbbaAnodizado,
            this.glassDvhUsProbbaAnodizado,

            this.horizontalFramesGalaCuatroRielesAnodizado,
            this.verticalFramesGalaCuatroRielesAnodizado,
            this.lateralShashesGalaSingleGlassAnodizado,
            this.lateralShashesGalaDvhAnodizado,
            this.centralShashesGalaSingleGlassAnodizado,
            this.centralShashesGalaDvhAnodizado,
            this.horizontalShashesGalaSingleGlassAnodizado,
            this.horizontalShashesGalaDvhAnodizado,
            this.horizontalFramesGalaTripleRielAnodizado,
            this.verticalFramesGalaTripleRielAnodizado,

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
            this.glassDvhUsS25Blanco,

            this.horizontalFramesProbbaBlanco,
            this.verticalFramesProbbaBlanco,
            this.lateralShashesProbbaSingleGlassBlanco,
            this.lateralShashesProbbaDvhBlanco,
            this.centralShashesProbbaSingleGlassBlanco,
            this.centralShashesProbbaDvhBlanco,
            this.horizontalShashesProbbaSingleGlassBlanco,
            this.horizontalShashesProbbaDvhBlanco,
            this.screenShashesProbbaBlanco,
            this.screenGuideProbbaBlanco,
            this.horizontalFramesTripleRielProbbaBlanco,
            this.verticalFramesTripleRielProbbaBlanco,
            this.glassDvhUsProbbaBlanco,

            this.horizontalFramesGalaCuatroRielesBlanco,
            this.verticalFramesGalaCuatroRielesBlanco,
            this.lateralShashesGalaSingleGlassBlanco,
            this.lateralShashesGalaDvhBlanco,
            this.centralShashesGalaSingleGlassBlanco,
            this.centralShashesGalaDvhBlanco,
            this.horizontalShashesGalaSingleGlassBlanco,
            this.horizontalShashesGalaDvhBlanco,
            this.horizontalFramesGalaTripleRielBlanco,
            this.verticalFramesGalaTripleRielBlanco,

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
            this.glassDvhUsS25Anolok,

            this.horizontalFramesProbbaAnolok,
            this.verticalFramesProbbaAnolok,
            this.lateralShashesProbbaSingleGlassAnolok,
            this.lateralShashesProbbaDvhAnolok,
            this.centralShashesProbbaSingleGlassAnolok,
            this.centralShashesProbbaDvhAnolok,
            this.horizontalShashesProbbaSingleGlassAnolok,
            this.horizontalShashesProbbaDvhAnolok,
            this.screenShashesProbbaAnolok,
            this.screenGuideProbbaAnolok,
            this.horizontalFramesTripleRielProbbaAnolok,
            this.verticalFramesTripleRielProbbaAnolok,
            this.glassDvhUsProbbaAnolok,

            this.horizontalFramesGalaCuatroRielesAnolok,
            this.verticalFramesGalaCuatroRielesAnolok,
            this.lateralShashesGalaSingleGlassAnolok,
            this.lateralShashesGalaDvhAnolok,
            this.centralShashesGalaSingleGlassAnolok,
            this.centralShashesGalaDvhAnolok,
            this.horizontalShashesGalaSingleGlassAnolok,
            this.horizontalShashesGalaDvhAnolok,
            this.horizontalFramesGalaTripleRielAnolok,
            this.verticalFramesGalaTripleRielAnolok,

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
            this.glassDvhUsS25ImitacionMadera,

            this.horizontalFramesProbbaImitacionMadera,
            this.verticalFramesProbbaImitacionMadera,
            this.lateralShashesProbbaSingleGlassImitacionMadera,
            this.lateralShashesProbbaDvhImitacionMadera,
            this.centralShashesProbbaSingleGlassImitacionMadera,
            this.centralShashesProbbaDvhImitacionMadera,
            this.horizontalShashesProbbaSingleGlassImitacionMadera,
            this.horizontalShashesProbbaDvhImitacionMadera,
            this.screenShashesProbbaImitacionMadera,
            this.screenGuideProbbaImitacionMadera,
            this.horizontalFramesTripleRielProbbaImitacionMadera,
            this.verticalFramesTripleRielProbbaImitacionMadera,
            this.glassDvhUsProbbaImitacionMadera,

            this.horizontalFramesGalaCuatroRielesImitacionMadera,
            this.verticalFramesGalaCuatroRielesImitacionMadera,
            this.lateralShashesGalaSingleGlassImitacionMadera,
            this.lateralShashesGalaDvhImitacionMadera,
            this.centralShashesGalaSingleGlassImitacionMadera,
            this.centralShashesGalaDvhImitacionMadera,
            this.horizontalShashesGalaSingleGlassImitacionMadera,
            this.horizontalShashesGalaDvhImitacionMadera,
            this.horizontalFramesGalaTripleRielImitacionMadera,
            this.verticalFramesGalaTripleRielImitacionMadera,

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
            this.screenGuideS25PPintadoNegro,
            this.glassDvhUsS25PintadoNegro,

            this.horizontalFramesProbbaPintadoNegro,
            this.verticalFramesProbbaPintadoNegro,
            this.lateralShashesProbbaSingleGlassPintadoNegro,
            this.lateralShashesProbbaDvhPintadoNegro,
            this.centralShashesProbbaSingleGlassPintadoNegro,
            this.centralShashesProbbaDvhPintadoNegro,
            this.horizontalShashesProbbaSingleGlassPintadoNegro,
            this.horizontalShashesProbbaDvhPintadoNegro,
            this.screenShashesProbbaPintadoNegro,
            this.screenGuideProbbaPintadoNegro,
            this.horizontalFramesTripleRielProbbaPintadoNegro,
            this.verticalFramesTripleRielProbbaPintadoNegro,
            this.glassDvhUsProbbaPintadoNegro,

            this.horizontalFramesGalaCuatroRielesPintadoNegro,
            this.verticalFramesGalaCuatroRielesPintadoNegro,
            this.lateralShashesGalaSingleGlassPintadoNegro,
            this.lateralShashesGalaDvhPintadoNegro,
            this.centralShashesGalaSingleGlassPintadoNegro,
            this.centralShashesGalaDvhPintadoNegro,
            this.horizontalShashesGalaSingleGlassPintadoNegro,
            this.horizontalShashesGalaDvhPintadoNegro,
            this.horizontalFramesGalaTripleRielPintadoNegro,
            this.verticalFramesGalaTripleRielPintadoNegro,
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
        console.log(`${frameElements} lenghtgroup of ${frames[0].name}`)
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
                    // Detecta si el frame es de probbaCorrediza o galaCorredizaCuatroRieles
                    const isCustomLengthSerie = validFrames[0].serie === "probbaCorrediza" || validFrames[0].serie === "probbaCorredizaTripleRiel" || validFrames[0].serie === "galaCorredizaCuatroRieles" || validFrames[0].serie === "galaCorredizaTripleRiel";
                    const barLengthToUse = isCustomLengthSerie ? 6700 : this.barLenght;

                    const lenghtGroup = this.calculateLenghtGroups(validFrames);
                    const barsQuantity = this.calculateFrameBarsQuantityWithCustomLength(lenghtGroup, barLengthToUse);

                    // ...tu lógica para crear el objeto bar y pushearlo...
                    // Ejemplo:
                    if(barsQuantity > 0){
                        this.frameBars.push(
                            new bar(
                                barsQuantity,
                                validFrames[0].spanishName,
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
        if (lenghtGroup.length > 18) {
            return greedyBinPacking([...lenghtGroup], barLength, 4);
        }
        const pieces = [...lenghtGroup].sort((a, b) => b - a);
        const memo = new Map();

        function helper(index, remains) {
            // Remove remains that are too small
            const filteredRemains = remains.filter(r => r >= Math.min(...pieces.slice(index)) + 4);
            const key = index + '|' + filteredRemains.join(',');
            if (memo.has(key)) return memo.get(key);

            if (index === pieces.length) return 0;

            let minBars = Infinity;
            const piece = pieces[index];

            for (let i = 0; i < filteredRemains.length; i++) {
                if (filteredRemains[i] >= piece + 4) {
                    const newRemains = filteredRemains.slice();
                    newRemains[i] -= (piece + 4);
                    minBars = Math.min(minBars, helper(index + 1, newRemains));
                }
            }

            const newRemain = barLength - (piece + 4);
            minBars = Math.min(minBars, 1 + helper(index + 1, remains.concat([newRemain])));

            memo.set(key, minBars);
            return minBars;
        }

        return helper(0, []);
    }
    
    init(){
        this.calculateFrameBars()
    }

   async getFrameBars(){
    await this.init();
    return this.frameBars;
   }
}

function greedyBinPacking(pieces, barLength, slice = 4) {
    const bins = [];
    pieces.sort((a, b) => b - a);
    for (let piece of pieces) {
        let placed = false;
        for (let i = 0; i < bins.length; i++) {
            if (bins[i] >= piece + slice) {
                bins[i] -= (piece + slice);
                placed = true;
                break;
            }
        }
        if (!placed) {
            bins.push(barLength - (piece + slice));
        }
    }
    return bins.length;
}

