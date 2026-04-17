export default class reporteDeAccesorios{

    constructor(data = {}){
        this.cierresLaterales = data.cierresLaterales || {codigo: "NGG2114", cantidad: 0, nombre: "Cierres Laterales Brio"};
        this.ruedasParaHojas = data.ruedasParaHojas || {codigo: "AGF1020", cantidad: 0, nombre: "Ruedas regulables para hojas"};
        this.ruedasParaMosquitero = data.ruedasParaMosquitero || {codigo: "AGG1060", cantidad: 0, nombre: "Ruedas regulables para mosquitero"};
        this.tapaMatrizEnganche = data.tapaMatrizEnganche || {codigo: "AGU3574", cantidad: 0, nombre: "Tapamatrices para enganche"};
        this.taponDeHermeticidadLateralesDeHoja = data.taponDeHermeticidadLateralesDeHoja || {codigo: "AGG5600", cantidad: 0, nombre: "Tapones de hermeticidad para laterales de hoja"};
        this.dispositivosDeEstanqueidad = data.dispositivosDeEstanqueidad || {codigo: "APD3054", cantidad: 0, nombre: "Dispositivos de estanqueidad"};
        this.felpilla = data.felpilla || {codigo: "AMS7227", cantidad: 0, nombre: "Felpilla", unidadDeCantidad: "metros"};
        this.martillos = data.martillos || {codigo: "NGG6260", cantidad: 0, nombre: "Martillos para cierres laterales Brio"};
        this.recibidoresDeCierresLaterales = data.recibidoresDeCierresLaterales || {codigo: "NGG6390", cantidad: 0, nombre: "Recibidor de Cierres Laterales"};
        this.tapadesagues = data.tapadesagues || {codigo: "AUU3094", cantidad: 0, nombre: "Tapa desagües"};
    }

    add(otherAccesorios) {
        if (!otherAccesorios) return;
        
        const sumItem = (thisItem, otherItem) => {
             if(otherItem && otherItem.cantidad){
                 thisItem.cantidad += otherItem.cantidad;
             }
        };

        sumItem(this.cierresLaterales, otherAccesorios.cierresLaterales);
        sumItem(this.ruedasParaHojas, otherAccesorios.ruedasParaHojas);
        sumItem(this.ruedasParaMosquitero, otherAccesorios.ruedasParaMosquitero);
        sumItem(this.tapaMatrizEnganche, otherAccesorios.tapaMatrizEnganche);
        sumItem(this.taponDeHermeticidadLateralesDeHoja, otherAccesorios.taponDeHermeticidadLateralesDeHoja);
        sumItem(this.dispositivosDeEstanqueidad, otherAccesorios.dispositivosDeEstanqueidad);
        sumItem(this.felpilla, otherAccesorios.felpilla);
        sumItem(this.martillos, otherAccesorios.martillos);
        sumItem(this.recibidoresDeCierresLaterales, otherAccesorios.recibidoresDeCierresLaterales);
        sumItem(this.tapadesagues, otherAccesorios.tapadesagues);
    }

    getHTMLList() {
        let list = "<ul class='accesorios-ul'>";
        const items = [
            this.cierresLaterales, this.ruedasParaHojas, this.ruedasParaMosquitero,
            this.tapaMatrizEnganche, this.taponDeHermeticidadLateralesDeHoja,
            this.dispositivosDeEstanqueidad, this.felpilla, this.martillos,
            this.recibidoresDeCierresLaterales, this.tapadesagues
        ];

        let addedAny = false;
        items.forEach(item => {
            if (item && item.cantidad > 0) {
                addedAny = true;
                const nombre = item.nombre;
                const unidad = item.unidadDeCantidad || "unidades";
                const cantidadFormatada = typeof item.cantidad === 'number' ? 
                            (Number.isInteger(item.cantidad) ? String(item.cantidad) : item.cantidad.toFixed(2)) : item.cantidad;
                list += `<li class="materials-li">
                   Codigo: <strong>${item.codigo}</strong> - ${nombre}: ${cantidadFormatada} ${unidad}
                </li>`;
            }
        });
        
        if (!addedAny) {
             list += `<li class="materials-li">No hay accesorios en este reporte.</li>`;
        }

        list += "</ul>";
        return list;
    }

}