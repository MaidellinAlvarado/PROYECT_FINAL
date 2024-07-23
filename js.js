/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const surfaceN = parseInt(readline()); // the number of points used to draw the surface of Mars.
for (let i = 0; i < surfaceN; i++) {
    var inputs = readline().split(' ');
    const landX = parseInt(inputs[0]); // X coordinate of a surface point. (0 to 6999)
    const landY = parseInt(inputs[1]); // Y coordinate of a surface point. By linking all the points together in a sequential fashion, you form the surface of Mars.
}

// game loop
while (true) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    const hSpeed = parseInt(inputs[2]); // the horizontal speed (in m/s), can be negative.
    const vSpeed = parseInt(inputs[3]); // the vertical speed (in m/s), can be negative.
    const fuel = parseInt(inputs[4]); // the quantity of remaining fuel in liters.
    const rotate = parseInt(inputs[5]); // the rotation angle in degrees (-90 to 90).
    const power = parseInt(inputs[6]); // the thrust power (0 to 4).

  
    let rotateAngle = 0;  
    let thrustPower = 3;  

    if (vSpeed < -35) {
        thrustPower = 4;  
    } else if (vSpeed < -20) {
        thrustPower = 3;  
    } else if (vSpeed < -10) {
        thrustPower = 2;  
    } else if (vSpeed < 0) {
        thrustPower = 1;  
    } else {
        thrustPower = 0;  
    }

   
    if (thrustPower > power + 1) {
        thrustPower = power + 1;
    } else if (thrustPower < power - 1) {
        thrustPower = power - 1;
    }

    // Imprimir el resultado
    console.log(`${rotateAngle} ${thrustPower}`);
}