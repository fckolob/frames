export default class displayBars{
    constructor(bars){
        this.bars = bars
    }

    getBarsList(){
        let list = "<ul class='materials-ul'>"
        this.bars.forEach(bar => {
            list += `<li class="materials-li">${bar.quantity} Bars of ${bar.name} ${bar.serie} ${bar.color} Codes: Aluminios del Uruguay = ${bar.code.aluminiosDelUruguay} Juan = ${bar.code.juan} Urualum = ${bar.code.urualum} Abasur = ${bar.code.abasur}</li>`
        });
        list += `</ul>`
        return list;
    }
}