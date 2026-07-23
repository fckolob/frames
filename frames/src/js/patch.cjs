const fs = require('fs');
const file = 'c:/Users/fckol/OneDrive/Documentos/frames-webapp/frames/src/js/calculateMaterials.mjs';
let content = fs.readFileSync(file, 'utf8');

const colors = ["Anodizado", "Blanco", "Anolok", "ImitacionMadera", "PintadoNegro"];

// 1. Add array definitions to constructor
let insertions = [];
colors.forEach(color => {
    insertions.push(`        this.centralShashesReinforcedS25${color} = [];`);
    insertions.push(`        this.centralShashesFixReinforcedS25${color} = [];`);
});
content = content.replace(/this\.framesArrays = \[\];/g, insertions.join('\n') + '\n\n        this.framesArrays = [];');

// 2. Change the condition
content = content.replace(/opening\.serie === "s25" \|\| opening\.serie === "s25TresHojasEnDosRieles"/g, 'opening.serie === "s25" || opening.serie === "s25TresHojasEnDosRieles" || opening.serie === "s25ReforzadaTresHojasEnDosRieles"');

// 3. For each color, insert pushing the reinforced shashes
colors.forEach(color => {
    const searchStr = `if (opening.frames.centralShashFix) this.centralShashesS25${color}.push(opening.frames.centralShashFix);`;
    const pushStrs = `if (opening.frames.centralShashFix) this.centralShashesS25${color}.push(opening.frames.centralShashFix);\n                if (opening.frames.centralShashReinforced) this.centralShashesReinforcedS25${color}.push(opening.frames.centralShashReinforced);\n                if (opening.frames.centralShashFixReinforced) this.centralShashesFixReinforcedS25${color}.push(opening.frames.centralShashFixReinforced);`;
    content = content.replace(searchStr, pushStrs);
});

// 4. Push arrays into this.framesArrays
let arraysToPush = [];
colors.forEach(color => {
    arraysToPush.push(`            this.centralShashesReinforcedS25${color},`);
    arraysToPush.push(`            this.centralShashesFixReinforcedS25${color},`);
});
content = content.replace(/this\.framesArrays = \[/g, "this.framesArrays = [\n" + arraysToPush.join('\n'));

fs.writeFileSync(file, content);
console.log("Patched successfully");
