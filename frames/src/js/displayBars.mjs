import DisplayCuttingPlan from './displayCuttingPlan.mjs';

export default class displayBars{
    constructor(bars){
        this.bars = bars;
        this.displayPlan = new DisplayCuttingPlan();
    }

    getBarsList(){
        let list = "<ul class='materials-ul'>"
        this.bars.forEach((bar, index) => {
            const method = bar.method || "N/A";
            const cuttingPlanHtml = this.displayPlan.formatCuttingPlan(bar, bar.pieces, bar.barLength);
            // Unique ID for the plan container to toggle
            const planId = `plan-${index}`;
            
            list += `<li class="materials-li">
                <div class="bar-header">
                    ${bar.quantity} Barra(s) de ${bar.name} ${bar.serie} ${bar.color} [Method: ${method}] 
                    <br>
                    <small>Codigos: Aluminios del Uruguay = ${bar.code.aluminiosDelUruguay} Juan = ${bar.code.juan} Urualum = ${bar.code.urualum} Abasur = ${bar.code.abasur}</small>
                </div>
                ${cuttingPlanHtml ? `<button class="toggle-plan-btn" data-target="${planId}">View Cutting Plan</button>` : ''}
                <div id="${planId}" class="cutting-plan-wrapper">
                    ${cuttingPlanHtml}
                </div>
            </li>`
        });
        list += `</ul>`
        return list;
    }
}