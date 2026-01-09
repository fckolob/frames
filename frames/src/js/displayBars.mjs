export default class displayBars{
    constructor(bars){
        this.bars = bars
    }

    getBarsList(){
        let list = "<ul class='materials-ul'>"
        this.bars.forEach(bar => {
            const method = bar.method || "N/A";
            list += `<li class="materials-li">${bar.quantity} Barra(s) de ${bar.name} ${bar.serie} ${bar.color} [Method: ${method}] Codigos: Aluminios del Uruguay = ${bar.code.aluminiosDelUruguay} Juan = ${bar.code.juan} Urualum = ${bar.code.urualum} Abasur = ${bar.code.abasur}</li>`
        });
        list += `</ul>`
        return list;
    }
}