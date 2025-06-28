export function s20(width, height, quantity){
    const pieces = {horizontalFrame: {lenght: width - 25, quantity: quantity * 2}, verticalFrame: {lenght: parseInt(height), quantity: quantity * 2}, lateralShash: {lenght: height-48, quantity: quantity * 2}, centralShash: {lenght: height-48, quantity: quantity * 2}, horizontalShash: {lenght: width / 2 - 74, quantity: quantity * 4}, glassWidth: {lenght: width / 2 - 58, quantity: quantity * 2}, glassHeight: {lenght: height - 112, quantity: quantity * 2}, screenWidth: {lenght: width / 2 + 10, quantity: quantity * 2}, screenHeight: {lenght: height - 30, quantity: quantity * 2}};
    console.log(pieces);
    return pieces;
    
}

export function s25(width, height, quantity){
    const pieces = {inferiorFrame: {lenght: width - 51, quantity: quantity},superiorFrame: {lenght: width - 51, quantity: quantity}, verticalFrame: {lenght: parseInt(height), quantity: quantity * 2}, lateralShash: {lenght: height-48, quantity: quantity * 2}, centralShash: {lenght: height-48, quantity: quantity * 2}, horizontalShashBig: {lenght: width / 2 - 96, quantity: quantity * 2}, horizontalShashSmall: {lenght: width / 2 - 96, quantity: quantity * 2}, glassWidth: {lenght: width / 2 - 58, quantity: quantity * 2}, glassHeight: {lenght: height - 112, quantity: quantity * 2},glassDvhUHorizontal: {lenght: width / 2 - 100, quantity: quantity * 4}, glassDvhUVertical: {lenght: height - 155, quantity: quantity * 4}, glassDvhWidth: {lenght: width / 2 - 111, quantity: quantity * 2}, glassDvhHeight: {lenght: height - 168, quantity: quantity * 2} , screenWidth: {lenght: width / 2 + 10, quantity: quantity * 2}, screenHeight: {lenght: height - 30, quantity: quantity * 2}};
    console.log(pieces);
    return pieces;
}