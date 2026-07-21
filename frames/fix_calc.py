import re

with open('src/js/calculateMaterials.mjs', 'r', encoding='utf-8') as f:
    content = f.read()

colors_map = [
    ("anodizado", "Anodizado"),
    ("blanco", "Blanco"),
    ("anolok", "Anolok"),
    ("imitacionMadera", "ImitacionMadera"),
]

for color, capColor in colors_map:
    pattern = rf'            if\(opening\.serie === "s25" && opening\.color === "{color}"\)\{{\s*if\(opening\.dvh === true\)\{{\s*this\.glassDvhUsS25{capColor}\.push\(opening\.frames\.glassDvhU\);\s*\}}\s*this\.inferiorFramesS25{capColor}\.push\(opening\.frames\.inferiorFrame\);\s*this\.superiorFramesS25{capColor}\.push\(opening\.frames\.superiorFrame\);\s*this\.verticalFramesS25{capColor}\.push\(opening\.frames\.verticalFrame\);\s*this\.lateralShashesS25{capColor}\.push\(opening\.frames\.lateralShash\);\s*this\.centralShashesS25{capColor}\.push\(opening\.frames\.centralShash\);\s*this\.bigHorizontalShashesS25{capColor}\.push\(opening\.frames\.horizontalShashBig\);\s*this\.smallHorizontalShashesS25{capColor}\.push\(opening\.frames\.horizontalShashSmall\);\s*this\.screenShashesS25{capColor}\.push\(opening\.frames\.screenShash\);\s*this\.screenGuideS25L{capColor}\.push\(opening\.frames\.screenGuideS25L\);\s*this\.screenGuideS25P{capColor}\.push\(opening\.frames\.screenGuideS25P\);\s*\}}'
    
    rep = f'''            if((opening.serie === "s25" || opening.serie === "s25TresHojasEnDosRieles") && opening.color === "{color}"){{
                if(opening.dvh === true){{
                    this.glassDvhUsS25{capColor}.push(opening.frames.glassDvhU);
                    if (opening.frames.glassDvhUFix) this.glassDvhUsS25{capColor}.push(opening.frames.glassDvhUFix);
                }}
                this.inferiorFramesS25{capColor}.push(opening.frames.inferiorFrame);
                this.superiorFramesS25{capColor}.push(opening.frames.superiorFrame);
                this.verticalFramesS25{capColor}.push(opening.frames.verticalFrame);
                this.lateralShashesS25{capColor}.push(opening.frames.lateralShash);
                if (opening.frames.lateralShashFix) this.lateralShashesS25{capColor}.push(opening.frames.lateralShashFix);
                this.centralShashesS25{capColor}.push(opening.frames.centralShash);
                if (opening.frames.centralShashFix) this.centralShashesS25{capColor}.push(opening.frames.centralShashFix);
                this.bigHorizontalShashesS25{capColor}.push(opening.frames.horizontalShashBig);
                if (opening.frames.horizontalShashBigFix) this.bigHorizontalShashesS25{capColor}.push(opening.frames.horizontalShashBigFix);
                this.smallHorizontalShashesS25{capColor}.push(opening.frames.horizontalShashSmall);
                if (opening.frames.horizontalShashSmallFix) this.smallHorizontalShashesS25{capColor}.push(opening.frames.horizontalShashSmallFix);
                this.screenShashesS25{capColor}.push(opening.frames.screenShash);
                if (opening.frames.screenGuideS25L) this.screenGuideS25L{capColor}.push(opening.frames.screenGuideS25L);
                if (opening.frames.screenGuideS25P) this.screenGuideS25P{capColor}.push(opening.frames.screenGuideS25P);
            }}'''
    
    content = re.sub(pattern, rep, content)

pat_negro = r'            if\(opening\.serie === "s25" && opening\.color === "pintadoNegro"\)\{{\s*if\(opening\.dvh === true\)\{{\s*this\.glassDvhUsS25PintadoNegro\.push\(opening\.frames\.glassDvhU\);\s*\}}\s*this\.inferiorFramesS25PintadoNegro\.push\(opening\.frames\.inferiorFrame\);\s*this\.superiorFramesS25PintadoNegro\.push\(opening\.frames\.superiorFrame\);\s*this\.verticalFramesS25PintadoNegro\.push\(opening\.frames\.verticalFrame\);\s*this\.lateralShashesS25PintadoNegro\.push\(opening\.frames\.lateralShash\);\s*this\.centralShashesS25PintadoNegro\.push\(opening\.frames\.centralShash\);\s*this\.bigHorizontalShashesS25PintadoNegro\.push\(opening\.frames\.horizontalShashBig\);\s*this\.smallHorizontalShashesS25PintadoNegro\.push\(opening\.frames\.horizontalShashSmall\);\s*this\.screenShashesS25PintadoNegro\.push\(opening\.frames\.screenShash\);\s*this\.screenGuideS25PPintadoNegro\.push\(opening\.frames\.screenGuide\);\s*\}}'

rep_negro = f'''            if((opening.serie === "s25" || opening.serie === "s25TresHojasEnDosRieles") && opening.color === "pintadoNegro"){{
                if(opening.dvh === true){{
                    this.glassDvhUsS25PintadoNegro.push(opening.frames.glassDvhU);
                    if (opening.frames.glassDvhUFix) this.glassDvhUsS25PintadoNegro.push(opening.frames.glassDvhUFix);
                }}
                this.inferiorFramesS25PintadoNegro.push(opening.frames.inferiorFrame);
                this.superiorFramesS25PintadoNegro.push(opening.frames.superiorFrame);
                this.verticalFramesS25PintadoNegro.push(opening.frames.verticalFrame);
                this.lateralShashesS25PintadoNegro.push(opening.frames.lateralShash);
                if (opening.frames.lateralShashFix) this.lateralShashesS25PintadoNegro.push(opening.frames.lateralShashFix);
                this.centralShashesS25PintadoNegro.push(opening.frames.centralShash);
                if (opening.frames.centralShashFix) this.centralShashesS25PintadoNegro.push(opening.frames.centralShashFix);
                this.bigHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashBig);
                if (opening.frames.horizontalShashBigFix) this.bigHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashBigFix);
                this.smallHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashSmall);
                if (opening.frames.horizontalShashSmallFix) this.smallHorizontalShashesS25PintadoNegro.push(opening.frames.horizontalShashSmallFix);
                this.screenShashesS25PintadoNegro.push(opening.frames.screenShash);
                if (opening.frames.screenGuideS25L) this.screenGuideS25LPintadoNegro.push(opening.frames.screenGuideS25L);
                if (opening.frames.screenGuideS25P) this.screenGuideS25PPintadoNegro.push(opening.frames.screenGuideS25P);
            }}'''

content = re.sub(pat_negro, rep_negro, content)

with open('src/js/calculateMaterials.mjs', 'w', encoding='utf-8') as f:
    f.write(content)
print("Replaced!")
