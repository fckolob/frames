import { Opening } from './opening.mjs';
import calculateMaterials from './calculateMaterials.mjs';

async function test() {
    try {
        let opening = new Opening(1000, 1000, "s25ReforzadaTresHojasEnDosRieles", "anodizado", false, false, 1);
        await opening.init();
        let calc = new calculateMaterials([opening]);
        let bars = await calc.getFrameBars();
        console.log("Success! Bars length:", bars.length);
        bars.forEach(b => console.log(b.name, b.quantity));
    } catch (e) {
        console.error("Error occurred:", e);
    }
}

test();
