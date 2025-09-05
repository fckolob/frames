export default class Frame{
    constructor(serie, code, lenght, name, spanishName, color, quantity){
        this.serie = serie;
        this.code = code;
        this.lenght = lenght;
        this.name = name;
        this.spanishName = spanishName;
        this.color = color;
        this.quantity = quantity;
        this.half = this.lenght / 2;
    }

    

}