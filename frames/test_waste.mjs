
import calculateMaterials from './src/js/calculateMaterials.mjs';

// Mock Opening not needed if we call internal methods directly or mock the input structure
// But calculateFrameBarsQuantityWithCustomLength is the key.
// It is an instance method.

class MockCalc extends calculateMaterials {
    constructor() {
        super();
        this.barLenght = 6000;
        this.slice = 4;
    }
}

async function test() {
    const calc = new MockCalc();
    const pieces = [1000];
    const barLength = 6000;
    
    // Test internal method
    const result = calc.calculateFrameBarsQuantityWithCustomLength(pieces, barLength);
    
    console.log("Result:", JSON.stringify(result, null, 2));
    
    const waste = result.wastePerBar[0];
    console.log(`Waste for 1000mm piece on 6000mm bar: ${waste}`);
    
    // Expectation: 6000 - (1000 + 4) = 4996
    if (Math.abs(waste - 4996) < 0.1) {
        console.log("STATUS: CORRECT (4996)");
    } else if (Math.abs(waste - 5000) < 0.1) {
        console.log("STATUS: INCORRECT (5000) - Ignoring Slice");
    } else {
        console.log(`STATUS: UNKNOWN (${waste})`);
    }
}

test();
