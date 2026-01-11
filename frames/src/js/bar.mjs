export default class bar {
    constructor(quantity, name, serie, color, code){
        this.quantity = quantity;
        this.name = name;
        this.serie = serie;
        this.color = color;
        this.code = code;
        // Optional properties for cutting plan
        this.cuttingPlan = null;
        this.wastePerBar = null;
        this.pieces = null;
        this.barLength = null;
    }
}