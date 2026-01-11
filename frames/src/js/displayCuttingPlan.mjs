
export default class DisplayCuttingPlan {
    constructor() {
        this.slice = 4; // Kerf width
    }

    formatCuttingPlan(bar, pieces, barLength) {
        if (!bar.cuttingPlan || !bar.wastePerBar) return "";

        let html = `<div class="cutting-plan-container" style="margin-top: 10px; padding: 10px; background-color: #f5f5f5; border-radius: 5px;">`;
        html += `<h4>Cutting Plan (${bar.method} Method) - Bar Length: ${barLength}mm</h4>`;
        
        bar.cuttingPlan.forEach((bin, index) => {
            const waste = bar.wastePerBar[index];
            html += `<div class="cutting-bar-row" style="margin-bottom: 5px; border-bottom: 1px solid #ddd; padding: 5px;">`;
            html += `<strong>Bar ${index + 1}:</strong> `;
            
            // Map pieces to display string
            const piecesDisplay = bin.map(p => {
                return `<span class="piece-tag" style="background-color: #e0e0e0; padding: 2px 5px; border-radius: 3px; margin: 0 2px;">${p.length}mm</span>`;
            }).join(` <span class="cut-slice" style="color: #999;">+ ${this.slice}mm cut</span> `);
            
            html += piecesDisplay;
            
            if (typeof waste !== 'undefined') {
                 html += ` | <span class="waste-info" style="color: ${waste < 100 ? 'green' : 'orange'};">Waste: ${waste.toFixed(1)}mm</span>`;
            }
            
            html += `</div>`;
        });

        html += `</div>`;
        return html;
    }
}
